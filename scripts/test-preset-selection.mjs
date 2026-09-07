import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const dataSource = fs.readFileSync(new URL('../public/portfolio-data.js', import.meta.url), 'utf8');
const app = fs.readFileSync(new URL('../public/app.js', import.meta.url), 'utf8');
function setup(project = null) {
  const ctx = vm.createContext({window: {}, requestedProjectId: project});
  vm.runInContext(dataSource, ctx);
  vm.runInContext(`const data = window.PORTFOLIO_DATA;
    const roleTags = new Set(['fullstack','backend','fintech','ai','game-server','cpp','game-client']);
    let selectedTags = new Set();`, ctx);
  vm.runInContext(app.slice(app.indexOf('function matchingPreset('), app.indexOf('function element(')), ctx);
  return ctx;
}
function ids(ctx, tags) {
  ctx.inputTags = tags;
  return JSON.parse(vm.runInContext('JSON.stringify(matchingModules(new Set(inputTags)).map(m=>m.id))',ctx));
}
test('submitted tag URLs keep curated selection and order regardless of tag ordering', () => {
  const ctx = setup();
  for (const preset of ctx.window.PORTFOLIO_DATA.presets) {
    const expected = Array.from(preset.caseIds);
    assert.deepEqual(ids(ctx, preset.tags), expected);
    assert.deepEqual(ids(ctx, [...preset.tags].reverse()), expected);
  }
  const game = ctx.window.PORTFOLIO_DATA.presets.find(p=>p.id==='game-client');
  assert.deepEqual(ids(ctx,game.tags).slice(0,4),['nirvana-loading-ui','nirvana-animation','nirvana-gameplay-network','p2p-rollback']);
  const service = ctx.window.PORTFOLIO_DATA.presets.find(p=>p.id==='game-service');
  assert.ok(ids(ctx,service.tags).some(id=>id.startsWith('nirvana-')));
  assert.ok(ids(ctx,service.tags).includes('redis-k6'));
});
test('custom tags fall back to matching; restoring tags restores the preset',()=>{
  const ctx=setup();
  const preset=ctx.window.PORTFOLIO_DATA.presets.find(p=>p.id==='finance-backend');
  const custom=[...preset.tags,'mobile'];
  ctx.inputTags=custom;
  assert.equal(vm.runInContext('matchingPreset(new Set(inputTags))',ctx),undefined);
  assert.ok(ids(ctx,custom).length>0);
  assert.deepEqual(ids(ctx,preset.tags),Array.from(preset.caseIds));
  assert.deepEqual(ids(ctx,[]),[]);
});
test('project pages include their full record even with preset tags in URL',()=>{
  const ctx=setup('nirvana');
  const preset=ctx.window.PORTFOLIO_DATA.presets.find(p=>p.id==='game-client');
  const result=ids(ctx,preset.tags);
  assert.equal(result.length,6);
  assert.ok(result.includes('nirvana-session'));
  assert.ok(result.every(id=>id.startsWith('nirvana-')));
});

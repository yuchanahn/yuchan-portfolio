import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const projectRoot = path.resolve(import.meta.dirname, "..");
const publicRoot = path.join(projectRoot, "public");
const dataPath = path.join(publicRoot, "portfolio-data.js");
const context = { window: {} };

vm.createContext(context);
vm.runInContext(fs.readFileSync(dataPath, "utf8"), context);

const data = context.window.PORTFOLIO_DATA;
const failures = [];
const moduleIds = new Set();
const knownTags = new Set(Object.keys(data.tags));
const knownProjects = new Set(Object.keys(data.projects));

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function checkTags(tags, owner) {
  tags.forEach((tag) => assert(knownTags.has(tag), `${owner}: unknown tag '${tag}'`));
}

function checkImage(image, owner) {
  if (!image?.src) return;
  const relativePath = image.src.replace(/^\.\//, "");
  assert(fs.existsSync(path.join(publicRoot, relativePath)), `${owner}: missing image '${image.src}'`);
}

function checkLinks(links, owner) {
  (links || []).forEach((link, index) => {
    assert(typeof link.href === "string" && /^https?:\/\//.test(link.href), `${owner}: invalid link ${index + 1}`);
  });
}

data.tagGroups.forEach((group) => checkTags(group.tags, `tag group ${group.id}`));
data.presets.forEach((preset) => checkTags(preset.tags, `preset ${preset.id}`));
Object.entries(data.projects).forEach(([projectId, project]) => checkLinks(project.links, `project ${projectId}`));

data.modules.forEach((module) => {
  assert(!moduleIds.has(module.id), `duplicate module id '${module.id}'`);
  moduleIds.add(module.id);
  assert(knownProjects.has(module.project), `${module.id}: unknown project '${module.project}'`);
  assert(Array.isArray(module.tags) && module.tags.length > 0, `${module.id}: no tags`);
  checkTags(module.tags, module.id);
  checkImage(module.image, module.id);
  (module.images || []).forEach((image) => checkImage(image, module.id));
  checkLinks(module.links, module.id);
});

data.presets.forEach((preset) => {
  const tags = new Set(preset.tags);
  const matches = data.modules.filter((module) => module.tags.some((tag) => tags.has(tag)));
  assert(matches.length >= 4, `preset ${preset.id}: only ${matches.length} matching modules`);
});

const indexHtml = fs.readFileSync(path.join(publicRoot, "index.html"), "utf8");
assert(indexHtml.includes("portfolio-data.js"), "index.html does not load portfolio-data.js");
assert(indexHtml.includes("app.js"), "index.html does not load app.js");

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${knownTags.size} tags, ${data.presets.length} presets, and ${data.modules.length} case studies.`);

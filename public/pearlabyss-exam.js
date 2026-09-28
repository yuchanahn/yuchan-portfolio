const DATA = window.PEARL_EXAM_DATA;
const app = document.querySelector("#exam-app");

const state = {
  screen: "home",
  mode: "full",
  questions: [],
  current: 0,
  answers: {},
  secondsLeft: 75 * 60,
  timerId: null,
  codingIndex: 0,
  language: "csharp",
  code: "",
  stdin: "",
  output: "",
  outputError: false,
  running: false,
};

const COMPILERS = {
  csharp: "mono-6.12.0.199",
  cpp: "gcc-13.2.0",
};

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  }[char]));
}

function normalizeOutput(value) {
  return String(value ?? "").replace(/\r/g, "").trimEnd();
}

function shuffle(items) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function selectFullExam() {
  return DATA.categories.flatMap((category) =>
    shuffle(DATA.questions.filter((q) => q.category === category)).slice(0, 5),
  );
}

function selectWeakExam() {
  const focus = ["자료구조/알고리즘", "C#/.NET"];
  return focus.flatMap((category) =>
    shuffle(DATA.questions.filter((q) => q.category === category)).slice(0, 10),
  );
}

function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

function clearTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

function startExam(mode) {
  clearTimer();
  state.mode = mode;
  state.questions = mode === "weak" ? selectWeakExam() : selectFullExam();
  state.current = 0;
  state.answers = {};
  state.secondsLeft = mode === "weak" ? 40 * 60 : 75 * 60;
  state.screen = "exam";
  state.timerId = setInterval(() => {
    state.secondsLeft -= 1;
    const timer = document.querySelector("#timer");
    if (timer) timer.textContent = formatTime(state.secondsLeft);
    if (state.secondsLeft <= 0) submitExam();
  }, 1000);
  render();
  window.scrollTo(0, 0);
}

function submitExam() {
  clearTimer();
  state.screen = "result";
  render();
  window.scrollTo(0, 0);
}

function chooseAnswer(index) {
  const question = state.questions[state.current];
  state.answers[question.id] = index;
  renderExam();
}

function goQuestion(index) {
  if (index < 0 || index >= state.questions.length) return;
  state.current = index;
  renderExam();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function visualMarkup(type) {
  if (type === "tree") {
    return `<div class="visual-box" aria-label="binary tree diagram">
      <svg viewBox="0 0 720 250" role="img">
        <g stroke="#555" stroke-width="3" fill="none"><path d="M360 48 L220 118 M360 48 L500 118 M220 118 L145 200 M220 118 L295 200 M500 118 L575 200"/></g>
        ${[[360,45,"1"],[220,118,"2"],[500,118,"3"],[145,200,"4"],[295,200,"5"],[575,200,"6"]].map(([x,y,t])=>`<g><circle cx="${x}" cy="${y}" r="27" fill="#fff" stroke="#171717" stroke-width="3"/><text x="${x}" y="${y+7}" text-anchor="middle" font-size="20" font-weight="800">${t}</text></g>`).join("")}
      </svg></div>`;
  }
  if (type === "graph") {
    const nodes = {A:[90,125],B:[250,65],C:[250,185],D:[430,65],E:[430,185],F:[610,125]};
    const edges = [["A","B"],["A","C"],["B","D"],["C","E"],["D","F"],["E","F"]];
    return `<div class="visual-box" aria-label="graph diagram"><svg viewBox="0 0 700 250" role="img"><g stroke="#777" stroke-width="4">${edges.map(([a,b])=>`<line x1="${nodes[a][0]}" y1="${nodes[a][1]}" x2="${nodes[b][0]}" y2="${nodes[b][1]}"/>`).join("")}</g>${Object.entries(nodes).map(([n,[x,y]])=>`<g><circle cx="${x}" cy="${y}" r="27" fill="#fff" stroke="#171717" stroke-width="3"/><text x="${x}" y="${y+7}" text-anchor="middle" font-size="18" font-weight="800">${n}</text></g>`).join("")}</svg></div>`;
  }
  if (type === "proxy") {
    return `<div class="visual-box" aria-label="reverse proxy request flow"><svg viewBox="0 0 760 250" role="img"><defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#555"/></marker></defs><g font-family="Arial" text-anchor="middle"><rect x="35" y="85" width="150" height="80" rx="8" fill="#fff" stroke="#171717" stroke-width="3"/><text x="110" y="132" font-size="18" font-weight="800">Client</text><rect x="300" y="60" width="165" height="130" rx="8" fill="#f1e8e6" stroke="#a82d2d" stroke-width="3"/><text x="382" y="120" font-size="18" font-weight="800">Reverse Proxy</text><text x="382" y="145" font-size="13">TLS · Routing · LB</text><rect x="590" y="30" width="130" height="70" rx="8" fill="#fff" stroke="#171717"/><text x="655" y="70" font-size="16" font-weight="800">App A</text><rect x="590" y="150" width="130" height="70" rx="8" fill="#fff" stroke="#171717"/><text x="655" y="190" font-size="16" font-weight="800">App B</text><path d="M185 125 L295 125" stroke="#555" stroke-width="4" marker-end="url(#arrow)"/><path d="M465 105 L585 68" stroke="#555" stroke-width="4" marker-end="url(#arrow)"/><path d="M465 145 L585 183" stroke="#555" stroke-width="4" marker-end="url(#arrow)"/></g></svg></div>`;
  }
  return "";
}

function topbar(extra = "") {
  return `<header class="topbar"><div class="brand">PEARL ABYSS · WEB BACKEND PRACTICE</div><div class="top-actions">${extra}<a class="ghost-button link-button" href="./">포트폴리오</a></div></header>`;
}

function renderHome() {
  app.innerHTML = `${topbar()}<main class="shell"><section class="hero"><div><p class="eyebrow">Mock written test + coding playground</p><h1>필기와 코딩을<br>한 화면에서.</h1><p class="lead">고정 25문항 대신 60문항 문제은행에서 매 회차 새 조합을 뽑습니다. 트리·그래프·요청 흐름 그림 문제와 C#/C++ 실행형 코딩 문제를 함께 연습할 수 있습니다.</p><div class="stats"><div><strong>${DATA.questions.length}</strong><span>객관식 문제은행</span></div><div><strong>${DATA.codingProblems.length}</strong><span>코딩 문제</span></div><div><strong>2</strong><span>C# / C++</span></div></div></div><aside class="mode-panel"><button class="mode-card" data-action="full"><strong>랜덤 모의필기 25문항</strong><span>5개 영역에서 5문항씩 랜덤 출제 · 75분</span></button><button class="mode-card" data-action="weak"><strong>약점 집중 20문항</strong><span>자료구조/알고리즘 + C#/.NET 집중 · 40분</span></button><button class="mode-card" data-action="coding"><strong>코딩 플레이그라운드</strong><span>문제 확인 → C#/C++ 작성 → 실행 → 샘플 채점</span></button><p class="notice">실제 채용 시험의 기출 복원본이 아니라 공개 정보와 일반적인 웹 백엔드 필기 범위를 바탕으로 만든 연습용 문제입니다.</p></aside></section></main>`;
  document.querySelector('[data-action="full"]').onclick = () => startExam("full");
  document.querySelector('[data-action="weak"]').onclick = () => startExam("weak");
  document.querySelector('[data-action="coding"]').onclick = () => openCoding();
}

function renderExam() {
  const q = state.questions[state.current];
  const answered = Object.keys(state.answers).length;
  app.innerHTML = `${topbar(`<div id="timer" class="timer">${formatTime(state.secondsLeft)}</div><button class="button" id="submit">답안 제출</button>`)}<main class="shell exam-layout"><section class="card"><div class="question-meta">${state.mode === "weak" ? "WEAKNESS DRILL" : "RANDOM MOCK"} · ${state.current + 1}/${state.questions.length} · ${esc(q.category)}</div><h1 class="question-title">${esc(q.prompt)}</h1>${q.visual ? visualMarkup(q.visual) : ""}${q.code ? `<pre class="code">${esc(q.code)}</pre>` : ""}<div>${q.choices.map((choice,index)=>`<button class="choice ${state.answers[q.id]===index ? "selected" : ""}" data-choice="${index}"><span class="choice-index">${index+1}</span><span>${esc(choice)}</span></button>`).join("")}</div><div class="question-nav"><button class="ghost-button" id="prev" ${state.current===0?"disabled":""}>이전</button><button class="ghost-button" id="next" ${state.current===state.questions.length-1?"disabled":""}>다음</button></div></section><aside class="side-card"><h2>답안 현황</h2><div class="palette">${state.questions.map((item,index)=>`<button class="${state.answers[item.id]!==undefined?"answered":""} ${index===state.current?"current":""}" data-q="${index}">${index+1}</button>`).join("")}</div><p class="progress">${answered}/${state.questions.length} 응답</p></aside></main>`;
  document.querySelector("#submit").onclick = submitExam;
  document.querySelector("#prev").onclick = () => goQuestion(state.current - 1);
  document.querySelector("#next").onclick = () => goQuestion(state.current + 1);
  document.querySelectorAll("[data-choice]").forEach((button) => button.onclick = () => chooseAnswer(Number(button.dataset.choice)));
  document.querySelectorAll("[data-q]").forEach((button) => button.onclick = () => goQuestion(Number(button.dataset.q)));
}

function buildResultSummary(score, percent, categoryScores, missed) {
  const categoryText = Object.entries(categoryScores).map(([name, value]) => `${name} ${value.correct}/${value.total}`).join(", ");
  return `펄어비스 웹 백엔드 모의필기 결과\n모드: ${state.mode === "weak" ? "약점 집중" : "랜덤 25문항"}\n총점: ${score}/${state.questions.length} (${percent}%)\n영역: ${categoryText}\n오답: ${missed.map((q) => `${q.id}(${q.category})`).join(", ") || "없음"}\n이 결과를 기준으로 오답 개념부터 바로 학습시켜줘.`;
}

function renderResult() {
  const categoryScores = {};
  DATA.categories.forEach((category) => { categoryScores[category] = { correct: 0, total: 0 }; });
  let score = 0;
  state.questions.forEach((q) => {
    categoryScores[q.category].total += 1;
    if (state.answers[q.id] === q.answer) {
      score += 1;
      categoryScores[q.category].correct += 1;
    }
  });
  const percent = Math.round((score / state.questions.length) * 100);
  const missed = state.questions.filter((q) => state.answers[q.id] !== q.answer);
  const summary = buildResultSummary(score, percent, categoryScores, missed);
  const usedCategories = Object.entries(categoryScores).filter(([,value]) => value.total > 0);
  app.innerHTML = `${topbar()}<main class="shell"><section class="card"><p class="eyebrow">Result</p><div class="result-score">${score}/${state.questions.length}</div><p class="lead">${percent}% · 미응답 ${state.questions.filter((q)=>state.answers[q.id]===undefined).length}문항</p><div class="category-grid">${usedCategories.map(([name,value])=>`<div><strong>${esc(name)}</strong>${value.correct}/${value.total}</div>`).join("")}</div></section><section class="card section-gap"><h2>오답 해설</h2>${missed.length ? missed.map((q)=>`<article class="review"><div class="question-meta">${q.id} · ${esc(q.category)}</div><h3>${esc(q.prompt)}</h3>${q.visual ? visualMarkup(q.visual) : ""}<p><strong>정답 ${q.answer+1}.</strong> ${esc(q.choices[q.answer])}</p><p>${esc(q.explanation)}</p><p><strong>학습 포인트</strong> · ${esc(q.lesson)}</p></article>`).join("") : "<p>전 문항 정답입니다.</p>"}</section><section class="card section-gap"><h2>Codex 보충 학습용 결과</h2><div id="summary" class="copybox">${esc(summary)}</div><div class="actions"><button class="button" id="copy-result">결과 복사</button><button class="ghost-button" id="retry">새 조합 다시 풀기</button><button class="ghost-button" id="coding">코딩 문제로 이동</button><button class="ghost-button" id="home">메인</button></div></section></main>`;
  document.querySelector("#copy-result").onclick = async () => {
    await navigator.clipboard.writeText(summary);
    document.querySelector("#copy-result").textContent = "복사 완료";
  };
  document.querySelector("#retry").onclick = () => startExam(state.mode);
  document.querySelector("#coding").onclick = openCoding;
  document.querySelector("#home").onclick = () => { state.screen = "home"; render(); };
}

function codeStorageKey(problem, language) {
  return `pearl-exam-code-${problem.id}-${language}`;
}

function loadCode(problem, language) {
  try { return localStorage.getItem(codeStorageKey(problem, language)) || problem.starter[language]; }
  catch { return problem.starter[language]; }
}

function saveCode(problem, language, code) {
  try { localStorage.setItem(codeStorageKey(problem, language), code); } catch {}
}

function openCoding(index = state.codingIndex) {
  clearTimer();
  state.screen = "coding";
  state.codingIndex = index;
  const problem = DATA.codingProblems[index];
  state.code = loadCode(problem, state.language);
  state.stdin = problem.sampleInput;
  state.output = "";
  state.outputError = false;
  state.running = false;
  renderCoding();
  window.scrollTo(0, 0);
}

function combinedCompilerOutput(result) {
  return [result.compiler_error, result.compiler_message, result.program_error, result.program_output]
    .filter(Boolean).join("\n").trim();
}

async function executeCode(code, stdin) {
  const response = await fetch("https://wandbox.org/api/compile.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ compiler: COMPILERS[state.language], code, stdin, save: false }),
  });
  if (!response.ok) throw new Error(`Compiler API HTTP ${response.status}`);
  const result = await response.json();
  return {
    result,
    text: combinedCompilerOutput(result),
    programOutput: result.program_output || "",
    ok: String(result.status) === "0" && !result.compiler_error && !result.program_error,
  };
}

async function runCode() {
  if (state.running) return;
  const problem = DATA.codingProblems[state.codingIndex];
  const editor = document.querySelector("#editor");
  const stdin = document.querySelector("#stdin");
  state.code = editor.value;
  state.stdin = stdin.value;
  saveCode(problem, state.language, state.code);
  state.running = true;
  state.output = "컴파일/실행 중...";
  state.outputError = false;
  renderCoding();
  try {
    const run = await executeCode(state.code, state.stdin);
    state.output = run.text || "(출력 없음)";
    state.outputError = !run.ok;
  } catch (error) {
    state.output = `실행 서버 호출 실패: ${error.message}\n코드는 브라우저에 그대로 저장되어 있습니다.`;
    state.outputError = true;
  } finally {
    state.running = false;
    renderCoding();
  }
}

async function gradeCode() {
  if (state.running) return;
  const problem = DATA.codingProblems[state.codingIndex];
  const editor = document.querySelector("#editor");
  state.code = editor.value;
  saveCode(problem, state.language, state.code);
  state.running = true;
  state.output = "샘플 테스트 실행 중...";
  state.outputError = false;
  renderCoding();
  const lines = [];
  let allPassed = true;
  try {
    for (let i = 0; i < problem.tests.length; i += 1) {
      const test = problem.tests[i];
      const run = await executeCode(state.code, test.input);
      if (!run.ok) {
        lines.push(`TEST ${i + 1}: COMPILE/RUNTIME ERROR\n${run.text}`);
        allPassed = false;
        break;
      }
      const actual = normalizeOutput(run.programOutput);
      const expected = normalizeOutput(test.output);
      const passed = actual === expected;
      lines.push(`TEST ${i + 1}: ${passed ? "PASS" : "FAIL"}${passed ? "" : `\nexpected: ${expected}\nactual:   ${actual}`}`);
      if (!passed) allPassed = false;
    }
    state.output = `${lines.join("\n\n")}\n\n${allPassed ? "샘플 테스트 전체 통과" : "샘플 테스트 미통과"}`;
    state.outputError = !allPassed;
  } catch (error) {
    state.output = `채점 서버 호출 실패: ${error.message}\n코드는 브라우저에 그대로 저장되어 있습니다.`;
    state.outputError = true;
  } finally {
    state.running = false;
    renderCoding();
  }
}

function renderCoding() {
  const problem = DATA.codingProblems[state.codingIndex];
  app.innerHTML = `${topbar(`<button class="ghost-button" id="back-home">모의필기</button>`)}<main class="shell coding-layout"><aside class="card"><p class="eyebrow">Coding test</p><div class="problem-list">${DATA.codingProblems.map((item,index)=>`<button class="problem-button ${index===state.codingIndex?"active":""}" data-problem="${index}"><strong>${item.id}. ${esc(item.title)}</strong><small>${esc(item.difficulty)} · ${item.tags.join(" · ")}</small></button>`).join("")}</div><p class="notice">실행은 Wandbox 공개 컴파일러를 호출합니다. 네트워크 오류가 나도 작성 코드는 브라우저 localStorage에 저장됩니다.</p></aside><section class="card"><div class="question-meta">${problem.id} · ${esc(problem.difficulty)}</div><h1 class="problem-title">${esc(problem.title)}</h1><div class="chips">${problem.tags.map((tag)=>`<span class="chip">${esc(tag)}</span>`).join("")}</div><p class="problem-copy">${esc(problem.statement)}</p><div class="io-grid"><article><h3>입력</h3><p>${esc(problem.input)}</p></article><article><h3>출력</h3><p>${esc(problem.output)}</p></article></div><p class="problem-copy"><strong>제약</strong> · ${esc(problem.constraints)}</p><div class="sample"><pre><strong>Sample Input</strong>\n\n${esc(problem.sampleInput)}</pre><pre><strong>Sample Output</strong>\n\n${esc(problem.sampleOutput)}</pre></div><div class="editor-toolbar"><select id="language"><option value="csharp" ${state.language==="csharp"?"selected":""}>C# (Mono)</option><option value="cpp" ${state.language==="cpp"?"selected":""}>C++ (GCC 13)</option></select><button class="ghost-button" id="reset-code">초기 코드</button><button class="ghost-button" id="copy-code">코드 복사</button></div><textarea id="editor" class="editor" spellcheck="false" aria-label="code editor">${esc(state.code)}</textarea><h3>표준 입력</h3><textarea id="stdin" class="stdin" spellcheck="false">${esc(state.stdin)}</textarea><div class="grader-row"><button class="button" id="run" ${state.running?"disabled":""}>실행</button><button class="ghost-button" id="grade" ${state.running?"disabled":""}>샘플 테스트 전체 채점</button></div><pre class="console ${state.outputError?"error":""}">${esc(state.output || "실행 결과가 여기에 표시됩니다.")}</pre><p class="status-note">실전 연습에서는 자동완성은 허용해도 좋지만 검색/Copilot/Codex는 끄고 푸는 것을 권장합니다. 최종 평가는 코드를 이 세션에 가져오면 시간복잡도·예외케이스·구조까지 같이 볼 수 있습니다.</p></section></main>`;
  document.querySelector("#back-home").onclick = () => { state.screen = "home"; render(); };
  document.querySelectorAll("[data-problem]").forEach((button) => button.onclick = () => {
    const current = DATA.codingProblems[state.codingIndex];
    const editor = document.querySelector("#editor");
    saveCode(current, state.language, editor.value);
    openCoding(Number(button.dataset.problem));
  });
  document.querySelector("#language").onchange = (event) => {
    const current = DATA.codingProblems[state.codingIndex];
    saveCode(current, state.language, document.querySelector("#editor").value);
    state.language = event.target.value;
    state.code = loadCode(current, state.language);
    state.output = "";
    renderCoding();
  };
  const editor = document.querySelector("#editor");
  editor.oninput = () => saveCode(problem, state.language, editor.value);
  editor.onkeydown = (event) => {
    if (event.key !== "Tab") return;
    event.preventDefault();
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.value = `${editor.value.slice(0,start)}    ${editor.value.slice(end)}`;
    editor.selectionStart = editor.selectionEnd = start + 4;
    saveCode(problem, state.language, editor.value);
  };
  document.querySelector("#reset-code").onclick = () => {
    state.code = problem.starter[state.language];
    saveCode(problem, state.language, state.code);
    state.output = "";
    renderCoding();
  };
  document.querySelector("#copy-code").onclick = async () => {
    await navigator.clipboard.writeText(document.querySelector("#editor").value);
    document.querySelector("#copy-code").textContent = "복사 완료";
  };
  document.querySelector("#run").onclick = runCode;
  document.querySelector("#grade").onclick = gradeCode;
}

function render() {
  if (state.screen === "exam") return renderExam();
  if (state.screen === "result") return renderResult();
  if (state.screen === "coding") return renderCoding();
  return renderHome();
}

render();

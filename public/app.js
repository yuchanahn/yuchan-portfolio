const data = window.PORTFOLIO_DATA;

const translations = {
  ko: {
    heroEyebrow: "MODULAR PORTFOLIO",
    heroTitle: "보고 싶은 기술을 고르면 포트폴리오가 다시 구성됩니다.",
    heroDescription:
      "각 개발 경험을 독립된 기록으로 저장했습니다. 지원 직무와 기술 태그를 조합하면 관련 사례만 골라 한 편의 문서로 이어서 보여줍니다.",
    presetEyebrow: "QUICK START",
    presetTitle: "지원 직무별 기본 조합",
    presetDescription: "기본 조합을 고른 뒤 태그를 더하거나 뺄 수 있습니다.",
    tagEyebrow: "BUILD YOUR VIEW",
    tagTitle: "태그 직접 조합",
    clearTags: "전체 해제",
    selectedTags: "선택한 태그",
    noTags: "아직 선택한 태그가 없습니다.",
    buildPortfolio: "이 조합으로 문서 만들기",
    systemNote:
      "선택한 태그는 URL에 저장됩니다. 같은 주소를 보내면 상대방도 같은 순서와 내용의 포트폴리오를 볼 수 있습니다.",
    editTags: "태그 다시 고르기",
    copyLink: "링크 복사",
    copied: "이 조합의 주소를 복사했습니다.",
    copyFailed: "주소를 복사하지 못했습니다.",
    savePdf: "PDF로 저장",
    caseCount: "개 기술 사례",
    selectedPortfolio: "SELECTED PORTFOLIO",
    profileLabel: "DEVELOPER",
    contactLabel: "CONTACT & LINKS",
    contentsLabel: "SELECTED EXPERIENCE",
    projectLabel: "PROJECT",
    matchingTags: "이 문서에서 연결된 태그",
    generatedNote:
      "이 문서는 선택한 기술 태그를 기준으로 기록된 개발 경험을 자동 구성한 결과입니다.",
    allRecords: "전체 기록에서 선택됨",
    switchDark: "다크 모드로 전환",
    switchLight: "라이트 모드로 전환",
    portfolioTitles: {
      fintech: "금융·웹 백엔드 포트폴리오",
      "game-client": "Unreal·Unity 게임 개발 포트폴리오",
      cpp: "C++ 시스템·네트워크 포트폴리오",
      "game-server": "게임 서비스 백엔드 포트폴리오",
      ai: "AI 서비스 개발 포트폴리오",
      fullstack: "풀스택 웹 개발 포트폴리오",
      backend: "백엔드 개발 포트폴리오",
      default: "기술 조합 포트폴리오",
    },
    portfolioIntros: {
      fintech:
        "결제 승인·취소·웹훅, 포인트 지급과 환불, 데이터 정합성 및 부하 테스트 경험을 중심으로 구성했습니다.",
      "game-client":
        "Unreal Engine과 Unity 프로젝트, C++ UI, 멀티플레이 네트워크 및 팀 개발 회고를 중심으로 구성했습니다.",
      cpp:
        "C++ 소켓·IOCP부터 UE5 네트워크 구조와 P2P 실험까지, 직접 구현하며 배운 시스템 경험을 중심으로 구성했습니다.",
      "game-server":
        "Go API, 실시간 통신, 캐시와 외부 API 제어, 게임 네트워크 경험을 중심으로 구성했습니다.",
      ai: "LLM 호출, 실시간 응답, 캐릭터 표현, 결제와 운영 도구를 연결한 AI 서비스 경험을 중심으로 구성했습니다.",
      fullstack:
        "프런트엔드부터 API, 데이터, 결제, 배포와 운영까지 직접 연결한 프로젝트를 중심으로 구성했습니다.",
      backend:
        "Go API, PostgreSQL·Redis, 결제·외부 API와 실제 서비스 운영 중의 문제 해결 경험을 중심으로 구성했습니다.",
      default: "선택한 기술과 직접 연결되는 프로젝트 기록을 중심으로 구성했습니다.",
    },
  },
  en: {
    heroEyebrow: "MODULAR PORTFOLIO",
    heroTitle: "Choose the technologies. The portfolio rebuilds itself.",
    heroDescription:
      "Each engineering experience is stored as an independent record. Combine role and technology tags to assemble only the relevant cases into one continuous document.",
    presetEyebrow: "QUICK START",
    presetTitle: "Role-based starting points",
    presetDescription: "Start with a preset, then add or remove tags.",
    tagEyebrow: "BUILD YOUR VIEW",
    tagTitle: "Compose with tags",
    clearTags: "Clear all",
    selectedTags: "Selected tags",
    noTags: "No tags selected yet.",
    buildPortfolio: "Build this portfolio",
    systemNote:
      "Selected tags are stored in the URL. Anyone opening the same link sees the same portfolio in the same order.",
    editTags: "Edit tags",
    copyLink: "Copy link",
    copied: "Copied this portfolio URL.",
    copyFailed: "Could not copy the URL.",
    savePdf: "Save as PDF",
    caseCount: "case studies",
    selectedPortfolio: "SELECTED PORTFOLIO",
    profileLabel: "DEVELOPER",
    contactLabel: "CONTACT & LINKS",
    contentsLabel: "SELECTED EXPERIENCE",
    projectLabel: "PROJECT",
    matchingTags: "Tags connected in this document",
    generatedNote:
      "This document was assembled automatically from recorded engineering experiences using the selected technology tags.",
    allRecords: "selected from the full record",
    switchDark: "Switch to dark mode",
    switchLight: "Switch to light mode",
    portfolioTitles: {
      fintech: "Fintech & Web Backend Portfolio",
      "game-client": "Unreal & Unity Game Development Portfolio",
      cpp: "C++ Systems & Networking Portfolio",
      "game-server": "Game Service Backend Portfolio",
      ai: "AI Service Development Portfolio",
      fullstack: "Full-stack Web Development Portfolio",
      backend: "Backend Development Portfolio",
      default: "Custom Technology Portfolio",
    },
    portfolioIntros: {
      fintech:
        "Focused on payment approval, cancellation, webhooks, credit grants and refunds, data consistency, and load testing.",
      "game-client":
        "Focused on Unreal Engine and Unity projects, C++ UI, multiplayer networking, and lessons from team development.",
      cpp:
        "Focused on hands-on systems learning from C++ sockets and IOCP to UE5 networking and P2P experiments.",
      "game-server":
        "Focused on Go APIs, real-time communication, caching, external API control, and game-networking experience.",
      ai: "Focused on connecting LLM calls, streaming responses, character presentation, payments, and operations tooling.",
      fullstack:
        "Focused on projects built end to end across frontend, API, data, payments, deployment, and operations.",
      backend:
        "Focused on Go APIs, PostgreSQL and Redis, payments, external APIs, and problems found while operating a live service.",
      default: "Focused on project records directly connected to the selected technologies.",
    },
  },
};

const roleTags = new Set([
  "fullstack",
  "backend",
  "fintech",
  "ai",
  "game-server",
  "cpp",
  "game-client",
]);
const allTagIds = data.tagGroups.flatMap((group) => group.tags);
const tagOrder = new Map(allTagIds.map((tag, index) => [tag, index]));
const params = new URLSearchParams(window.location.search);
const legacyRoutes = {
  web: ["fullstack", "backend", "go", "svelte", "postgresql", "redis", "payment", "operations"],
  game: ["game-client", "cpp", "unreal", "unity", "network", "collaboration"],
};

const storage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {}
  },
};

const root = document.documentElement;
const themeColor = document.querySelector('meta[name="theme-color"]');
const builderScreen = document.querySelector("#builder-screen");
const documentScreen = document.querySelector("#document-screen");
const presetGrid = document.querySelector("#preset-grid");
const tagGroupsElement = document.querySelector("#tag-groups");
const selectedTagsElement = document.querySelector("#selected-tags");
const toolbarTagsElement = document.querySelector("#toolbar-tags");
const matchedCountElement = document.querySelector("#matched-count");
const buildButton = document.querySelector("#build-portfolio");
const clearButton = document.querySelector("#clear-tags");
const portfolioDocument = document.querySelector("#portfolio-document");
const copyLinkButton = document.querySelector("#copy-link");
const printButton = document.querySelector("#print-document");
const themeToggle = document.querySelector("#theme-toggle");
const languageButtons = document.querySelectorAll("[data-language]");
const toast = document.querySelector("#toast");
const systemTheme = window.matchMedia?.("(prefers-color-scheme: dark)");

let language = storage.get("portfolio-language") ||
  (navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en");
if (!translations[language]) language = "ko";

let themeOverride = storage.get("portfolio-theme");
let selectedTags = new Set(readRequestedTags());
let toastTimer = null;

function localized(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[language] || value.ko || value.en || "";
}

function readRequestedTags() {
  const rawTags = params.get("tags");
  if (rawTags) {
    return rawTags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => data.tags[tag]);
  }
  const legacy = params.get("c");
  return legacyRoutes[legacy] || [];
}

function orderedTags(tags = selectedTags) {
  return [...tags].sort(
    (a, b) => (tagOrder.get(a) ?? 999) - (tagOrder.get(b) ?? 999),
  );
}

function moduleScore(module, tags = selectedTags) {
  let score = 0;
  tags.forEach((tag) => {
    if (!module.tags.includes(tag)) return;
    if (roleTags.has(tag)) score += 4;
    else if (["operations", "performance", "admin", "mobile", "localization", "collaboration"].includes(tag)) score += 1;
    else score += 2;
  });
  return score;
}

function matchingModules(tags = selectedTags) {
  if (tags.size === 0) return [];
  const selectedRoles = [...tags].filter((tag) => roleTags.has(tag));
  const candidates = data.modules
    .filter((module) => {
      const matched = module.tags.filter((tag) => tags.has(tag));
      if (matched.length === 0) return false;
      if (selectedRoles.length === 0) return true;
      const matchesRole = selectedRoles.some((tag) => module.tags.includes(tag));
      const nonRoleMatches = matched.filter((tag) => !roleTags.has(tag)).length;
      return matchesRole || nonRoleMatches >= 3;
    })
    .sort((a, b) => moduleScore(b, tags) - moduleScore(a, tags) || a.order - b.order);

  const maxCases = selectedRoles.length > 0 ? 8 : 10;
  return candidates.slice(0, maxCases).sort((a, b) => a.order - b.order);
}

function getPortfolioType(tags = selectedTags) {
  const priority = ["fintech", "game-client", "cpp", "game-server", "ai", "fullstack", "backend"];
  return priority.find((tag) => tags.has(tag)) || "default";
}

function element(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function createTagChip(tagId, options = {}) {
  const { interactive = false, selected = false, compact = false } = options;
  const chip = element(interactive ? "button" : "span", `tag-chip${selected ? " is-selected" : ""}${compact ? " compact" : ""}`);
  chip.textContent = localized(data.tags[tagId]);
  chip.dataset.tag = tagId;
  if (interactive) {
    chip.type = "button";
    chip.setAttribute("aria-pressed", String(selected));
    chip.addEventListener("click", () => toggleTag(tagId));
  }
  return chip;
}

function renderPresets() {
  presetGrid.replaceChildren();
  data.presets.forEach((preset, index) => {
    const button = element("button", "preset-card");
    button.type = "button";
    button.dataset.preset = preset.id;
    const indexLabel = element("span", "preset-index", String(index + 1).padStart(2, "0"));
    const title = element("strong", "preset-title", localized(preset.title));
    const description = element("span", "preset-description", localized(preset.description));
    const tags = element("span", "preset-tags");
    preset.tags.slice(0, 4).forEach((tag) => tags.append(createTagChip(tag, { compact: true })));
    button.append(indexLabel, title, description, tags);
    button.addEventListener("click", () => {
      selectedTags = new Set(preset.tags);
      renderBuilderControls();
      document.querySelector("#tag-builder-title")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    presetGrid.append(button);
  });
}

function renderTagGroups() {
  tagGroupsElement.replaceChildren();
  data.tagGroups.forEach((group) => {
    const section = element("section", "tag-group");
    const heading = element("h3", "tag-group-title", localized(group.label));
    const tags = element("div", "tag-list");
    group.tags.forEach((tag) => {
      tags.append(createTagChip(tag, { interactive: true, selected: selectedTags.has(tag) }));
    });
    section.append(heading, tags);
    tagGroupsElement.append(section);
  });
}

function renderSelectedTags() {
  selectedTagsElement.replaceChildren();
  if (selectedTags.size === 0) {
    selectedTagsElement.append(element("span", "empty-selection", translations[language].noTags));
    return;
  }
  orderedTags().forEach((tag) => selectedTagsElement.append(createTagChip(tag, { compact: true, selected: true })));
}

function renderBuilderControls() {
  renderTagGroups();
  renderSelectedTags();
  const count = matchingModules().length;
  matchedCountElement.textContent = String(count);
  buildButton.disabled = selectedTags.size === 0 || count === 0;
}

function toggleTag(tagId) {
  if (selectedTags.has(tagId)) selectedTags.delete(tagId);
  else selectedTags.add(tagId);
  renderBuilderControls();
}

function buildPortfolioUrl(tags = selectedTags) {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("tags", orderedTags(tags).join(","));
  if (language !== "ko") url.searchParams.set("lang", language);
  return url;
}

function projectDetails(projectId) {
  return data.projects[projectId];
}

function appendLinkRow(parent) {
  const links = element("div", "cover-links");
  const linkDefinitions = [
    ["Email", `mailto:${data.profile.email}`, data.profile.email],
    ["Code", data.profile.github, "github.com/yuchanahn/-"],
    ["Service", data.profile.service, "personaxi.com"],
    ["Game", data.profile.video, "Nirvana play video"],
  ];
  linkDefinitions.forEach(([label, href, value]) => {
    const link = element("a", "cover-link");
    link.href = href;
    if (!href.startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    link.append(element("span", "cover-link-label", label), element("strong", "cover-link-value", value));
    links.append(link);
  });
  parent.append(links);
}

function renderCover(modules) {
  const type = getPortfolioType();
  const cover = element("header", "portfolio-cover");
  const top = element("div", "cover-topline");
  top.append(
    element("span", "cover-kicker", translations[language].selectedPortfolio),
    element("span", "cover-count", `${modules.length} ${translations[language].caseCount}`),
  );

  const title = element("h1", "cover-title", translations[language].portfolioTitles[type]);
  const intro = element("p", "cover-intro", translations[language].portfolioIntros[type]);
  const identity = element("div", "cover-identity");
  const identityLabel = element("span", "cover-small-label", translations[language].profileLabel);
  const identityName = element("h2", "cover-name", localized(data.profile.name));
  const identityRole = element("p", "cover-role", localized(data.profile.role));
  identity.append(identityLabel, identityName, identityRole);

  const selected = element("div", "cover-selected-tags");
  orderedTags().forEach((tag) => selected.append(createTagChip(tag, { compact: true, selected: true })));

  cover.append(top, title, intro, identity, selected);
  appendLinkRow(cover);
  return cover;
}

function renderProjectSummary(modules) {
  const projectIds = [...new Set(modules.map((module) => module.project))];
  const section = element("section", "document-overview");
  const heading = element("div", "overview-heading");
  heading.append(
    element("span", "document-kicker", translations[language].contentsLabel),
    element("h2", "overview-title", `${modules.length} ${translations[language].caseCount}`),
  );
  const grid = element("div", "project-summary-grid");
  projectIds.forEach((projectId, index) => {
    const project = projectDetails(projectId);
    const card = element("article", "project-summary-card");
    const number = element("span", "summary-number", String(index + 1).padStart(2, "0"));
    const name = element("h3", "summary-project-name", localized(project.name));
    const meta = element("p", "summary-project-meta", `${localized(project.period)} · ${localized(project.type)}`);
    const summary = element("p", "summary-project-copy", localized(project.summary));
    card.append(number, name, meta, summary);
    grid.append(card);
  });
  section.append(heading, grid);
  return section;
}

function renderMetrics(metrics) {
  const grid = element("div", "metric-grid");
  metrics.forEach((metric) => {
    const item = element("div", "metric-item");
    item.append(
      element("span", "metric-label", metric.label),
      element("span", "metric-before", metric.before),
      element("span", "metric-arrow", "→"),
      element("strong", "metric-after", metric.after),
    );
    grid.append(item);
  });
  return grid;
}

function renderImages(module) {
  const images = module.images || (module.image ? [module.image] : []);
  if (images.length === 0) return null;
  const figure = element("figure", `case-visual${images.length > 1 ? " is-gallery" : ""}`);
  images.forEach((imageDefinition) => {
    const image = document.createElement("img");
    image.src = imageDefinition.src;
    image.alt = imageDefinition.alt || "";
    image.decoding = "async";
    figure.append(image);
  });
  return figure;
}

function renderCase(module, index) {
  const project = projectDetails(module.project);
  const section = element("section", "case-study");
  section.id = module.id;
  const meta = element("div", "case-meta");
  meta.append(
    element("span", "case-index", String(index + 1).padStart(2, "0")),
    element("span", "case-project", `${translations[language].projectLabel} · ${localized(project.name)}`),
    element("span", "case-category", localized(module.category)),
  );
  const title = element("h2", "case-title", localized(module.title));
  const lead = element("p", "case-lead", localized(module.lead));
  const visual = renderImages(module);
  const copy = element("div", "case-copy");
  localized(module.paragraphs).forEach((paragraph) => copy.append(element("p", "case-paragraph", paragraph)));

  section.append(meta, title, lead);
  if (module.metrics) section.append(renderMetrics(module.metrics));
  if (visual) section.append(visual);
  section.append(copy);

  if (module.bullets) {
    const list = element("ul", "case-bullets");
    localized(module.bullets).forEach((bullet) => list.append(element("li", "", bullet)));
    section.append(list);
  }

  const matchedTags = module.tags.filter((tag) => selectedTags.has(tag));
  const footer = element("footer", "case-footer");
  footer.append(element("span", "case-footer-label", translations[language].matchingTags));
  const footerTags = element("div", "case-footer-tags");
  matchedTags.forEach((tag) => footerTags.append(createTagChip(tag, { compact: true, selected: true })));
  footer.append(footerTags);
  section.append(footer);
  return section;
}

function renderDocument() {
  const modules = matchingModules();
  portfolioDocument.replaceChildren();
  portfolioDocument.append(renderCover(modules), renderProjectSummary(modules));
  modules.forEach((module, index) => portfolioDocument.append(renderCase(module, index)));

  const closing = element("footer", "document-closing");
  closing.append(
    element("strong", "", localized(data.profile.name)),
    element("p", "", translations[language].generatedNote),
    element("span", "", `${modules.length}/${data.modules.length} ${translations[language].allRecords}`),
  );
  portfolioDocument.append(closing);

  toolbarTagsElement.replaceChildren();
  orderedTags().forEach((tag) => toolbarTagsElement.append(createTagChip(tag, { compact: true, selected: true })));
  const type = getPortfolioType();
  document.title = `${localized(data.profile.name)} · ${translations[language].portfolioTitles[type]}`;
}

function renderProfile() {
  document.querySelectorAll('[data-profile="name"]').forEach((node) => (node.textContent = localized(data.profile.name)));
  document.querySelectorAll('[data-profile="role"]').forEach((node) => (node.textContent = localized(data.profile.role)));
  document.querySelectorAll('[data-profile="introduction"]').forEach((node) => (node.textContent = localized(data.profile.introduction)));
}

function applyTranslations() {
  root.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translations[language][node.dataset.i18n];
    if (typeof value === "string") node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-title]").forEach((node) => {
    const value = translations[language][node.dataset.i18nTitle];
    if (typeof value === "string") node.title = value;
  });
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  renderProfile();
  renderPresets();
  renderBuilderControls();
  if (!documentScreen.hidden) renderDocument();
  updateThemeControl();
}

function updateThemeControl() {
  const isDark = root.dataset.theme === "dark";
  const label = isDark ? translations[language].switchLight : translations[language].switchDark;
  themeToggle.setAttribute("aria-label", label);
  themeToggle.title = label;
}

function applyTheme(theme, persist = true) {
  root.dataset.theme = theme;
  themeColor.content = theme === "dark" ? "#151515" : "#f4f4f2";
  if (persist) {
    themeOverride = theme;
    storage.set("portfolio-theme", theme);
  }
  updateThemeControl();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    toast.hidden = true;
  }, 2200);
}

async function copyCurrentUrl() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast(translations[language].copied);
  } catch {
    showToast(translations[language].copyFailed);
  }
}

async function printPortfolio() {
  const images = [...portfolioDocument.querySelectorAll("img")];
  await Promise.allSettled(
    images.map((image) => (image.complete ? image.decode?.() : new Promise((resolve) => {
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
    }))),
  );
  window.print();
}

function initializeRoute() {
  const requestedLanguage = params.get("lang");
  if (translations[requestedLanguage]) language = requestedLanguage;
  const isDocument = selectedTags.size > 0 && matchingModules().length > 0;
  builderScreen.hidden = isDocument;
  documentScreen.hidden = !isDocument;
  if (isDocument) renderDocument();
  else document.title = language === "ko" ? "안유찬 · 태그형 개발 포트폴리오" : "Yuchan Ahn · Modular Portfolio";
}

buildButton.addEventListener("click", () => {
  if (buildButton.disabled) return;
  window.location.assign(buildPortfolioUrl().toString());
});

clearButton.addEventListener("click", () => {
  selectedTags.clear();
  renderBuilderControls();
});

copyLinkButton.addEventListener("click", copyCurrentUrl);
printButton.addEventListener("click", printPortfolio);
themeToggle.addEventListener("click", () => applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true));

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    language = button.dataset.language;
    storage.set("portfolio-language", language);
    if (!documentScreen.hidden) {
      const url = buildPortfolioUrl();
      window.history.replaceState(null, "", url);
    }
    applyTranslations();
  });
});

if (systemTheme?.addEventListener) {
  systemTheme.addEventListener("change", (event) => {
    if (!themeOverride) applyTheme(event.matches ? "dark" : "light", false);
  });
}

applyTheme(themeOverride || (systemTheme?.matches ? "dark" : "light"), Boolean(themeOverride));
initializeRoute();
applyTranslations();

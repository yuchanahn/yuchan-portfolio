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
    contentsLabel: "PROJECT INDEX",
    projectOverviewLabel: "프로젝트 소개",
    projectPeriodLabel: "개발 기간",
    projectTypeLabel: "개발 형태",
    projectDescriptionLabel: "프로젝트",
    projectContributionLabel: "담당 작업",
    projectStackLabel: "사용 기술",
    projectCasesLabel: "이 문서에 포함된 기술 사례",
    projectLabel: "PROJECT",
    matchingTags: "이 문서에서 연결된 태그",
    projectLinks: "프로젝트·코드 바로가기",
    generatedNote:
      "이 문서는 선택한 기술 태그를 기준으로 기록된 개발 경험을 자동 구성한 결과입니다.",
    allRecords: "전체 기록에서 선택됨",
    switchDark: "다크 모드로 전환",
    switchLight: "라이트 모드로 전환",
    portfolioTitles: {
      fintech: "금융·웹 백엔드 포트폴리오",
      "game-client": "게임 프로그래밍·네트워크 포트폴리오",
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
        "Unreal Engine 멀티플레이, Rust rollback 실험과 Unity 게임 코드에서 확인한 문제 해결 경험을 중심으로 구성했습니다.",
      cpp:
        "C++ 소켓·IOCP, UE5 네트워크와 거래소 REST·WebSocket 구현까지 직접 만들며 배운 시스템 경험을 중심으로 구성했습니다.",
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
    contentsLabel: "PROJECT INDEX",
    projectOverviewLabel: "PROJECT OVERVIEW",
    projectPeriodLabel: "Period",
    projectTypeLabel: "Development",
    projectDescriptionLabel: "Project",
    projectContributionLabel: "My work",
    projectStackLabel: "Technology",
    projectCasesLabel: "Case studies included in this document",
    projectLabel: "PROJECT",
    matchingTags: "Tags connected in this document",
    projectLinks: "Project and code links",
    generatedNote:
      "This document was assembled automatically from recorded engineering experiences using the selected technology tags.",
    allRecords: "selected from the full record",
    switchDark: "Switch to dark mode",
    switchLight: "Switch to light mode",
    portfolioTitles: {
      fintech: "Fintech & Web Backend Portfolio",
      "game-client": "Game Programming & Networking Portfolio",
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
        "Focused on Unreal Engine multiplayer, a Rust rollback experiment, and problem-solving in Unity gameplay code.",
      cpp:
        "Focused on hands-on systems learning across C++ sockets and IOCP, UE5 networking, and exchange REST/WebSocket integration.",
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
const requestedProjectId = data.projects[params.get("project")] ? params.get("project") : null;
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
  if (!requestedProjectId && tags.has("game-client") && module.featured) score += 4;
  if (!requestedProjectId && module.id.endsWith("-overview")) score -= 2;
  return score;
}

function matchingModules(tags = selectedTags) {
  if (requestedProjectId) {
    return data.modules
      .filter((module) => module.project === requestedProjectId && !module.appendixOnly)
      .sort((a, b) => a.order - b.order);
  }
  if (tags.size === 0) return [];
  const selectedRoles = [...tags].filter((tag) => roleTags.has(tag));
  const candidates = data.modules
    .filter((module) => {
      const isGamePortfolio = tags.has("game-client") || tags.has("game-server");
      const mixesAnotherRole = ["fullstack", "backend", "fintech", "ai"].some((tag) => tags.has(tag));
      const projectType = data.projects[module.project]?.portfolioType;
      const belongsToGameProject = projectType === "game-client" || projectType === "game-server";
      if (isGamePortfolio && !mixesAnotherRole && !belongsToGameProject && !module.crossPortfolio) return false;

      const matched = module.tags.filter((tag) => tags.has(tag));
      if (matched.length === 0) return false;
      if (module.crossPortfolio) return true;
      if (selectedRoles.length === 0) return true;
      const matchesRole = selectedRoles.some((tag) => module.tags.includes(tag));
      const nonRoleMatches = matched.filter((tag) => !roleTags.has(tag)).length;
      return matchesRole || nonRoleMatches >= 3;
    })
    .sort((a, b) => moduleScore(b, tags) - moduleScore(a, tags) || a.order - b.order);

  const maxCases = tags.has("game-client") ? 9 : selectedRoles.length > 0 ? 8 : 10;
  if (tags.has("game-client")) {
    const projectCounts = new Map();
    const diverse = candidates.filter((module) => {
      const count = projectCounts.get(module.project) || 0;
      if (count >= 2) return false;
      projectCounts.set(module.project, count + 1);
      return true;
    });
    return diverse.slice(0, maxCases).sort((a, b) => a.order - b.order);
  }
  return candidates.slice(0, maxCases).sort((a, b) => a.order - b.order);
}

function getPortfolioType(tags = selectedTags) {
  if (requestedProjectId) return data.projects[requestedProjectId].portfolioType || "default";
  const priority = ["fintech", "game-client", "cpp", "game-server", "ai", "fullstack", "backend"];
  return priority.find((tag) => tags.has(tag)) || "default";
}

function element(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function richTextElement(tagName, className, text) {
  const node = element(tagName, className);
  String(text ?? "").split(/(`[^`]+`)/g).forEach((part) => {
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      node.append(element("code", "inline-code", part.slice(1, -1)));
    } else {
      node.append(document.createTextNode(part));
    }
  });
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
  if (requestedProjectId) url.searchParams.set("project", requestedProjectId);
  else url.searchParams.set("tags", orderedTags(tags).join(","));
  if (language !== "ko") url.searchParams.set("lang", language);
  return url;
}

function projectDetails(projectId) {
  return data.projects[projectId];
}

function buildProjectUrl(projectId) {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("project", projectId);
  if (language !== "ko") url.searchParams.set("lang", language);
  url.hash = `project-${projectId}`;
  return url;
}

function createProjectContextLink(projectId) {
  const project = projectDetails(projectId);
  const link = element("a", "case-project-link");
  link.href = buildProjectUrl(projectId);
  link.append(
    element("span", "case-project-link-label", translations[language].projectLabel),
    element("strong", "case-project-link-value", localized(project.name)),
    element("span", "case-project-link-arrow", "→"),
  );
  return link;
}

function createExternalLink(definition, className = "record-link") {
  const link = element("a", className);
  link.href = definition.href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.append(
    element("span", `${className}-label`, localized(definition.label)),
    element("strong", `${className}-value`, localized(definition.value) || localized(definition.label)),
    element("span", `${className}-arrow`, "↗"),
  );
  return link;
}

function renderRecordLinks(definitions, className = "record-links") {
  if (!definitions?.length) return null;
  const links = element("div", className);
  definitions.forEach((definition) => links.append(createExternalLink(definition, "record-link")));
  return links;
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
  const requestedProject = requestedProjectId ? projectDetails(requestedProjectId) : null;
  const cover = element("header", "portfolio-cover");
  const top = element("div", "cover-topline");
  top.append(
    element("span", "cover-kicker", translations[language].selectedPortfolio),
    element("span", "cover-count", `${modules.length} ${translations[language].caseCount}`),
  );

  const title = element(
    "h1",
    "cover-title",
    requestedProject
      ? `${localized(requestedProject.name)} ${language === "ko" ? "프로젝트 기록" : "Project Record"}`
      : translations[language].portfolioTitles[type],
  );
  const intro = element(
    "p",
    "cover-intro",
    requestedProject ? localized(requestedProject.summary) : translations[language].portfolioIntros[type],
  );
  const identity = element("div", "cover-identity");
  const identityLabel = element("span", "cover-small-label", translations[language].profileLabel);
  const identityName = element("h2", "cover-name", localized(data.profile.name));
  const identityRole = element("p", "cover-role", localized(data.profile.role));
  identity.append(identityLabel, identityName, identityRole);

  const selected = element("div", "cover-selected-tags");
  const coverTags = requestedProjectId
    ? [...new Set(modules.flatMap((module) => module.tags))].slice(0, 8)
    : orderedTags();
  coverTags.forEach((tag) => selected.append(createTagChip(tag, { compact: true, selected: true })));

  cover.append(top, title, intro, identity, selected);
  appendLinkRow(cover);
  return cover;
}

function renderProjectSummary(modules) {
  const projectIds = [...new Set(modules.map((module) => module.project))];
  const section = element("section", "document-overview");
  if (projectIds.length > 4) section.classList.add("is-dense");
  const heading = element("div", "overview-heading");
  heading.append(
    element("span", "document-kicker", translations[language].contentsLabel),
    element(
      "h2",
      "overview-title",
      language === "ko"
        ? `${projectIds.length}개 프로젝트 · ${modules.length}개 기술 사례`
        : `${projectIds.length} project records · ${modules.length} case studies`,
    ),
  );
  const grid = element("div", "project-summary-grid");
  projectIds.forEach((projectId, index) => {
    const project = projectDetails(projectId);
    const card = element("article", "project-summary-card");
    const number = element("span", "summary-number", String(index + 1).padStart(2, "0"));
    const name = element("h3", "summary-project-name");
    const nameLink = element("a", "summary-project-detail-link", localized(project.name));
    nameLink.href = buildProjectUrl(projectId);
    name.append(nameLink);
    const meta = element("p", "summary-project-meta", `${localized(project.period)} · ${localized(project.type)}`);
    const summary = element("p", "summary-project-copy", localized(project.summary));
    card.append(number, name, meta, summary);
    const links = renderRecordLinks(project.links, "summary-project-links");
    if (links) card.append(links);
    grid.append(card);
  });
  section.append(heading, grid);
  return section;
}

function renderProjectIntroduction(projectId, index, total, projectModules) {
  const project = projectDetails(projectId);
  const section = element("section", "project-introduction");
  section.id = `project-${projectId}`;
  section.dataset.project = projectId;

  const topline = element("div", "project-intro-topline");
  topline.append(
    element("span", "project-intro-kicker", translations[language].projectOverviewLabel),
    element(
      "span",
      "project-intro-number",
      `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`,
    ),
  );

  const title = element("h2", "project-intro-title", localized(project.name));
  const summary = richTextElement("p", "project-intro-summary", localized(project.summary));
  section.append(topline, title, summary);

  const imageDefinitions = project.images || (project.image ? [project.image] : []);
  if (imageDefinitions.length > 0) {
    const media = element(
      "figure",
      `project-intro-media${imageDefinitions.length > 1 ? " is-gallery" : ""}`,
    );
    if (imageDefinitions.length === 1 && imageDefinitions[0].background) {
      media.style.background = imageDefinitions[0].background;
    }
    imageDefinitions.forEach((imageDefinition) => {
      const image = document.createElement("img");
      image.src = imageDefinition.src;
      image.alt = imageDefinition.alt || "";
      image.decoding = "async";
      if (imageDefinition.position) image.style.objectPosition = imageDefinition.position;
      if (imageDefinition.fit) image.style.objectFit = imageDefinition.fit;
      media.append(image);
    });
    section.append(media);
  } else {
    section.classList.add("has-no-media");
  }

  const details = element("div", "project-intro-details");
  const appendDetail = (label, content, className = "") => {
    if (!content) return;
    const row = element("div", `project-intro-row${className ? ` ${className}` : ""}`);
    row.append(
      element("span", "project-intro-label", label),
      richTextElement("p", "project-intro-value", content),
    );
    details.append(row);
  };

  appendDetail(translations[language].projectPeriodLabel, localized(project.period));
  appendDetail(translations[language].projectTypeLabel, localized(project.type));
  appendDetail(
    translations[language].projectDescriptionLabel,
    localized(project.description) || localized(project.summary),
    "is-description",
  );
  appendDetail(
    translations[language].projectContributionLabel,
    localized(project.contribution),
    "is-description",
  );

  if (project.stack?.length) {
    const stackRow = element("div", "project-intro-row is-stack");
    const stack = element("div", "project-intro-stack");
    project.stack.forEach((item) => stack.append(element("span", "project-intro-stack-item", localized(item))));
    stackRow.append(
      element("span", "project-intro-label", translations[language].projectStackLabel),
      stack,
    );
    details.append(stackRow);
  }

  appendDetail(
    translations[language].projectCasesLabel,
    language === "ko" ? `${projectModules.length}개` : `${projectModules.length}`,
  );
  section.append(details);

  const links = renderRecordLinks(project.links, "project-intro-links");
  if (links) section.append(links);
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

function renderFlow(module) {
  const steps = localized(module.flow);
  if (!Array.isArray(steps) || steps.length === 0) return null;
  const flow = element("div", "case-flow");
  steps.forEach((step, index) => {
    const item = element("div", "case-flow-step");
    item.append(
      element("span", "case-flow-number", String(index + 1).padStart(2, "0")),
      element("strong", "case-flow-text", step),
    );
    flow.append(item);
  });
  return flow;
}

function renderCode(module) {
  if (!module.code?.text) return null;
  const figure = element("figure", "case-code");
  const caption = element("figcaption", "case-code-caption");
  caption.append(
    element("span", "case-code-label", localized(module.code.caption) || "Code"),
    element("span", "case-code-source", module.code.source || module.code.language || ""),
  );
  const pre = element("pre", "case-code-pre");
  const code = element("code", "case-code-content", module.code.text.trim());
  if (module.code.language) code.dataset.language = module.code.language;
  pre.append(code);
  figure.append(caption, pre);
  return figure;
}

function renderCase(module, index) {
  const project = projectDetails(module.project);
  const section = element("section", "case-study");
  section.id = module.id;
  const meta = element("div", "case-meta");
  const projectLabel = createProjectContextLink(module.project);
  meta.append(
    element("span", "case-index", String(index + 1).padStart(2, "0")),
    projectLabel,
    element("span", "case-category", localized(module.category)),
  );
  const title = element("h2", "case-title", localized(module.title));
  const lead = richTextElement("p", "case-lead", localized(module.lead));
  const flow = renderFlow(module);
  const visual = renderImages(module);
  const code = renderCode(module);
  const copy = element("div", "case-copy");
  localized(module.paragraphs).forEach((paragraph) => copy.append(richTextElement("p", "case-paragraph", paragraph)));

  section.append(meta, title, lead);
  if (module.metrics) section.append(renderMetrics(module.metrics));
  if (flow) section.append(flow);
  if (visual) section.append(visual);
  if (code) section.append(code);
  section.append(copy);

  if (module.bullets) {
    const list = element("ul", "case-bullets");
    localized(module.bullets).forEach((bullet) => list.append(richTextElement("li", "", bullet)));
    section.append(list);
  }

  const recordLinks = renderRecordLinks(module.links || project.links, "case-record-links");
  if (recordLinks) {
    const linksSection = element("section", "case-links-section");
    linksSection.append(
      element("span", "case-links-label", translations[language].projectLinks),
      recordLinks,
    );
    section.append(linksSection);
  }

  const matchedTags = requestedProjectId
    ? module.tags
    : module.tags.filter((tag) => selectedTags.has(tag));
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
  const projectIds = [...new Set(modules.map((module) => module.project))];
  const introProjectIds = projectIds.filter(
    (projectId) => projectDetails(projectId).introPage !== false &&
      modules.some((module) => module.project === projectId && !module.skipProjectIntro),
  );
  const projectOrder = new Map(introProjectIds.map((projectId, index) => [projectId, index]));
  const introducedProjects = new Set();
  portfolioDocument.replaceChildren();
  portfolioDocument.append(renderCover(modules));
  if (projectIds.length > 1) portfolioDocument.append(renderProjectSummary(modules));
  modules.forEach((module, index) => {
    if (
      !module.skipProjectIntro &&
      !introducedProjects.has(module.project) &&
      projectDetails(module.project).introPage !== false
    ) {
      introducedProjects.add(module.project);
      const projectModules = modules.filter((item) => item.project === module.project);
      portfolioDocument.append(
        renderProjectIntroduction(
          module.project,
          projectOrder.get(module.project),
          introProjectIds.length,
          projectModules,
        ),
      );
    }
    portfolioDocument.append(renderCase(module, index));
  });

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
  document.title = requestedProjectId
    ? `${localized(data.profile.name)} · ${localized(data.projects[requestedProjectId].name)}`
    : `${localized(data.profile.name)} · ${translations[language].portfolioTitles[type]}`;
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

  if (document.fonts) {
    await Promise.allSettled([
      document.fonts.load('400 16px "Pretendard Variable"'),
      document.fonts.load('700 16px "Pretendard Variable"'),
      document.fonts.load('850 16px "Pretendard Variable"'),
      document.fonts.ready,
    ]);
  }

  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  window.print();
}

function initializeRoute() {
  const requestedLanguage = params.get("lang");
  if (translations[requestedLanguage]) language = requestedLanguage;
  const isDocument = (requestedProjectId || selectedTags.size > 0) && matchingModules().length > 0;
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

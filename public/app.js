const PDFJS_URL =
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.7.284/build/pdf.min.mjs";
const PDFJS_WORKER_URL =
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.7.284/build/pdf.worker.min.mjs";

const portfolioDefinitions = {
  web: {
    pdfByTheme: {
      light: "./assets/web-portfolio-light.pdf?v=15",
      dark: "./assets/web-portfolio-dark.pdf?v=15",
    },
    titleKey: "webPortfolio",
    downloadNameByTheme: {
      light: "web-development-portfolio-light.pdf",
      dark: "web-development-portfolio-dark.pdf",
    },
  },
  game: {
    pdfByTheme: {
      light: "./assets/game-portfolio.pdf",
      dark: "./assets/game-portfolio.pdf",
    },
    titleKey: "gamePortfolio",
    downloadNameByTheme: {
      light: "game-development-portfolio.pdf",
      dark: "game-development-portfolio.pdf",
    },
  },
};

const translations = {
  ko: {
    webPortfolio: "웹 개발 포트폴리오",
    gamePortfolio: "게임 개발 포트폴리오",
    webSummary: "Full-stack · PeroChat",
    gameSummary: "Unreal · Unity",
    profileKicker: "PROFILE",
    profileName: "안유찬",
    profileRole: "Full-Stack Developer",
    profileIntro:
      "SvelteKit과 Go를 중심으로 웹 서비스를 개발하고 운영하고 있습니다. PeroChat을 혼자 개발하며 프론트엔드, API, 결제, 배포와 운영을 맡고 있습니다.",
    profileEducationLabel: "학력",
    profileEducation: "청강문화산업대학교 전공심화",
    profileCurrentLabel: "현재",
    profileCurrent: "PeroChat 개인 개발·운영 · 2025.05–현재",
    profileExperienceLabel: "경험",
    profileExperience: "QuickBite 주문 사이트 개발·운영",
    projectsKicker: "GITHUB PROJECTS",
    projectsTitle: "공개 프로젝트",
    projectsDescription: "지금 설명할 수 있는 작업을 중심으로 정리했습니다.",
    allRepositories: "전체 저장소",
    nirvanaVideo: "Nirvana 플레이 영상",
    searchLabel: "웹 포트폴리오 검색",
    searchPlaceholder: "기술 또는 문제 검색",
    empty: "검색 결과가 없습니다.",
    back: "다른 직군 포트폴리오",
    openNewTab: "뷰어로 보기",
    openNewTabLabel: "새 탭에서 PDF 뷰어로 보기",
    downloadPdf: "PDF 다운로드",
    switchDark: "다크 모드로 전환",
    switchLight: "라이트 모드로 전환",
    previousPage: "이전 페이지",
    nextPage: "다음 페이지",
    loading: "포트폴리오를 불러오는 중입니다.",
    loadError: "PDF를 불러오지 못했습니다.",
    canvasLabel: "포트폴리오 PDF 페이지",
  },
  en: {
    webPortfolio: "Web Development Portfolio",
    gamePortfolio: "Game Development Portfolio",
    webSummary: "Full-stack · PeroChat",
    gameSummary: "Unreal · Unity",
    profileKicker: "PROFILE",
    profileName: "Yuchan Ahn",
    profileRole: "Full-Stack Developer",
    profileIntro:
      "I build and operate web services with SvelteKit and Go. I develop PeroChat independently, covering the frontend, APIs, payments, deployment, and operations.",
    profileEducationLabel: "Education",
    profileEducation:
      "Chungkang College of Cultural Industries · Advanced major program",
    profileCurrentLabel: "Current",
    profileCurrent: "PeroChat · Independent development and operation · May 2025–Present",
    profileExperienceLabel: "Experience",
    profileExperience: "QuickBite ordering site · Development and operation",
    projectsKicker: "GITHUB PROJECTS",
    projectsTitle: "Public projects",
    projectsDescription: "Selected projects that I can explain clearly today.",
    allRepositories: "All repositories",
    nirvanaVideo: "Nirvana gameplay video",
    searchLabel: "Search web portfolio",
    searchPlaceholder: "Search a technology or problem",
    empty: "No results found.",
    back: "Other portfolio",
    openNewTab: "Open viewer",
    openNewTabLabel: "Open PDF viewer in a new tab",
    downloadPdf: "Download PDF",
    switchDark: "Switch to dark mode",
    switchLight: "Switch to light mode",
    previousPage: "Previous page",
    nextPage: "Next page",
    loading: "Loading portfolio.",
    loadError: "Unable to load this PDF.",
    canvasLabel: "Portfolio PDF page",
  },
};

const pages = [
  {
    page: 1,
    ko: [
      "웹 서비스 개발·운영 포트폴리오",
      "약 100명 가입, 3개 언어, 실제 결제 검증과 앱 배포 테스트.",
    ],
    en: [
      "Web service portfolio",
      "About 100 sign-ups, three UI languages, live payment validation, and app release testing.",
    ],
    keywords: ["perochat", "quickbite", "full-stack", "풀스택", "서비스", "operation"],
  },
  {
    page: 2,
    ko: [
      "연구과제를 실제 서비스 구조로 확장했습니다",
      "SvelteKit 클라이언트와 Go API, 데이터·AI·결제 시스템의 전체 구성.",
    ],
    en: [
      "Expanded a research project into a production service",
      "System architecture across SvelteKit, Go, data, AI, and payments.",
    ],
    keywords: ["vrm", "llm", "live2d", "svelte", "go", "연구과제", "사용 기술"],
  },
  {
    page: 3,
    ko: [
      "채팅 저장 병목을 줄여 DB 연결 사용량을 79개에서 10개로 낮췄습니다",
      "k6로 조회 캐시와 저장 구조 변경 전후를 분리해 확인했습니다.",
    ],
    en: [
      "Reduced database connections from 79 to 10 by fixing chat persistence",
      "Measured read caching and write-path changes separately with k6.",
    ],
    keywords: [
      "k6",
      "redis",
      "postgresql",
      "ccu",
      "rps",
      "부하 테스트",
      "load test",
      "performance",
      "db ping",
      "credit ledger",
      "저장 병목",
      "db 연결",
    ],
  },
  {
    page: 4,
    ko: [
      "공유 API 키의 429를 막기 위해 요청을 모델별로 제어했습니다",
      "모델별 token bucket과 HTTP 429 처리로 공급자 한도를 보호했습니다.",
    ],
    en: [
      "Controlled requests by model to prevent 429s on a shared API key",
      "Per-model token buckets and HTTP 429 handling protect provider quotas.",
    ],
    keywords: [
      "gemini",
      "rate limiter",
      "rate limit",
      "레이트리미터",
      "token bucket",
      "429",
      "flash-lite",
      "flash",
      "pro",
      "api key",
    ],
  },
  {
    page: 5,
    ko: [
      "결제 재화를 중복 없이 한 번만 지급하도록 구조를 고쳤습니다",
      "PortOne·PayPal·Google Play 검증과 주문 ID 단위의 원자적 지급 처리.",
    ],
    en: [
      "Reworked payments so credits are granted exactly once",
      "Provider validation and atomic, order-scoped credit grants.",
    ],
    keywords: [
      "payment",
      "결제",
      "멱등성",
      "idempotency",
      "atomic",
      "transaction",
      "portone",
      "paypal",
      "google play",
      "webhook",
      "refund",
    ],
  },
  {
    page: 6,
    ko: [
      "iPhone Safari에서 화면 대신 입력창만 움직이도록 고쳤습니다",
      "Visual Viewport를 기준으로 키보드 높이를 계산하고 입력 영역만 보정했습니다.",
    ],
    en: [
      "Kept the scene fixed while moving only the input on iPhone Safari",
      "Calculated keyboard height from Visual Viewport and corrected the input region.",
    ],
    keywords: [
      "iphone",
      "safari",
      "pwa",
      "visual viewport",
      "keyboard",
      "키보드",
      "mobile",
    ],
  },
  {
    page: 7,
    ko: [
      "DB 직접 수정 없이 프롬프트와 사용자를 관리했습니다",
      "로컬 관리자 화면과 Oracle Cloud·Coolify 기반 배포·운영.",
    ],
    en: [
      "Managed prompts and users without editing the database directly",
      "A local admin console with Oracle Cloud and Coolify operations.",
    ],
    keywords: [
      "admin",
      "promptkit",
      "사용자 관리",
      "oracle cloud",
      "coolify",
      "supabase",
      "github pages",
      "배포",
      "deployment",
    ],
  },
  {
    page: 8,
    ko: [
      "디저트 판매자의 요구에 맞춰 주문과 운영 화면을 만들었습니다",
      "실제 판매 과정에서 나온 요청을 반영하며 수개월간 운영한 주문 사이트.",
    ],
    en: [
      "Built ordering and operations screens around a dessert seller's needs",
      "A production ordering site refined through real seller feedback over several months.",
    ],
    keywords: [
      "quickbite",
      "디저트",
      "dessert",
      "주문",
      "order",
      "sqlite",
      "google sheets",
      "discord",
      "ubuntu",
    ],
  },
  {
    page: 9,
    ko: [
      "백엔드·서비스 운영을 중심으로 문제를 해결합니다",
      "주요 기술 경험, 대표 링크와 AI 도구 활용 방식.",
    ],
    en: [
      "I solve problems with a focus on backend and service operations",
      "Core experience, representative links, and responsible AI-assisted work.",
    ],
    keywords: [
      "unreal",
      "unity",
      "networking",
      "게임",
      "game",
      "ai agent",
    ],
  },
];

const githubProjects = [
  {
    name: "PeroChat Frontend",
    url: "https://github.com/yuchanahn/personaxi-front",
    category: "WEB",
    tech: "SvelteKit · TypeScript",
    ko: "PeroChat의 공개 프런트엔드입니다. 캐릭터 탐색·제작과 2D·Live2D·VRM 채팅, 다국어 화면을 담고 있습니다.",
    en: "The public PeroChat frontend, covering character discovery and creation, multilingual UI, and 2D, Live2D, and VRM chat.",
  },
  {
    name: "Portfolio Viewer",
    url: "https://github.com/yuchanahn/yuchan-portfolio",
    category: "WEB",
    tech: "JavaScript · GitHub Pages",
    ko: "PDF 포트폴리오를 테마별로 열람·검색·다운로드할 수 있도록 만든 정적 사이트입니다.",
    en: "A static GitHub Pages site for browsing, searching, and downloading themed portfolio PDFs.",
  },
  {
    name: "Auto Battler Game Server",
    url: "https://github.com/yuchanahn/autobattlergame_server",
    category: "SERVER",
    tech: "C++",
    ko: "오토배틀러 게임의 서버 구조와 통신 흐름을 구현해 본 C++ 게임 서버 프로젝트입니다.",
    en: "A C++ game server project exploring the server structure and network flow of an auto battler.",
  },
  {
    name: "P2P Action Game",
    url: "https://github.com/yuchanahn/p2pactiongame",
    category: "NETWORK",
    tech: "Rust · P2P",
    ko: "Rust로 P2P 액션 게임의 통신 구조를 시도해 본 작은 네트워크 실험 프로젝트입니다.",
    en: "A small Rust networking experiment for a peer-to-peer action game.",
  },
  {
    name: "Tower of Ukani",
    url: "https://github.com/yuchanahn/Tower_Of_Ukani",
    category: "TEAM GAME",
    tech: "C#",
    ko: "대학생 팀 CBT에서 함께 개발한 C# 게임 프로젝트입니다.",
    en: "A C# game project developed with the university student team CBT.",
  },
  {
    name: "Bybit Trade Bot",
    url: "https://github.com/yuchanahn/trade_bot_bybit_cpp",
    category: "EXPERIMENT",
    tech: "C++ · Bybit API",
    ko: "Bybit 시세와 거래 API 연동을 실험하기 위해 작성한 C++ 자동매매 프로젝트입니다.",
    en: "A C++ trading-bot experiment for working with Bybit market and trading APIs.",
  },
];

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
const languageButtons = document.querySelectorAll("[data-language]");
const themeToggle = document.querySelector("#theme-toggle");
const nirvanaVideoLink = document.querySelector("#nirvana-video-link");
const homeScreen = document.querySelector("#home-screen");
const viewerScreen = document.querySelector("#viewer-screen");
const searchPanel = document.querySelector("#search-panel");
const searchTrigger = document.querySelector("#search-trigger");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");
const emptyState = document.querySelector("#empty-state");
const resultTemplate = document.querySelector("#result-template");
const projectGrid = document.querySelector("#project-grid");
const projectCardTemplate = document.querySelector("#project-card-template");
const viewerTitle = document.querySelector("#viewer-document-title");
const openPdfLink = document.querySelector("#open-pdf-link");
const downloadLink = document.querySelector("#download-link");
const errorDownloadLink = document.querySelector("#error-download-link");
const previousPageButton = document.querySelector("#previous-page");
const nextPageButton = document.querySelector("#next-page");
const currentPageElement = document.querySelector("#current-page");
const totalPagesElement = document.querySelector("#total-pages");
const viewerStage = document.querySelector("#viewer-stage");
const viewerLoading = document.querySelector("#viewer-loading");
const viewerError = document.querySelector("#viewer-error");
const canvas = document.querySelector("#pdf-canvas");
const systemTheme = window.matchMedia?.("(prefers-color-scheme: dark)");

const routeParams = new URLSearchParams(window.location.search);
const requestedPortfolio = routeParams.get("c");
const portfolioKey = Object.hasOwn(
  portfolioDefinitions,
  requestedPortfolio ?? "",
)
  ? requestedPortfolio
  : null;
const portfolio = portfolioKey ? portfolioDefinitions[portfolioKey] : null;

let language =
  storage.get("portfolio-language") ||
  (navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en");
let themeOverride = storage.get("portfolio-theme");
let pdfDocument = null;
let renderTask = null;
let renderRequest = 0;
let loadRequest = 0;
let pdfjsModule = null;
let currentPage = 1;
let resizeTimer = null;

if (language !== "ko" && language !== "en") language = "ko";

function getActiveTheme() {
  return root.dataset.theme === "dark" ? "dark" : "light";
}

function getPortfolioPdf() {
  if (!portfolio) return "";
  return portfolio.pdfByTheme[getActiveTheme()];
}

function getPortfolioDownloadName() {
  if (!portfolio) return "";
  return portfolio.downloadNameByTheme[getActiveTheme()];
}

function updatePortfolioLinks() {
  if (!portfolio) return;

  const pdfUrl = getPortfolioPdf();
  const downloadName = getPortfolioDownloadName();
  openPdfLink.href = pdfUrl;
  downloadLink.href = pdfUrl;
  downloadLink.download = downloadName;
  errorDownloadLink.href = pdfUrl;
  errorDownloadLink.download = downloadName;
}

function applyTheme(theme, persist = true) {
  const previousTheme = root.dataset.theme;
  root.dataset.theme = theme;
  themeColor.content = theme === "dark" ? "#111416" : "#f4f6f7";
  const toggleLabel =
    theme === "dark"
      ? translations[language].switchLight
      : translations[language].switchDark;
  setControlLabel(themeToggle, toggleLabel);

  if (persist) {
    themeOverride = theme;
    storage.set("portfolio-theme", theme);
  }

  updatePortfolioLinks();
  if (previousTheme && previousTheme !== theme && pdfDocument) {
    loadPortfolio({ preservePage: true });
  }
}

function setControlLabel(element, label) {
  element.setAttribute("aria-label", label);
  element.title = label;
}

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  root.lang = language;
  storage.set("portfolio-language", language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder =
      translations[language][element.dataset.i18nPlaceholder];
  });

  languageButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.language === language),
    );
  });

  setControlLabel(
    previousPageButton,
    translations[language].previousPage,
  );
  setControlLabel(nextPageButton, translations[language].nextPage);
  setControlLabel(nirvanaVideoLink, translations[language].nirvanaVideo);
  setControlLabel(searchTrigger, translations[language].searchLabel);
  setControlLabel(openPdfLink, translations[language].openNewTabLabel);
  setControlLabel(downloadLink, translations[language].downloadPdf);
  setControlLabel(errorDownloadLink, translations[language].downloadPdf);
  setControlLabel(
    themeToggle,
    root.dataset.theme === "dark"
      ? translations[language].switchLight
      : translations[language].switchDark,
  );
  canvas.setAttribute("aria-label", translations[language].canvasLabel);
  renderProjectCards();

  if (portfolio) {
    const title = translations[language][portfolio.titleKey];
    viewerTitle.textContent = title;
    document.title = `${title} · Portfolio`;
  } else {
    document.title =
      language === "ko" ? "개발 포트폴리오" : "Development Portfolio";
  }

  renderResults(searchInput.value);
}

function renderProjectCards() {
  if (!projectGrid || !projectCardTemplate) return;

  projectGrid.replaceChildren();
  githubProjects.forEach((project) => {
    const fragment = projectCardTemplate.content.cloneNode(true);
    const link = fragment.querySelector(".project-card");
    link.href = project.url;
    link.setAttribute(
      "aria-label",
      `${project.name} · GitHub ${language === "ko" ? "저장소 열기" : "repository"}`,
    );
    link.querySelector(".project-category").textContent = project.category;
    link.querySelector(".project-name").textContent = project.name;
    link.querySelector(".project-description").textContent = project[language];
    link.querySelector(".project-tech").textContent = project.tech;
    projectGrid.append(fragment);
  });
}

function searchableText(item) {
  return [...item.ko, ...item.en, ...item.keywords].join(" ").toLowerCase();
}

function renderResults(query) {
  const terms = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  searchResults.replaceChildren();

  if (terms.length === 0) {
    searchResults.hidden = true;
    emptyState.hidden = true;
    return;
  }

  const matches = pages.filter((item) => {
    const haystack = searchableText(item);
    return terms.every((term) => haystack.includes(term));
  });

  searchResults.hidden = matches.length === 0;
  emptyState.hidden = matches.length !== 0;

  matches.forEach((item) => {
    const [title, summary] = item[language];
    const fragment = resultTemplate.content.cloneNode(true);
    const link = fragment.querySelector(".result");

    link.href = `./?c=web&page=${item.page}`;
    link.querySelector("strong").textContent = title;
    link.querySelector(".result-text > span").textContent = summary;
    link.addEventListener("click", (event) => {
      if (portfolioKey !== "web" || !pdfDocument) return;

      event.preventDefault();
      closeSearch();
      goToPage(item.page);
    });
    searchResults.append(fragment);
  });
}

function openSearch(focusInput = true) {
  searchPanel.classList.add("is-open");
  searchTrigger.setAttribute("aria-expanded", "true");

  if (focusInput) {
    window.requestAnimationFrame(() => searchInput.focus());
  }
}

function closeSearch(returnFocus = false) {
  searchPanel.classList.remove("is-open");
  searchTrigger.setAttribute("aria-expanded", "false");
  searchInput.value = "";
  renderResults("");
  searchInput.blur();

  if (returnFocus) searchTrigger.focus();
}

function updateViewerControls() {
  currentPageElement.textContent = String(currentPage);
  totalPagesElement.textContent = pdfDocument
    ? String(pdfDocument.numPages)
    : "—";
  previousPageButton.disabled = !pdfDocument || currentPage <= 1;
  nextPageButton.disabled =
    !pdfDocument || currentPage >= pdfDocument.numPages;
}

function updatePageRoute() {
  const url = new URL(window.location.href);
  url.searchParams.set("c", portfolioKey);
  if (currentPage === 1) {
    url.searchParams.delete("page");
  } else {
    url.searchParams.set("page", String(currentPage));
  }
  window.history.replaceState(null, "", url);
}

async function renderCurrentPage() {
  if (!pdfDocument) return;

  const request = ++renderRequest;
  if (renderTask) renderTask.cancel();

  viewerStage.classList.add("is-rendering");

  try {
    const page = await pdfDocument.getPage(currentPage);
    if (request !== renderRequest) return;

    const baseViewport = page.getViewport({ scale: 1 });
    const availableWidth = Math.max(viewerStage.clientWidth - 4, 280);
    const fitScale = Math.min(
      Math.max(availableWidth / baseViewport.width, 0.45),
      1.5,
    );
    const viewport = page.getViewport({ scale: fitScale });
    const outputScale = Math.min(window.devicePixelRatio || 1, 2);
    const context = canvas.getContext("2d", { alpha: false });

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = `${Math.floor(viewport.width)}px`;
    canvas.style.height = `${Math.floor(viewport.height)}px`;
    canvas.hidden = false;
    viewerLoading.hidden = true;
    viewerError.hidden = true;

    const task = page.render({
      canvasContext: context,
      viewport,
      transform:
        outputScale === 1
          ? null
          : [outputScale, 0, 0, outputScale, 0, 0],
    });

    renderTask = task;
    await task.promise;
    if (renderTask === task) renderTask = null;
  } catch (error) {
    if (error?.name !== "RenderingCancelledException") {
      throw error;
    }
  } finally {
    if (request === renderRequest) {
      viewerStage.classList.remove("is-rendering");
    }
  }
}

async function goToPage(pageNumber) {
  if (!pdfDocument) return;

  const nextPage = Math.min(
    Math.max(Number(pageNumber) || 1, 1),
    pdfDocument.numPages,
  );
  currentPage = nextPage;
  updateViewerControls();
  updatePageRoute();
  viewerStage.scrollTop = 0;
  viewerStage.scrollLeft = 0;

  try {
    await renderCurrentPage();
  } catch {
    showViewerError();
  }
}

function showViewerError() {
  viewerLoading.hidden = true;
  canvas.hidden = true;
  viewerError.hidden = false;
  viewerStage.classList.remove("is-rendering");
}

async function loadPortfolio({ preservePage = false } = {}) {
  if (!portfolio) return;

  const request = ++loadRequest;
  const pageToKeep = preservePage ? currentPage : Number(routeParams.get("page"));
  renderRequest += 1;
  if (renderTask) {
    renderTask.cancel();
    renderTask = null;
  }
  viewerLoading.hidden = false;
  viewerError.hidden = true;

  try {
    pdfjsModule ??= await import(PDFJS_URL);
    pdfjsModule.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL;
    const loadingTask = pdfjsModule.getDocument({ url: getPortfolioPdf() });
    const nextDocument = await loadingTask.promise;
    if (request !== loadRequest) {
      await nextDocument.destroy();
      return;
    }

    const previousDocument = pdfDocument;
    pdfDocument = nextDocument;
    if (previousDocument) {
      await previousDocument.destroy();
    }

    currentPage = Number.isInteger(pageToKeep)
      ? Math.min(Math.max(pageToKeep, 1), pdfDocument.numPages)
      : 1;

    updateViewerControls();
    updatePageRoute();
    await renderCurrentPage();
  } catch {
    showViewerError();
  }
}

function initializeRoute() {
  if (!portfolio) {
    homeScreen.hidden = false;
    viewerScreen.hidden = true;
    searchPanel.hidden = true;
    return;
  }

  homeScreen.hidden = true;
  viewerScreen.hidden = false;
  searchPanel.hidden = portfolioKey !== "web";
  updatePortfolioLinks();
  loadPortfolio();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

themeToggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
});

searchTrigger.addEventListener("click", () => {
  if (searchPanel.classList.contains("is-open")) {
    closeSearch(true);
  } else {
    openSearch();
  }
});
searchInput.addEventListener("focus", () => openSearch(false));
searchInput.addEventListener("input", () => renderResults(searchInput.value));
previousPageButton.addEventListener("click", () => goToPage(currentPage - 1));
nextPageButton.addEventListener("click", () => goToPage(currentPage + 1));

document.addEventListener("click", (event) => {
  if (
    searchPanel.classList.contains("is-open") &&
    !searchPanel.contains(event.target)
  ) {
    closeSearch();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    (event.metaKey || event.ctrlKey) &&
    event.key.toLowerCase() === "k" &&
    portfolioKey === "web"
  ) {
    event.preventDefault();
    openSearch();
  }

  if (
    event.key === "Escape" &&
    (searchPanel.classList.contains("is-open") ||
      document.activeElement === searchInput)
  ) {
    closeSearch(true);
  }

  if (
    pdfDocument &&
    document.activeElement !== searchInput &&
    event.key === "ArrowLeft"
  ) {
    goToPage(currentPage - 1);
  }

  if (
    pdfDocument &&
    document.activeElement !== searchInput &&
    event.key === "ArrowRight"
  ) {
    goToPage(currentPage + 1);
  }
});

window.addEventListener("resize", () => {
  if (!pdfDocument) return;

  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    renderCurrentPage().catch(showViewerError);
  }, 160);
});

if (systemTheme?.addEventListener) {
  systemTheme.addEventListener("change", (event) => {
    if (!themeOverride) {
      applyTheme(event.matches ? "dark" : "light", false);
    }
  });
}

applyTheme(
  themeOverride || (systemTheme?.matches ? "dark" : "light"),
  Boolean(themeOverride),
);
applyLanguage(language);
initializeRoute();
updateViewerControls();

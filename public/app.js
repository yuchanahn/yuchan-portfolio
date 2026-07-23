const PDFJS_URL =
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.7.284/build/pdf.min.mjs";
const PDFJS_WORKER_URL =
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.7.284/build/pdf.worker.min.mjs";

const portfolioDefinitions = {
  web: {
    pdfByTheme: {
      light: "./assets/web-portfolio-light.pdf?v=7",
      dark: "./assets/web-portfolio-dark.pdf?v=7",
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
    ko: ["프로젝트 요약", "PeroChat의 현재 상태와 풀스택 개발 범위."],
    en: ["Project overview", "Current status and full-stack scope of PeroChat."],
    keywords: ["perochat", "full-stack", "풀스택", "서비스", "operation"],
  },
  {
    page: 2,
    ko: [
      "프로젝트의 시작",
      "VRM과 LLM 연구과제에서 실제 서비스로 확장한 과정.",
    ],
    en: [
      "Project origin",
      "How a VRM and LLM research project grew into a running service.",
    ],
    keywords: ["vrm", "llm", "personaxi", "pxi", "연구과제"],
  },
  {
    page: 3,
    ko: [
      "제품과 구현 범위",
      "캐릭터 제작, Live2D·VRM 채팅, 결제와 앱 테스트.",
    ],
    en: [
      "Product scope",
      "Character creation, Live2D and VRM chat, payments, and app testing.",
    ],
    keywords: ["live2d", "vrm", "결제", "payments", "사용자", "users"],
  },
  {
    page: 4,
    ko: [
      "전체 아키텍처",
      "정적 프론트엔드, Go API, LLM Gateway와 데이터 계층.",
    ],
    en: [
      "System architecture",
      "Static frontend, Go API, LLM Gateway, and data layer.",
    ],
    keywords: [
      "architecture",
      "아키텍처",
      "go",
      "postgresql",
      "redis",
      "gateway",
    ],
  },
  {
    page: 5,
    ko: [
      "Svelte 프론트엔드와 다국어 설계",
      "한·영·일 UI, locale 콘텐츠, 누락 번역의 비동기 생성과 LLM 응답 언어 제어.",
    ],
    en: [
      "Svelte frontend and localization",
      "Korean/English/Japanese UI, localized content, asynchronous translation, and LLM response language.",
    ],
    keywords: [
      "svelte",
      "sveltekit",
      "svelte-i18n",
      "csr",
      "pwa",
      "iphone",
      "frontend",
      "다국어",
      "언어",
      "영어",
      "일본어",
      "번역",
      "translation",
      "비동기 번역",
      "background translation",
      "localization",
      "locale",
      "i18n",
    ],
  },
  {
    page: 6,
    ko: [
      "캐릭터 런타임",
      "감정 분석, VRM 표정 튜닝과 Live2D 라이선스.",
    ],
    en: [
      "Character runtime",
      "Emotion analysis, VRM expression tuning, and Live2D licensing.",
    ],
    keywords: [
      "goemotions",
      "emotion",
      "감정",
      "live2d",
      "vrm",
      "라이선스",
      "license",
    ],
  },
  {
    page: 7,
    ko: [
      "Go 백엔드와 Redis",
      "동시 요청에서 확인한 DB 병목과 Redis 캐시 적용.",
    ],
    en: [
      "Go backend and Redis",
      "Database bottlenecks under concurrent load and Redis caching.",
    ],
    keywords: [
      "go",
      "backend",
      "백엔드",
      "redis",
      "postgresql",
      "부하 테스트",
      "load test",
      "cache",
    ],
  },
  {
    page: 8,
    ko: [
      "LLM Gateway와 실시간 통신",
      "공급자 fallback, SSE·WebSocket과 감정 모델 배포.",
    ],
    en: [
      "LLM Gateway and real-time communication",
      "Provider fallback, SSE, WebSocket, and emotion model deployment.",
    ],
    keywords: [
      "llm",
      "gateway",
      "fallback",
      "sse",
      "websocket",
      "hugging face",
    ],
  },
  {
    page: 9,
    ko: [
      "배포와 운영",
      "Oracle Cloud, Coolify, Supabase와 실제 결제 검증.",
    ],
    en: [
      "Deployment and operation",
      "Oracle Cloud, Coolify, Supabase, and real payment validation.",
    ],
    keywords: [
      "oracle cloud",
      "coolify",
      "supabase",
      "paypal",
      "portone",
      "배포",
      "deployment",
      "결제",
    ],
  },
  {
    page: 10,
    ko: [
      "QuickBite 실전 운영 프로젝트",
      "교내 디저트 판매를 위해 주문·관리·알림·배포까지 구현한 웹사이트.",
    ],
    en: [
      "QuickBite real-world project",
      "A dessert ordering site covering customer orders, seller operations, notifications, and deployment.",
    ],
    keywords: [
      "quickbite",
      "디저트",
      "dessert",
      "주문",
      "order",
      "sveltekit",
      "sqlite",
      "google sheets",
      "discord",
      "ubuntu",
      "도메인",
      "domain",
    ],
  },
  {
    page: 11,
    ko: [
      "개발 기반과 방식",
      "Unreal·Unity·네트워크 경험과 AI 도구 활용 원칙.",
    ],
    en: [
      "Engineering foundation",
      "Unreal, Unity, networking experience, and AI-assisted development.",
    ],
    keywords: [
      "unreal",
      "unity",
      "networking",
      "게임",
      "game",
      "ai agent",
      "번역",
      "translation",
    ],
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

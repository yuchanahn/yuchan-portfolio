const translations = {
  ko: {
    openPdf: "PDF 보기",
    downloadPdf: "다운로드",
    searchLabel: "포트폴리오 검색",
    searchPlaceholder: "기술 또는 문제 검색",
    searchOpen: "포트폴리오 검색",
    searchClose: "검색 닫기",
    empty: "검색 결과가 없습니다.",
  },
  en: {
    openPdf: "View PDF",
    downloadPdf: "Download",
    searchLabel: "Search portfolio",
    searchPlaceholder: "Search a technology or problem",
    searchOpen: "Search portfolio",
    searchClose: "Close search",
    empty: "No results found.",
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
      "Svelte 프론트엔드",
      "CSR, GitHub Pages, PWA와 iPhone 키보드 문제 해결.",
    ],
    en: [
      "Svelte frontend",
      "CSR, GitHub Pages, PWA, and the iPhone keyboard issue.",
    ],
    keywords: ["svelte", "sveltekit", "csr", "pwa", "iphone", "frontend"],
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
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const searchToggle = document.querySelector("#search-toggle");
const searchPanel = document.querySelector("#search-panel");
const searchInput = document.querySelector("#search-input");
const searchClose = document.querySelector("#search-close");
const searchResults = document.querySelector("#search-results");
const emptyState = document.querySelector("#empty-state");
const resultTemplate = document.querySelector("#result-template");
const systemTheme = window.matchMedia?.("(prefers-color-scheme: dark)");

let language =
  storage.get("portfolio-language") ||
  (navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en");
let themeOverride = storage.get("portfolio-theme");

if (language !== "ko" && language !== "en") language = "ko";

function applyTheme(theme, persist = true) {
  root.dataset.theme = theme;
  themeColor.content = theme === "dark" ? "#101719" : "#f4f5f5";

  themeButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.themeChoice === theme),
    );
  });

  if (persist) {
    themeOverride = theme;
    storage.set("portfolio-theme", theme);
  }
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

  searchToggle.setAttribute("aria-label", translations[language].searchOpen);
  searchToggle.title = translations[language].searchOpen;
  searchClose.setAttribute("aria-label", translations[language].searchClose);
  searchClose.title = translations[language].searchClose;

  renderResults(searchInput.value);
}

function searchableText(item) {
  return [
    ...item.ko,
    ...item.en,
    ...item.keywords,
  ]
    .join(" ")
    .toLowerCase();
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

    link.href = `./assets/portfolio.pdf#page=${item.page}`;
    link.querySelector("strong").textContent = title;
    link.querySelector(".result-text > span").textContent = summary;
    searchResults.append(fragment);
  });
}

function openSearch() {
  searchPanel.hidden = false;
  searchToggle.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => searchInput.focus());
}

function closeSearch() {
  searchPanel.hidden = true;
  searchToggle.setAttribute("aria-expanded", "false");
  searchInput.value = "";
  renderResults("");
  searchToggle.focus();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () =>
    applyTheme(button.dataset.themeChoice, true),
  );
});

searchToggle.addEventListener("click", openSearch);
searchClose.addEventListener("click", closeSearch);
searchInput.addEventListener("input", () => renderResults(searchInput.value));

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }

  if (event.key === "Escape" && !searchPanel.hidden) {
    closeSearch();
  }
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

const translations = {
  ko: {
    heroEyebrow: "FULL-STACK · AI SERVICE",
    heroTitle: "아이디어를 실제 서비스로 만든 과정",
    heroSummary:
      "웹 기반 AI 캐릭터 채팅 서비스 PeroChat을 기획부터 개발, 배포와 운영까지 진행했습니다. 포트폴리오에서 기술 선택과 문제 해결 과정을 확인할 수 있습니다.",
    openPdf: "PDF 전체 보기",
    downloadPdf: "PDF 다운로드",
    searchEyebrow: "DOCUMENT INDEX",
    searchTitle: "포트폴리오에서 찾기",
    searchLabel: "포트폴리오 검색",
    searchPlaceholder: "Redis, Svelte, Live2D, 결제...",
    searchHelp:
      "기술명이나 문제를 검색하면 관련 페이지를 바로 열 수 있습니다.",
    emptyTitle: "검색 결과가 없습니다.",
    emptyHelp: "다른 기술명이나 키워드로 검색해보세요.",
    resultLink: "페이지 열기",
    page: "페이지",
    resultCount: (count) => `${count}개 페이지`,
    updated: "최종 업데이트 2026.07",
  },
  en: {
    heroEyebrow: "FULL-STACK · AI SERVICE",
    heroTitle: "From an idea to a running service",
    heroSummary:
      "PeroChat is a web-based AI character chat service built from planning through development, deployment, and operation. Explore the portfolio to see the decisions and problems behind it.",
    openPdf: "View full PDF",
    downloadPdf: "Download PDF",
    searchEyebrow: "DOCUMENT INDEX",
    searchTitle: "Search the portfolio",
    searchLabel: "Search portfolio",
    searchPlaceholder: "Redis, Svelte, Live2D, payments...",
    searchHelp:
      "Search a technology or problem and open the relevant PDF page directly.",
    emptyTitle: "No results found.",
    emptyHelp: "Try another technology or keyword.",
    resultLink: "Open page",
    page: "Page",
    resultCount: (count) => `${count} ${count === 1 ? "page" : "pages"}`,
    updated: "Updated 2026.07",
  },
};

const pages = [
  {
    page: 1,
    ko: {
      title: "표지 · 프로젝트 요약",
      summary:
        "PeroChat의 현재 상태, 개인 프로젝트 범위, 담당 직무와 핵심 소개.",
      tags: ["PeroChat", "Full-Stack", "서비스 운영"],
    },
    en: {
      title: "Cover · Project overview",
      summary:
        "Current status, personal ownership, target role, and a concise overview of PeroChat.",
      tags: ["PeroChat", "Full-Stack", "Operation"],
    },
  },
  {
    page: 2,
    ko: {
      title: "프로필과 프로젝트의 시작",
      summary:
        "VRM과 LLM 연구과제에서 실제 서비스로 확장한 과정과 담당 범위.",
      tags: ["VRM", "LLM", "PersonaXi", "PXI"],
    },
    en: {
      title: "Profile and project origin",
      summary:
        "How a VRM and LLM research project grew into a running service and the scope of ownership.",
      tags: ["VRM", "LLM", "PersonaXi", "PXI"],
    },
  },
  {
    page: 3,
    ko: {
      title: "제품과 현재 구현 범위",
      summary:
        "캐릭터 제작, 2D·Live2D·VRM 채팅, 결제, 앱 테스트와 실제 사용자 현황.",
      tags: ["Live2D", "VRM", "결제", "사용자"],
    },
    en: {
      title: "Product and current scope",
      summary:
        "Character creation, 2D, Live2D and VRM chat, payments, app testing, and real users.",
      tags: ["Live2D", "VRM", "Payments", "Users"],
    },
  },
  {
    page: 4,
    ko: {
      title: "전체 아키텍처",
      summary:
        "정적 프론트엔드, Go API, LLM Gateway, 데이터 계층과 인프라의 경계.",
      tags: ["Architecture", "Go", "PostgreSQL", "Redis"],
    },
    en: {
      title: "System architecture",
      summary:
        "Boundaries between the static frontend, Go API, LLM Gateway, data layer, and infrastructure.",
      tags: ["Architecture", "Go", "PostgreSQL", "Redis"],
    },
  },
  {
    page: 5,
    ko: {
      title: "Svelte 프론트엔드",
      summary:
        "Svelte와 CSR을 선택한 이유, GitHub Pages 배포, iPhone 키보드와 뷰포트 문제.",
      tags: ["SvelteKit", "CSR", "PWA", "iPhone"],
    },
    en: {
      title: "Svelte frontend",
      summary:
        "Why Svelte and CSR were chosen, GitHub Pages deployment, and the iPhone keyboard viewport issue.",
      tags: ["SvelteKit", "CSR", "PWA", "iPhone"],
    },
  },
  {
    page: 6,
    ko: {
      title: "캐릭터 런타임",
      summary:
        "감정 분석, VRM 표정 파라미터 튜닝, Live2D 라이선스 확인과 파일 보호.",
      tags: ["GoEmotions", "Live2D", "VRM", "라이선스"],
    },
    en: {
      title: "Character runtime",
      summary:
        "Emotion analysis, VRM expression tuning, Live2D licensing, and model file protection.",
      tags: ["GoEmotions", "Live2D", "VRM", "Licensing"],
    },
  },
  {
    page: 7,
    ko: {
      title: "Go 백엔드와 Redis",
      summary:
        "Go를 선택한 이유, 2,000명 동시 시나리오에서 확인한 DB 병목과 Redis 캐시.",
      tags: ["Go", "Redis", "부하 테스트", "PostgreSQL"],
    },
    en: {
      title: "Go backend and Redis",
      summary:
        "Why Go was chosen and how Redis caching addressed a database bottleneck found under concurrent load.",
      tags: ["Go", "Redis", "Load test", "PostgreSQL"],
    },
  },
  {
    page: 8,
    ko: {
      title: "LLM Gateway와 실시간 통신",
      summary:
        "여러 LLM 공급자 라우팅과 fallback, SSE·WebSocket 분리, 감정 모델 배포.",
      tags: ["LLM Gateway", "Fallback", "SSE", "WebSocket"],
    },
    en: {
      title: "LLM Gateway and real-time communication",
      summary:
        "Multi-provider routing and fallback, SSE and WebSocket boundaries, and emotion model deployment.",
      tags: ["LLM Gateway", "Fallback", "SSE", "WebSocket"],
    },
  },
  {
    page: 9,
    ko: {
      title: "배포와 운영",
      summary:
        "Oracle Cloud, Coolify, Supabase CDN, 실제 결제 검증과 출시 이후 운영 경험.",
      tags: ["Oracle Cloud", "Coolify", "Supabase", "PayPal"],
    },
    en: {
      title: "Deployment and operation",
      summary:
        "Oracle Cloud, Coolify, Supabase CDN, real payment validation, and post-launch operation.",
      tags: ["Oracle Cloud", "Coolify", "Supabase", "PayPal"],
    },
  },
  {
    page: 10,
    ko: {
      title: "게임 개발 기반과 개발 방식",
      summary:
        "Unreal·Unity·네트워크 개발 경험, AI 도구 활용 원칙과 다음 개선 계획.",
      tags: ["Unreal", "Unity", "Networking", "AI Agent"],
    },
    en: {
      title: "Engineering foundation",
      summary:
        "Unreal, Unity, and networking experience, principles for AI-assisted development, and next steps.",
      tags: ["Unreal", "Unity", "Networking", "AI Agent"],
    },
  },
];

const root = document.documentElement;
const searchInput = document.querySelector("#search-input");
const results = document.querySelector("#search-results");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const template = document.querySelector("#result-template");
const languageButtons = document.querySelectorAll("[data-language]");
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const systemTheme = matchMedia("(prefers-color-scheme: dark)");

let language = (() => {
  const saved = localStorage.getItem("portfolio-language");
  if (saved === "ko" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
})();

let themeOverride = localStorage.getItem("portfolio-theme");

function applyTheme(theme, persist = true) {
  root.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", theme === "dark" ? "#10191c" : "#f4f6f6");

  themeButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.themeChoice === theme),
    );
  });

  if (persist) {
    themeOverride = theme;
    localStorage.setItem("portfolio-theme", theme);
  }
}

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  root.lang = language;
  localStorage.setItem("portfolio-language", language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
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

  renderResults(searchInput.value);
}

function searchableText(page) {
  const content = page[language];
  const alternate = page[language === "ko" ? "en" : "ko"];
  return [
    content.title,
    content.summary,
    ...content.tags,
    alternate.title,
    alternate.summary,
    ...alternate.tags,
  ]
    .join(" ")
    .toLowerCase();
}

function renderResults(query = "") {
  const normalized = query.trim().toLowerCase();
  const filtered = pages.filter((page) =>
    normalized ? searchableText(page).includes(normalized) : true,
  );

  results.replaceChildren();
  emptyState.hidden = filtered.length !== 0;
  resultCount.textContent = translations[language].resultCount(filtered.length);

  filtered.forEach((page) => {
    const content = page[language];
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".result-card");

    card.querySelector(".result-page").textContent =
      `${translations[language].page} ${page.page}`;
    card.querySelector("h3").textContent = content.title;
    card.querySelector(".result-content p").textContent = content.summary;

    const tags = card.querySelector(".tags");
    content.tags.forEach((tagText) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = tagText;
      tags.append(tag);
    });

    const link = card.querySelector(".result-link");
    link.href = `./assets/portfolio.pdf#page=${page.page}`;
    link.querySelector("[data-result-link-text]").textContent =
      translations[language].resultLink;

    results.append(fragment);
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () =>
    applyTheme(button.dataset.themeChoice, true),
  );
});

systemTheme.addEventListener("change", (event) => {
  if (!themeOverride) applyTheme(event.matches ? "dark" : "light", false);
});

searchInput.addEventListener("input", () => renderResults(searchInput.value));

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

applyTheme(
  themeOverride || (systemTheme.matches ? "dark" : "light"),
  Boolean(themeOverride),
);
applyLanguage(language);

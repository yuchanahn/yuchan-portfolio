window.PORTFOLIO_DATA = {
  profile: {
    name: { ko: "안유찬", en: "Yuchan Ahn" },
    role: {
      ko: "풀스택 · 백엔드 · C++/게임 프로그래밍",
      en: "Full-stack · Backend · C++/Game Programming",
    },
    introduction: {
      ko: "웹 서비스를 직접 만들고 운영하면서 결제, 데이터, 외부 API, 배포 문제를 다뤘습니다. 게임 개발로 프로그래밍을 시작해 C++ 네트워크와 Unreal Engine 프로젝트도 계속해 왔습니다.",
      en: "I build and operate web services, working across payments, data, external APIs, and deployment. I started with game development and continue to work with C++ networking and Unreal Engine projects.",
    },
    email: "ultrauc123@gmail.com",
    github: "https://github.com/yuchanahn/-",
    service: "https://personaxi.com",
    video: "https://www.youtube.com/watch?v=IK2acnw1DHY",
  },

  tagGroups: [
    {
      id: "role",
      label: { ko: "지원 직무", en: "Role" },
      tags: ["fullstack", "backend", "fintech", "ai", "game-server", "cpp", "game-client"],
    },
    {
      id: "stack",
      label: { ko: "기술", en: "Technology" },
      tags: [
        "go",
        "svelte",
        "postgresql",
        "redis",
        "payment",
        "llm",
        "realtime",
        "devops",
        "testing",
        "unreal",
        "unity",
        "csharp",
        "rust",
        "pathfinding",
        "network",
      ],
    },
    {
      id: "experience",
      label: { ko: "보여줄 경험", en: "Experience" },
      tags: ["operations", "performance", "admin", "mobile", "localization", "collaboration"],
    },
  ],

  tags: {
    fullstack: { ko: "풀스택", en: "Full-stack" },
    backend: { ko: "백엔드", en: "Backend" },
    fintech: { ko: "금융·핀테크", en: "Fintech" },
    ai: { ko: "AI 서비스", en: "AI Service" },
    "game-server": { ko: "게임 서비스·서버", en: "Game Service/Server" },
    cpp: { ko: "C++ 시스템", en: "C++ Systems" },
    "game-client": { ko: "게임 클라이언트", en: "Game Client" },
    go: { ko: "Go", en: "Go" },
    svelte: { ko: "SvelteKit", en: "SvelteKit" },
    postgresql: { ko: "PostgreSQL", en: "PostgreSQL" },
    redis: { ko: "Redis", en: "Redis" },
    payment: { ko: "결제·정합성", en: "Payments" },
    llm: { ko: "LLM", en: "LLM" },
    realtime: { ko: "SSE·WebSocket", en: "SSE/WebSocket" },
    devops: { ko: "배포·인프라", en: "Deployment/Infra" },
    testing: { ko: "부하 테스트", en: "Load Testing" },
    unreal: { ko: "Unreal Engine", en: "Unreal Engine" },
    unity: { ko: "Unity", en: "Unity" },
    csharp: { ko: "C#", en: "C#" },
    rust: { ko: "Rust", en: "Rust" },
    pathfinding: { ko: "길찾기", en: "Pathfinding" },
    network: { ko: "네트워크", en: "Networking" },
    operations: { ko: "서비스 운영", en: "Service Operations" },
    performance: { ko: "성능 개선", en: "Performance" },
    admin: { ko: "관리자 도구", en: "Admin Tools" },
    mobile: { ko: "PWA·모바일", en: "PWA/Mobile" },
    localization: { ko: "다국어", en: "Localization" },
    collaboration: { ko: "협업·회고", en: "Collaboration" },
  },

  presets: [
    {
      id: "finance-backend",
      title: { ko: "금융·웹 백엔드", en: "Fintech Backend" },
      description: {
        ko: "결제 정합성, PostgreSQL, Redis, 부하 테스트와 운영 경험",
        en: "Payment consistency, PostgreSQL, Redis, load testing, and operations",
      },
      tags: ["backend", "fintech", "go", "postgresql", "redis", "payment", "testing", "operations"],
    },
    {
      id: "game-service",
      title: { ko: "게임 서비스 백엔드", en: "Game Service Backend" },
      description: {
        ko: "Go API, 실시간 통신, LLM, 캐시, 운영과 네트워크 경험",
        en: "Go APIs, real-time communication, LLMs, caching, operations, and networking",
      },
      tags: ["game-server", "backend", "go", "redis", "llm", "realtime", "network", "operations"],
    },
    {
      id: "cpp-systems",
      title: { ko: "C++ 시스템·네트워크", en: "C++ Systems & Networking" },
      description: {
        ko: "소켓·IOCP, UE5 네트워크, 거래소 REST·WebSocket 및 C++ 코드 회고",
        en: "Sockets, IOCP, UE5 networking, exchange REST/WebSockets, and C++ code review",
      },
      tags: ["cpp", "network", "unreal", "performance", "collaboration"],
    },
    {
      id: "game-client",
      title: { ko: "Unreal·Unity 게임 개발", en: "Unreal & Unity Game Development" },
      description: {
        ko: "Nirvana 팀 프로젝트, UE5 C++, 멀티플레이와 Unity 경험",
        en: "Nirvana, UE5 C++, multiplayer systems, and Unity experience",
      },
      tags: ["game-client", "cpp", "unreal", "unity", "network", "collaboration"],
    },
    {
      id: "ai-fullstack",
      title: { ko: "AI 서비스 풀스택", en: "AI Service Full-stack" },
      description: {
        ko: "PeroChat의 LLM, 캐릭터 표현, 결제, 모바일과 운영 도구",
        en: "PeroChat's LLM, character runtime, payments, mobile, and operations",
      },
      tags: ["ai", "fullstack", "svelte", "go", "llm", "realtime", "mobile", "admin"],
    },
  ],

  projects: {
    perochat: {
      portfolioType: "fullstack",
      name: "PeroChat",
      period: "2025.05–현재",
      type: { ko: "개인 개발·운영", en: "Solo development and operations" },
      summary: {
        ko: "대학 과제로 시작한 VRM+LLM 웹 채팅을 2D·Live2D·VRM 캐릭터, 결제, 관리자 기능과 다국어 UI를 갖춘 서비스로 확장했습니다.",
        en: "A university VRM+LLM web-chat project expanded into a service with 2D, Live2D and VRM characters, payments, admin tools, and multilingual UI.",
      },
      links: [
        { label: { ko: "서비스", en: "Service" }, href: "https://personaxi.com", value: "personaxi.com" },
        { label: { ko: "공개 프런트엔드", en: "Public frontend" }, href: "https://github.com/yuchanahn/personaxi-front", value: "GitHub" },
      ],
    },
    quickbite: {
      portfolioType: "fullstack",
      name: "QuickBite",
      period: { ko: "수개월간 운영", en: "Operated for several months" },
      type: { ko: "개인 개발·실사용", en: "Solo development, used in production" },
      summary: {
        ko: "교내 디저트 판매자의 주문 접수와 판매 관리를 위해 만들고 실제 요구에 맞춰 계속 수정한 웹사이트입니다.",
        en: "An ordering and sales-management site built for a dessert seller and iterated from real operational feedback.",
      },
    },
    nirvana: {
      portfolioType: "game-client",
      name: "Nirvana",
      period: "2023.03–2023.11",
      type: { ko: "22명 팀 · 프로그래머 4명", en: "22-person team · 4 programmers" },
      summary: {
        ko: "Unreal Engine 5.3으로 제작한 2인 멀티플레이 액션 로그라이크 졸업 프로젝트입니다.",
        en: "A two-player multiplayer action roguelike capstone project built with Unreal Engine 5.3.",
      },
      links: [
        { label: { ko: "플레이 영상", en: "Play video" }, href: "https://www.youtube.com/watch?v=IK2acnw1DHY", value: "YouTube" },
        { label: { ko: "공개 코드", en: "Public code" }, href: "https://github.com/yuchanahn/-", value: "GitHub" },
      ],
    },
    foundations: {
      portfolioType: "cpp",
      name: { ko: "네트워크·시스템 학습", en: "Networking & systems foundations" },
      period: { ko: "개인 학습 기록", en: "Independent study record" },
      type: { ko: "개인 학습·실험", en: "Study and experiments" },
      summary: {
        ko: "소켓과 IOCP부터 P2P·롤백 실험까지 직접 구현하며 네트워크 프로그래밍을 공부했습니다.",
        en: "Networking studies ranging from sockets and IOCP to P2P and rollback experiments.",
      },
      links: [
        { label: { ko: "공개 코드 모음", en: "Code samples" }, href: "https://github.com/yuchanahn/-", value: "GitHub" },
      ],
    },
    tower: {
      portfolioType: "game-client",
      name: "Tower of Ukani",
      period: "2019",
      type: { ko: "대학교 1학년 Unity 팀 프로젝트", en: "First-year university Unity team project" },
      summary: {
        ko: "행동 트리와 몬스터별 행동, 상태이상, 오브젝트 재사용 구조를 구현하고 공개 JPS 코드를 게임의 이동 구조에 연결했습니다.",
        en: "Implemented behavior trees, per-monster actions, status effects, and object reuse, then connected an open JPS implementation to the game's movement model.",
      },
      links: [
        { label: { ko: "프로젝트", en: "Project" }, href: "https://github.com/yuchanahn/Tower_Of_Ukani", value: "GitHub" },
      ],
    },
    vapor: {
      portfolioType: "game-client",
      name: "Vapor",
      period: "2022–2023",
      type: { ko: "Unity 팀 프로젝트", en: "Unity team project" },
      summary: {
        ko: "플레이어 전투, 입력·UI, 컷신 데이터와 저장 기능을 연결한 2D 횡스크롤 액션 게임입니다.",
        en: "A 2D side-scrolling action game connecting player combat, input and UI, cutscene data, and save files.",
      },
      links: [
        { label: { ko: "프로젝트", en: "Project" }, href: "https://github.com/yuchanahn/CK2022CapstoneDesign", value: "GitHub" },
      ],
    },
    p2p: {
      portfolioType: "game-server",
      name: "P2P Netcode",
      period: "2025",
      type: { ko: "Godot·Rust 개인 실험", en: "Godot and Rust personal experiment" },
      summary: {
        ko: "UDP 기반 delay netcode를 먼저 만든 뒤 snapshot과 재시뮬레이션을 추가해 rollback 구조까지 비교했습니다.",
        en: "Built UDP delay netcode first, then added snapshots and resimulation to compare a rollback approach.",
      },
      links: [
        { label: { ko: "프로젝트", en: "Project" }, href: "https://github.com/yuchanahn/p2pactiongame", value: "GitHub" },
      ],
    },
    bybitCpp: {
      portfolioType: "cpp",
      name: "C++ Bybit Trading Bot",
      period: "2021–2022",
      type: { ko: "C++ 개인 학습 프로젝트", en: "C++ personal study project" },
      summary: {
        ko: "Bybit의 공개·비공개 WebSocket, 주문 REST API와 HMAC-SHA256 서명을 C++로 직접 연결했습니다.",
        en: "Connected Bybit public/private WebSockets, trading REST APIs, and HMAC-SHA256 signing directly in C++.",
      },
      links: [
        { label: { ko: "프로젝트", en: "Project" }, href: "https://github.com/yuchanahn/trade_bot_bybit_cpp", value: "GitHub" },
      ],
    },
    autoTrading: {
      portfolioType: "fintech",
      name: { ko: "D·Nim 자동매매", en: "D and Nim Trading Bots" },
      period: "2024",
      type: { ko: "개인·공동 학습 프로젝트", en: "Personal and collaborative study projects" },
      summary: {
        ko: "거래소 실시간 주문을 기준으로 상태를 저장해 프로세스 종료 뒤에도 주문과 포지션을 복구하도록 실험했습니다.",
        en: "Used exchange real-time orders as the recovery source so order and position state could survive process restarts.",
      },
      links: [
        { label: "Nim", href: "https://github.com/doongjohn/bigmoney", value: "GitHub" },
        { label: "D", href: "https://github.com/doongjohn/bigmoney-d", value: "GitHub" },
      ],
    },
  },

  modules: [
    {
      id: "perochat-overview",
      order: 10,
      project: "perochat",
      category: { ko: "서비스 구조", en: "Service Architecture" },
      tags: ["fullstack", "backend", "ai", "game-server", "go", "svelte", "postgresql", "redis", "llm", "devops", "operations"],
      title: {
        ko: "대학 과제에서 시작한 웹 채팅을 실제 서비스 구조로 확장했습니다",
        en: "Expanded a university web-chat project into an operated service",
      },
      lead: {
        ko: "SvelteKit 클라이언트와 Go API를 분리하고 PostgreSQL, Redis, Supabase, LLM 공급자와 결제 시스템을 연결했습니다.",
        en: "Separated the SvelteKit client from the Go API and connected PostgreSQL, Redis, Supabase, LLM providers, and payments.",
      },
      paragraphs: {
        ko: [
          "처음에는 VRM 캐릭터와 LLM 응답을 연결하는 대학 과제였습니다. 과제가 끝난 뒤 캐릭터 탐색·제작, 2D·Live2D·VRM 채팅, 사용자 계정, 재화와 결제, 관리자 기능을 차례로 추가해 PeroChat으로 운영했습니다.",
          "프런트엔드는 GitHub Pages에서 CSR로 제공하고, 인증과 데이터 변경은 별도의 Go API에서 처리합니다. API·PostgreSQL·Redis는 Oracle Cloud 인스턴스에 두고 Supabase Auth와 Storage, Hugging Face 감정 분석 모델을 외부 서비스로 연결했습니다.",
        ],
        en: [
          "The project began as a university assignment connecting a VRM character to LLM responses. Afterward, I added discovery and authoring, 2D/Live2D/VRM chat, accounts, credits, payments, and admin operations.",
          "The frontend is served as a CSR app on GitHub Pages, while authentication-sensitive and data-changing work goes through a separate Go API. The API, PostgreSQL, and Redis run on Oracle Cloud, with Supabase and a Hugging Face emotion model as external services.",
        ],
      },
      image: { src: "./assets/system-architecture.png", alt: "PeroChat system architecture" },
    },
    {
      id: "auth-evolution",
      order: 15,
      project: "perochat",
      category: { ko: "인증 구조", en: "Authentication Architecture" },
      tags: ["fullstack", "backend", "ai", "go", "svelte", "mobile", "operations"],
      title: {
        ko: "인증을 직접 구현한 뒤 Supabase Auth로 전환했습니다",
        en: "Moved to Supabase Auth after implementing the authentication flow directly",
      },
      lead: {
        ko: "Google OAuth에서 시작해 이메일 로그인과 자체 토큰 흐름을 만들었고, 플랫폼이 늘면서 인증 운영 비용을 확인한 뒤 관리형 인증으로 바꿨습니다.",
        en: "Started with Google OAuth, built email login and token handling, then adopted managed authentication after seeing the maintenance cost across platforms.",
      },
      flow: {
        ko: ["Google OAuth", "이메일 로그인\n쿠키 세션", "Redis access token\nrefresh token", "Supabase Auth\nGo JWT 검증"],
        en: ["Google OAuth", "Email login\nCookie session", "Redis access token\nRefresh token", "Supabase Auth\nGo JWT validation"],
      },
      paragraphs: {
        ko: [
          "초기에는 Google OAuth만 사용했습니다. 이메일 로그인도 필요해지면서 비밀번호 해시, 쿠키 세션, Redis access token과 refresh token 저장 구조를 직접 구현했습니다. 이 과정에서 로그인 화면보다 토큰 갱신, 쿠키 도메인과 사용자 동기화 코드가 더 빠르게 늘어나는 것을 경험했습니다.",
          "웹과 앱의 인증 흐름을 함께 유지하는 비용을 검토한 뒤, 인증은 PeroChat의 핵심 기능이 아니라고 판단했습니다. 현재는 Supabase Auth가 인증을 담당하고 Go API가 JWT 서명과 sub를 확인해 내부 사용자와 동기화합니다.",
          "직접 구현할 수 있다는 이유만으로 계속 자체 운영하지 않고, 직접 만들어 보며 확인한 비용을 근거로 관리형 서비스를 선택한 사례입니다.",
        ],
        en: [
          "The first version used only Google OAuth. Email login then led to password hashing, cookie sessions, Redis access tokens, and refresh-token storage. Token refresh, cookie domains, and account synchronization grew faster than the login UI itself.",
          "After reviewing the cost of keeping web and app flows aligned, I decided authentication was not PeroChat's core product. Supabase Auth now owns authentication while the Go API validates the JWT signature and subject before syncing the internal user.",
          "The decision was not based on being unable to build authentication, but on understanding its ongoing cost after implementing it directly.",
        ],
      },
      links: [
        { label: { ko: "로그인 구현", en: "Login implementation" }, href: "https://github.com/yuchanahn/personaxi-front/blob/c64d4aa286b379a8c68822fe925f12f5b3a392e3/src/routes/login/%2Bpage.svelte", value: "GitHub" },
      ],
    },
    {
      id: "svelte-go-split",
      order: 20,
      project: "perochat",
      category: { ko: "프런트엔드·API", en: "Frontend & API" },
      tags: ["fullstack", "backend", "game-server", "svelte", "go", "mobile", "devops"],
      title: {
        ko: "SvelteKit 클라이언트와 Go API를 따로 운영했습니다",
        en: "Operated the SvelteKit client and Go API separately",
      },
      lead: {
        ko: "초기 선택은 추천에서 시작했지만, 익숙한 문법과 현재 제품 구조를 고려해 SvelteKit을 유지했습니다.",
        en: "The initial choice came from a recommendation, but I kept SvelteKit because its syntax fit me and replacing it offered little product value.",
      },
      paragraphs: {
        ko: [
          "프로젝트를 빠르게 시작하기 위해 주변 개발자의 추천으로 Svelte를 선택했습니다. 사용하면서 React보다 문법이 익숙해졌고, 서비스가 커진 뒤에도 프레임워크 교체로 얻는 이점보다 변경 비용이 크다고 판단했습니다.",
          "로그인 이후의 캐릭터 탐색과 채팅이 핵심이라 전체 SSR의 이점은 크지 않았습니다. CSR로 구성해 GitHub Pages 호스팅 비용을 없애고 같은 클라이언트를 웹·PWA·Capacitor 앱에서 사용했습니다. 공개 페이지의 검색 노출이 더 중요해지면 그 경로만 사전 렌더링하거나 SSR을 적용할 수 있습니다.",
          "API 서버는 고루틴과 단순한 문법에 익숙하고 표준 라이브러리 기반 웹 서버를 구성하기 편한 Go로 개발했습니다. 프런트 배포와 API 배포가 서로 영향을 덜 받도록 분리했습니다.",
        ],
        en: [
          "I chose Svelte on a recommendation to start the project quickly. Its syntax became more familiar than React, and later the migration cost outweighed any clear product benefit.",
          "The core flow is authenticated character discovery and chat, so whole-site SSR had limited value. CSR removed frontend hosting cost on GitHub Pages and allowed one client for web, PWA, and Capacitor builds. Public discovery pages can be rendered separately if SEO becomes important.",
          "I built the API in Go because I was comfortable with goroutines, the language's small surface area, and its standard HTTP tooling. Frontend and API deployments remain independent.",
        ],
      },
      image: { src: "./assets/perochat-hub.png", alt: "PeroChat character hub" },
    },
    {
      id: "payment-consistency",
      order: 30,
      project: "perochat",
      category: { ko: "결제·데이터 정합성", en: "Payments & Consistency" },
      tags: ["backend", "fintech", "go", "postgresql", "payment", "operations"],
      title: {
        ko: "상품 정책을 다시 확인하고 포인트 지급과 환불 흐름을 고쳤습니다",
        en: "Reworked credit grants and refunds after reviewing the product policy",
      },
      lead: {
        ko: "100포인트 상품에 10포인트를 더 주면서 서버에서는 두 재화를 나눴지만, 실제 사용·환불 정책은 110포인트를 같은 결제 재화로 다루고 있었습니다.",
        en: "A 100-credit product displayed 10 extra credits, but the service actually consumed and refunded all 110 as the same paid currency.",
      },
      paragraphs: {
        ko: [
          "처음에는 화면의 '100+10' 표기를 그대로 따라 100포인트와 보너스 10포인트를 다른 재화처럼 저장했습니다. 그러나 PeroChat 안에서는 둘의 사용 방식과 유효기간이 같았고, 환불할 때도 해당 주문으로 지급된 110포인트 전체를 회수해야 했습니다. 보너스라는 이름만 보고 서버 정책을 나눈 것이 문제였습니다.",
          "결제 검증이 끝난 뒤 주문 상태, 지급 내역, 사용자 잔액과 거래 기록을 하나의 DB 트랜잭션에서 반영하도록 변경했습니다. 승인 요청이나 웹훅이 다시 들어오더라도 주문 ID의 처리 여부를 먼저 확인해 중복 지급하지 않습니다. 환불도 주문에 연결된 지급 기록을 기준으로 회수합니다.",
          "보너스를 별도 정책으로 운영해야 하는 상품이라면 분리할 수 있습니다. 이번 수정의 핵심은 특정 방식이 항상 정답이라는 것이 아니라, 화면 문구가 아니라 실제 사용·환불 정책에 맞춰 데이터 모델을 정리한 것입니다.",
        ],
        en: [
          "I initially stored the displayed '100+10' as two currencies. In practice both had the same usage and expiration rules, and a refund needed to reclaim all 110 credits granted by that order. The data model was based on wording rather than policy.",
          "After provider validation, order state, grant records, account balance, and the ledger are now updated in one database transaction. Repeated approvals or webhooks first check the order's processing state, preventing duplicate grants. Refunds follow the grants linked to the order.",
          "A separate bonus model can still be valid when the product policy requires it. The lesson was to model actual usage and refund rules rather than the label shown in the UI.",
        ],
      },
      bullets: {
        ko: ["PortOne·PayPal·Google Play 결제 경로 검증", "주문 ID 단위 중복 지급 방지", "지급·잔액·원장을 한 트랜잭션에서 반영"],
        en: ["PortOne, PayPal, and Google Play validation", "Order-scoped duplicate-grant prevention", "Atomic grant, balance, and ledger update"],
      },
      image: { src: "./assets/payment-flow.png", alt: "Atomic payment and credit flow" },
    },
    {
      id: "gemini-rate-limit",
      order: 40,
      project: "perochat",
      category: { ko: "외부 API 보호", en: "External API Protection" },
      tags: ["backend", "ai", "game-server", "go", "llm", "operations", "performance"],
      title: {
        ko: "Gemini 호출 전에 사이트가 사용할 수 있는 모델별 요청량을 먼저 확인했습니다",
        en: "Checked model-specific capacity before calling Gemini",
      },
      lead: {
        ko: "공유 API 키가 한도에 도달한 뒤 429를 받으면 이미 재화를 차감했거나 응답이 멈출 수 있어, 외부 호출 전에 Go API에서 요청을 거절합니다.",
        en: "A provider-side 429 can arrive after credits were deducted or a response began, so the Go API rejects over-capacity requests before the external call.",
      },
      paragraphs: {
        ko: [
          "일반 API 남용 방지와 LLM 공급자 한도 관리는 목적과 기준이 다릅니다. 일반 limiter는 IP별 반복 요청을 제한하고, Gemini limiter는 모든 사용자가 공유하는 API 키의 전체 사용량을 모델별로 계산합니다.",
          "Flash-Lite·Flash·Pro마다 별도의 token bucket을 두고, 모델이 결정된 뒤 재화 차감과 Gemini 호출 전에 검사합니다. 한도를 넘은 요청은 사이트 API가 바로 429로 종료하므로 공급자 오류 뒤에 환불 흐름을 시작하는 경우를 줄였습니다.",
        ],
        en: [
          "Abuse prevention and provider quota management use different keys and serve different purposes. The general limiter tracks repeated requests by IP, while the Gemini limiter tracks global usage of the shared API key for each model.",
          "Flash-Lite, Flash, and Pro each have a token bucket. The check runs after model selection but before credit deduction and the Gemini call, reducing cases that would otherwise require refund handling after a provider failure.",
        ],
      },
      image: { src: "./assets/rate-limit-flow.png", alt: "Two-stage API and Gemini rate limit flow" },
    },
    {
      id: "redis-k6",
      order: 50,
      project: "perochat",
      category: { ko: "캐시·부하 테스트", en: "Caching & Load Testing" },
      tags: ["backend", "game-server", "go", "postgresql", "redis", "testing", "performance", "operations"],
      title: {
        ko: "k6로 조회와 채팅 저장을 나눠 테스트하고 병목을 수정했습니다",
        en: "Separated read and chat-write scenarios in k6 and fixed the bottlenecks",
      },
      lead: {
        ko: "캐릭터가 늘면서 목록 조회가 느려졌고, 동시 채팅에서는 DB 연결이 빠르게 소진됐습니다.",
        en: "Character-list reads slowed as content grew, while concurrent chat writes exhausted database connections.",
      },
      paragraphs: {
        ko: [
          "캐릭터 목록은 자주 조회되지만 수정 빈도는 상대적으로 낮아 Redis에 조회용 데이터를 캐시했습니다. 캐릭터 수정 시 관련 키만 무효화하고, Redis를 사용할 수 없으면 PostgreSQL 조회로 계속 동작하도록 했습니다.",
          "조회와 실제 2D 채팅 흐름을 별도 k6 시나리오로 만들었습니다. 조회 테스트에서 처리량은 약 590 RPS에서 1,760 RPS로 증가했고 p99는 약 596ms에서 약 239ms로 줄었습니다.",
          "채팅 시나리오에서는 조회보다 저장 과정의 연결 사용이 더 큰 문제였습니다. 메시지·세션·재화 정산 기록을 함께 처리하도록 수정한 뒤 같은 조건에서 DB 연결 사용량은 79/80에서 10/80으로, 평균 응답 확인 시간은 약 400ms에서 약 2ms로 줄었습니다.",
        ],
        en: [
          "Character lists are read often and change less frequently, so I cached read models in Redis. Character edits invalidate related keys, and PostgreSQL remains the fallback when Redis is unavailable.",
          "I created separate k6 scenarios for list reads and a realistic 2D chat flow. Read throughput increased from about 590 to 1,760 RPS, while p99 fell from about 596ms to about 239ms.",
          "The chat scenario showed a larger issue in the write path. Grouping message, session, and credit-settlement work reduced database connection usage from 79/80 to 10/80 and average response-check time from about 400ms to about 2ms under the same test conditions.",
        ],
      },
      metrics: [
        { label: "RPS", before: "590", after: "1,760" },
        { label: "DB connections", before: "79/80", after: "10/80" },
        { label: "Response check", before: "~400ms", after: "~2ms" },
      ],
      image: { src: "./assets/load-test-comparison.png", alt: "k6 result comparison" },
    },
    {
      id: "llm-gateway",
      order: 60,
      project: "perochat",
      category: { ko: "LLM 통합", en: "LLM Integration" },
      tags: ["backend", "ai", "game-server", "go", "llm", "realtime", "operations"],
      title: {
        ko: "LLM 공급자별 차이를 채팅 흐름 바깥으로 분리했습니다",
        en: "Isolated provider-specific LLM differences from the chat flow",
      },
      lead: {
        ko: "공급자마다 요청 형식과 스트리밍 방식, 오류 응답이 달라도 채팅 로직은 같은 인터페이스를 사용합니다.",
        en: "The chat flow uses one interface despite provider differences in request shape, streaming, and errors.",
      },
      paragraphs: {
        ko: [
          "캐릭터 설정, 최근 대화, 메모리, 로어북과 사용자 입력을 조합한 뒤 공급자 어댑터가 각 API 형식으로 변환합니다. 응답은 공통 스트리밍 이벤트로 바꿔 프런트엔드가 공급자 차이를 알 필요가 없게 했습니다.",
          "Gemini의 한도 소진이나 공급자 장애가 서비스 전체 중단으로 이어지지 않도록 다른 모델로 전환할 수 있는 fallback 경로를 두었습니다. 무조건 재시도하지 않고 재화 차감 여부와 응답 시작 여부를 기준으로 오류를 처리합니다.",
        ],
        en: [
          "Character settings, recent dialogue, memory, lorebook matches, and user input are assembled before provider adapters translate them into each API shape. Responses become shared streaming events, hiding provider differences from the frontend.",
          "Fallback routes allow a different model when Gemini capacity or a provider fails. Error handling considers whether credits were deducted and whether streaming already began instead of blindly retrying.",
        ],
      },
      image: { src: "./assets/perochat-chat.png", alt: "PeroChat character chat screen" },
    },
    {
      id: "realtime-character",
      order: 70,
      project: "perochat",
      category: { ko: "실시간 채팅·캐릭터 표현", en: "Real-time Chat & Character Runtime" },
      tags: ["fullstack", "backend", "ai", "game-server", "go", "svelte", "llm", "realtime", "network", "mobile"],
      title: {
        ko: "대화, 감정과 음성을 서로 다른 실시간 흐름으로 연결했습니다",
        en: "Connected dialogue, emotion, and voice as separate real-time flows",
      },
      lead: {
        ko: "텍스트 응답은 SSE로, 감정과 TTS는 별도 WebSocket 흐름으로 다뤄 실패 지점을 나눴습니다.",
        en: "Text responses use SSE, while emotion and TTS use separate WebSocket flows so failures remain isolated.",
      },
      paragraphs: {
        ko: [
          "2D·Live2D·VRM 채팅 라우트는 같은 대화 생성 흐름을 공유하지만 표현 방식과 비용 정책은 분리했습니다. LLM 텍스트가 도착하면 액션 태그를 정리하고 감정 분석과 음성 생성을 이어 붙입니다.",
          "초기 과제에서는 LLM 응답에 감정 태그를 포함시켰습니다. 현재는 기본 표정 외에 GoEmotions의 감정 분류를 캐릭터 성별과 프리셋에 대응시키고, VRM 얼굴 파라미터를 직접 확인해 수치를 조절했습니다.",
          "Live2D는 라이선스 범위를 확인하기 위해 본사에 문의하고 약관을 검토한 뒤 추가했습니다. 상업적 사용이 가능한 모델을 사이트에서 표시하는 방식이 파일 재배포는 아니라는 답변을 받았고, 모델 업로드 파일에는 별도 암호화도 적용했습니다.",
        ],
        en: [
          "2D, Live2D, and VRM routes share the generation pipeline but keep presentation and pricing policies separate. LLM text is cleaned of action tags before emotion analysis and speech generation continue.",
          "The university prototype embedded emotion tags in LLM responses. The current service maps GoEmotions output to character presets and tuned VRM facial parameters after inspecting the runtime values directly.",
          "Before adding Live2D, I reviewed licensing terms and contacted the company. I received confirmation that displaying commercially usable models was not file redistribution, and I also encrypted uploaded model files.",
        ],
      },
      image: { src: "./assets/perochat-mobile-live2d.png", alt: "PeroChat Live2D mobile chat" },
    },
    {
      id: "admin-console",
      order: 80,
      project: "perochat",
      category: { ko: "서비스 운영 도구", en: "Operations Tooling" },
      tags: ["fullstack", "backend", "ai", "go", "postgresql", "admin", "operations", "llm"],
      title: {
        ko: "서비스 프롬프트를 코드 배포 없이 관리하도록 바꿨습니다",
        en: "Made service prompts manageable without a code deployment",
      },
      lead: {
        ko: "파일과 include로 시작한 프롬프트 구조를 역할별 PromptKit 레이어와 관리자 미리보기로 확장했습니다.",
        en: "Evolved file-and-include prompts into role-based PromptKit layers with an admin preview.",
      },
      flow: {
        ko: ["긴 프롬프트", "파일·include\n변수 치환", "PromptKit\n레이어 조립", "관리자 미리보기\nDB 저장"],
        en: ["Long prompt", "Files and includes\nVariable replacement", "PromptKit\nLayer assembly", "Admin preview\nDatabase storage"],
      },
      paragraphs: {
        ko: [
          "SillyTavern의 JSON 기반 구조를 분석해 필요한 개념을 확인한 뒤, 초기에는 파일·재귀 include·변수 치환으로 공통 프롬프트를 나눴습니다. 2D·Live2D·VRM, 로어북과 메모리 처리가 늘면서 단순 파일 분리만으로는 조립 순서와 적용 범위를 확인하기 어려워졌습니다.",
          "현재는 root, base, child, persona와 component 레이어를 실행 모드에 맞춰 조립합니다. 캐릭터·채팅 모드·테스트 메시지를 넣어 최종 결과와 포함된 레이어를 미리 보고 Runtime Check를 통과한 PromptKit만 적용합니다.",
          "관리 대상은 사용자가 캐릭터에 작성한 개인 프롬프트가 아니라 PeroChat이 LLM 호출 때 자동으로 붙이는 시스템 프롬프트입니다. 같은 관리자 화면에서 사용자 역할·플랜·상태·재화도 확인하고 지급 사유와 처리 기록을 남깁니다.",
        ],
        en: [
          "After studying SillyTavern's JSON prompt structure, the first version separated shared prompts through files, recursive includes, and variable replacement. As 2D, Live2D, VRM, lorebook, and memory flows grew, files alone no longer made assembly order and scope easy to inspect.",
          "The current system assembles root, base, child, persona, and component layers for each runtime mode. A character, chat mode, and test message preview the final result, and only PromptKits that pass Runtime Check can become active.",
          "The console manages PeroChat's system prompts, not private prompts written by users. The same operations tool also inspects roles, plans, account state, and credits while recording grant reasons.",
        ],
      },
      images: [
        { src: "./assets/perochat-admin-prompt.png", alt: "PromptKit admin screen" },
        { src: "./assets/perochat-admin-users.png", alt: "User operations admin screen" },
      ],
    },
    {
      id: "mobile-keyboard",
      order: 90,
      project: "perochat",
      category: { ko: "모바일 브라우저", en: "Mobile Browser" },
      tags: ["fullstack", "ai", "game-client", "svelte", "mobile", "realtime", "performance"],
      title: {
        ko: "iPhone Safari에서 전체 화면 대신 입력창만 움직이게 했습니다",
        en: "Moved only the input bar instead of the full scene on iPhone Safari",
      },
      lead: {
        ko: "키보드가 열릴 때 캐릭터 canvas 전체가 밀리는 문제를 실제 기기에서 Visual Viewport 변화로 확인했습니다.",
        en: "On-device testing showed the virtual keyboard pushing the entire character canvas as the Visual Viewport changed.",
      },
      paragraphs: {
        ko: [
          "VRM·Live2D 채팅은 전체 화면 canvas 위에 입력창이 고정됩니다. iPhone Safari와 PWA에서는 키보드가 열릴 때 100dvh와 브라우저 스크롤이 함께 반응해 화면이 흔들렸습니다.",
          "innerHeight, visualViewport.height와 offsetTop으로 키보드가 차지한 영역을 계산하고, 전체 canvas가 아니라 입력 wrapper만 translateY로 이동했습니다. 키보드가 닫힌 뒤에도 남은 위치 차이를 짧게 확인해 원래 자리로 복귀시켰습니다.",
        ],
        en: [
          "VRM and Live2D chat place an input over a full-screen canvas. In iPhone Safari and installed PWAs, the keyboard changed both 100dvh and browser scroll, causing the scene to jump.",
          "I calculated the keyboard region from innerHeight, visualViewport.height, and offsetTop, then translated only the input wrapper. A short post-close check returns it to the original position.",
        ],
      },
      image: { src: "./assets/perochat-mobile-live2d.png", alt: "Mobile Live2D chat screen" },
    },
    {
      id: "thumbnail-transform",
      order: 100,
      project: "perochat",
      category: { ko: "프런트엔드 성능", en: "Frontend Performance" },
      tags: ["fullstack", "svelte", "performance", "mobile", "operations"],
      title: {
        ko: "작은 썸네일에 원본 이미지가 내려오던 문제를 Network 도구에서 찾았습니다",
        en: "Found full-resolution images being downloaded for small thumbnails",
      },
      lead: {
        ko: "브라우저 로딩이 느린 원인을 확인한 뒤 Supabase Image Transformation으로 화면 크기에 맞는 이미지를 요청했습니다.",
        en: "After tracing slow loading in browser tools, I requested display-sized assets through Supabase Image Transformation.",
      },
      paragraphs: {
        ko: [
          "캐릭터 허브가 늦게 표시되어 Network 패널을 확인했습니다. 카드에 보이는 이미지는 작았지만 요청 URL은 업로드된 원본을 그대로 가리키고 있었습니다.",
          "공개 이미지 URL을 변환 경로로 바꾸는 공통 함수를 만들었습니다. 캐릭터 카드에는 width 480·quality 72, 채팅 목록과 프로필 아이콘에는 96×96처럼 용도별 크기를 적용하고, 변환 실패나 상세 보기에서는 원본 URL을 사용할 수 있게 했습니다.",
          "전후 전송량을 같은 조건에서 다시 측정하기 전까지 과장된 개선 수치는 사용하지 않습니다. 이 사례는 기본적인 최적화이지만, 실제 브라우저 요청을 보고 원인을 찾아 수정한 경험입니다.",
        ],
        en: [
          "The character hub rendered slowly, so I inspected the Network panel. Although cards displayed small images, their URLs still pointed at the uploaded originals.",
          "I added a shared URL transformer. Character cards request width 480 at quality 72, while chat lists and avatars request 96×96 assets. Detail views and failed transformations can still use the original URL.",
          "I avoid claiming a numeric improvement until transfer size is remeasured under the same conditions. The optimization is basic, but it came from tracing a real browser request rather than guessing.",
        ],
      },
      image: { src: "./assets/thumbnail-transform.png", alt: "Thumbnail image transformation flow" },
    },
    {
      id: "localization",
      order: 110,
      project: "perochat",
      category: { ko: "다국어 UI", en: "Localization" },
      tags: ["fullstack", "ai", "svelte", "localization", "operations"],
      title: {
        ko: "한국어·영어·일본어를 같은 키 구조로 관리했습니다",
        en: "Managed Korean, English, and Japanese through one key structure",
      },
      lead: {
        ko: "페이지 안의 문장을 직접 분기하지 않고 언어 키와 사전을 분리해 화면과 오류 메시지를 교체합니다.",
        en: "UI and error messages switch through language keys and dictionaries instead of page-level string branches.",
      },
      paragraphs: {
        ko: [
          "기능이 늘면서 페이지마다 조건문으로 문자열을 바꾸는 방식은 누락을 만들기 쉬웠습니다. 공통 키를 기준으로 한국어·영어·일본어 사전을 나누고, 언어 선택을 저장해 페이지 이동 뒤에도 유지했습니다.",
          "초기 번역과 반복적인 누락 확인에는 AI 에이전트의 도움을 많이 받았습니다. 그대로 배포하지 않고 실제 UI 길이, 서비스 용어와 변수 치환을 확인해 수정했습니다. 번역을 직접 모두 작성했다고 표현하지 않습니다.",
        ],
        en: [
          "As features grew, page-level conditional strings made omissions likely. Shared keys separate Korean, English, and Japanese dictionaries, while the selected language persists across navigation.",
          "AI agents helped substantially with first-pass translation and repeated missing-key checks. I reviewed UI length, product terminology, and variable interpolation rather than shipping generated text unchanged.",
        ],
      },
    },
    {
      id: "deployment",
      order: 120,
      project: "perochat",
      category: { ko: "배포·운영", en: "Deployment & Operations" },
      tags: ["backend", "fullstack", "game-server", "go", "postgresql", "redis", "devops", "operations"],
      title: {
        ko: "Oracle Cloud와 Coolify로 혼자 운영 가능한 배포 환경을 만들었습니다",
        en: "Built a deployment environment manageable by one developer with Oracle Cloud and Coolify",
      },
      lead: {
        ko: "비용을 낮추면서 배포·HTTPS·환경 변수·로그와 컨테이너 교체를 한곳에서 관리했습니다.",
        en: "Kept cost low while managing deployments, HTTPS, environment variables, logs, and container replacement in one place.",
      },
      paragraphs: {
        ko: [
          "서버 비용 때문에 Oracle Cloud를 선택하고 같은 인스턴스 내부에 Go API, PostgreSQL과 Redis를 운영했습니다. 감정 분석 모델은 Hugging Face Space의 CPU 환경으로 분리했습니다.",
          "배포 자동화와 HTTPS, 환경 변수, 로그 확인을 직접 다시 만들지 않기 위해 Coolify를 사용했습니다. 헬스 체크와 rolling update를 활성화해 새 컨테이너가 준비된 뒤 기존 컨테이너를 교체하도록 구성했습니다.",
          "프런트엔드는 GitHub Pages에 분리해 API 재배포와 무관하게 정적 파일을 제공하고 호스팅 비용을 없앴습니다. 규모가 커지면 DB와 Redis의 장애 범위가 같은 인스턴스에 묶여 있다는 점부터 분리해야 합니다.",
        ],
        en: [
          "I chose Oracle Cloud for cost and run the Go API, PostgreSQL, and Redis on one instance. The CPU emotion-analysis model is separated into a Hugging Face Space.",
          "Coolify avoids rebuilding deployment automation, HTTPS, environment-variable management, and log access. Health checks and rolling updates replace the old container only after the new one is ready.",
          "The frontend remains on GitHub Pages, independent from API deployments and without frontend hosting cost. At larger scale, separating PostgreSQL and Redis from the same failure domain would be the first infrastructure change.",
        ],
      },
    },
    {
      id: "quickbite",
      order: 200,
      project: "quickbite",
      category: { ko: "요구사항·실사용", en: "Requirements & Production Use" },
      tags: ["fullstack", "backend", "fintech", "operations", "admin", "mobile"],
      title: {
        ko: "디저트 판매자의 실제 요구에 맞춰 주문 사이트를 계속 수정했습니다",
        en: "Kept adapting an ordering site to a dessert seller's real needs",
      },
      lead: {
        ko: "메신저 주문의 반복 작업을 줄이기 위해 시작했고, 수개월 동안 실제 주문을 받는 데 사용했습니다.",
        en: "Started to reduce repetitive messenger-based ordering and was used for real orders over several months.",
      },
      paragraphs: {
        ko: [
          "처음에는 메뉴 선택과 연락처, 수령 시간만 받는 간단한 화면이었습니다. 판매가 이어지면서 옵션, 재고, 판매 일정, 계좌 안내와 주문 확인이 필요해졌고 실제 판매자의 의견을 받아 UI와 관리 기능을 여러 번 바꿨습니다.",
          "주문은 SQLite 트랜잭션과 mutex로 처리하고 Google Sheets에 기록했으며 Discord로 새 주문 알림을 보냈습니다. 자체 도메인과 Ubuntu 서버에서 운영했습니다.",
          "이 규모에서는 PostgreSQL이나 별도 메시지 큐를 추가하는 것보다 판매자가 휴대전화에서 빠르게 확인하고 수정할 수 있는 흐름이 중요했습니다. 필요한 기능만 유지해 운영 부담을 줄였습니다.",
        ],
        en: [
          "The first version only collected menu choices, contact details, and pickup time. Real sales added options, inventory, sales schedules, bank-account guidance, and order confirmation, and I revised the UI and admin flow repeatedly from seller feedback.",
          "Orders use SQLite transactions and a mutex, are logged to Google Sheets, and trigger Discord notifications. The site ran on its own domain and Ubuntu server.",
          "At this scale, a fast mobile workflow for the seller mattered more than adding PostgreSQL or a message queue. I kept the architecture small enough to operate reliably.",
        ],
      },
      images: [
        { src: "./assets/quickbite-order.png", alt: "QuickBite order form" },
        { src: "./assets/quickbite-success.png", alt: "QuickBite successful order screen" },
      ],
    },
    {
      id: "nirvana-overview",
      order: 300,
      project: "nirvana",
      category: { ko: "프로젝트 개요", en: "Project Overview" },
      tags: ["game-client", "game-server", "cpp", "unreal", "network", "realtime", "collaboration"],
      title: {
        ko: "22명 팀에서 2인 협동 액션 게임을 만들었습니다",
        en: "Built a two-player co-op action game in a 22-person team",
      },
      lead: {
        ko: "Nirvana는 Unreal Engine 5.3으로 제작한 액션 로그라이크 졸업 프로젝트이며, 프로그래머 4명이 약 8개월 동안 함께 개발했습니다.",
        en: "Nirvana is an Unreal Engine 5.3 action-roguelike capstone built over roughly eight months by a four-programmer team within a 22-person production.",
      },
      paragraphs: {
        ko: [
          "제가 담당한 범위는 온라인 세션과 로비, 서버·클라이언트의 게임 진행 처리, 스테이지 로딩, 인벤토리·미션·부활·게임오버 UI 연결입니다. 플레이어 전투와 몬스터 AI는 다른 프로그래머가 주도했고, 저는 이 기능들이 2인 네트워크 흐름 안에서 함께 작동하도록 서버 처리와 UI 접점을 연결했습니다.",
          "작업 후반에는 각 파트에서 만든 기능을 2인 플레이 흐름에 합치면서 세션 접속 실패, 두 명이 접속했을 때 발생하는 크래시, 몬스터 체력과 쉴드 동기화, 로딩 완료 시점, 인벤토리 조작 충돌 같은 문제를 반복해서 수정했습니다. 기능 하나를 만드는 것보다 서로 다른 시스템이 한 판의 시작과 종료까지 끊기지 않게 연결하는 일이 더 많았습니다.",
          "이 프로젝트는 현재의 코드 기준으로 보면 책임 분리가 부족한 부분도 많습니다. 다만 여러 명이 동시에 만드는 Unreal 프로젝트에서 네트워크 권한, 비동기 콜백, UI 상태와 레벨 수명을 함께 다뤄 본 첫 장기 팀 개발 경험이었습니다.",
        ],
        en: [
          "My scope covered online sessions and the lobby, server/client gameplay flow, stage loading, and the UI paths for inventory, missions, revival, and game over. Other programmers led player combat and monster AI; I connected those systems to the shared two-player server flow and UI.",
          "Late in development, much of my work was integrating features from different programmers into a complete two-player run. I fixed session-join failures, two-player crashes, monster health and shield synchronization, loading-completion timing, and conflicting inventory interactions.",
          "The project still has responsibility and coupling issues by my current standards. It was nevertheless my first long team project that required handling network authority, asynchronous callbacks, UI state, and level lifetime together in Unreal.",
        ],
      },
      image: { src: "./assets/nirvana-gameplay.png", alt: "Nirvana two-player combat gameplay" },
    },
    {
      id: "nirvana-session",
      order: 305,
      project: "nirvana",
      category: { ko: "온라인 세션", en: "Online Sessions" },
      tags: ["game-client", "game-server", "cpp", "unreal", "network", "realtime"],
      title: {
        ko: "방 생성·검색·합류 흐름을 Online Subsystem으로 연결했습니다",
        en: "Connected room creation, discovery, and joining through Online Subsystem",
      },
      lead: {
        ko: "메인 메뉴에서 방을 만들거나 검색한 뒤, 두 플레이어가 같은 로비에 들어오기까지 필요한 비동기 콜백과 화면 전환을 구현했습니다.",
        en: "Implemented the asynchronous callbacks and travel flow required to create or find a room and bring both players into the same lobby.",
      },
      paragraphs: {
        ko: [
          "`UOSS`에서 세션 생성·검색·합류·삭제와 로그인, 초대 수락, 네트워크 오류 delegate를 한곳에 연결했습니다. 게임 전용 `UNrvOss`에서는 `Init → Searching → Found → Joining → Joined` 상태를 두고 메인 메뉴가 현재 진행 상황을 표시하고 중복 요청을 막도록 했습니다.",
          "호스트는 `CreateSession` 완료 후 로비 맵을 listen server로 열고, 게스트는 검색 결과를 검증한 뒤 `JoinSession`을 호출했습니다. 합류 callback에서 `GetResolvedConnectString`으로 접속 주소를 받은 다음 `ClientTravel`을 실행하도록 순서를 고쳤습니다. 검색 결과가 없을 때는 실패 상태에서 다시 검색할 수 있게 메뉴 조건도 수정했습니다.",
          "프로젝트 설정은 EOSPlus를 기본 서비스, Steam을 native platform으로 두고 Steam 계정 ID를 외부 자격 정보로 넘기도록 구성했습니다. 당시 목표는 상용 크로스플랫폼 출시가 아니라 Steam 로그인 정보를 EOSPlus 세션 흐름에 연결해 보는 것이었고, 구현도 해당 범위까지 진행했습니다.",
        ],
        en: [
          "`UOSS` centralizes delegates for create, find, join, destroy, login, invite acceptance, and network failures. The game-specific `UNrvOss` tracks an `Init → Searching → Found → Joining → Joined` state so the main menu can show progress and avoid duplicate requests.",
          "The host opens the lobby as a listen server after `CreateSession` completes. A guest validates the search result, calls `JoinSession`, resolves the connect string inside the join callback, and then performs `ClientTravel`. I also made a failed search return to a state from which the user could search again.",
          "The project configured EOSPlus as the default service and Steam as the native platform, passing the Steam account ID into the external-credential path. The implementation explored connecting Steam identity to the EOSPlus session flow; it was not a commercial cross-platform release.",
        ],
      },
      image: { src: "./assets/nirvana-session-flow.svg", alt: "Nirvana online session creation and join flow" },
      code: {
        language: "cpp",
        caption: { ko: "세션 합류 후 실제 접속까지의 순서", en: "Join callback to client travel" },
        source: "YC/OSS/NrvOss.cpp",
        text: `void UNrvOss::OnJoinSession(FName Name, EOnJoinSessionCompleteResult::Type) {
  SessionName = Name.ToString();
  SessionState = EOnlineSessionStateEx::Joined;

  auto Address = GetAddr();
  if (Address.IsErr()) return;
  GInst->GetWorld()->GetFirstPlayerController()
       ->ClientTravel(Address.Unwrap(), TRAVEL_Absolute);
}`,
      },
    },
    {
      id: "nirvana-gameplay-network",
      order: 310,
      project: "nirvana",
      category: { ko: "게임 진행 동기화", en: "Gameplay Synchronization" },
      tags: ["game-client", "game-server", "cpp", "unreal", "network", "realtime"],
      title: {
        ko: "서버가 게임 진행을 판단하고 두 클라이언트에 같은 상태를 전달했습니다",
        en: "Kept both clients aligned around server-owned gameplay decisions",
      },
      lead: {
        ko: "팀에서 만든 공통 패킷 계층을 사용해 인벤토리, 체력·쉴드, 미션, 부활과 게임 종료에 필요한 패킷과 처리 코드를 확장했습니다.",
        en: "Extended the team's shared packet layer with the messages and handlers required for inventory, health and shields, missions, revival, and game over.",
      },
      paragraphs: {
        ko: [
          "패킷을 바이트로 읽고 쓰는 직렬화 기반은 팀원이 먼저 만들었습니다. 저는 패킷 ID와 `FPac_*` USTRUCT 타입을 연결하는 매핑·바인딩 코드, 기능별 패킷 정의, 그리고 `Server.cpp`와 `Client.cpp`에서 인벤토리와 전투 보조 상태, 미션, 부활처럼 실제 게임 진행이 바뀌는 처리 코드를 작성했습니다.",
          "클라이언트의 입력과 UI 조작은 `ANetPC`의 reliable RPC를 거쳐 서버 dispatch queue로 들어갑니다. 서버에서는 아이템을 누가 드래그 중인지 확인하고, 아이템 선택 결과와 엔티티의 체력·쉴드, 남은 몬스터 수, 영혼 게이지와 부활 여부를 판단한 뒤 필요한 클라이언트 또는 전체에 결과 패킷을 보냅니다. 클라이언트는 수신한 결과로 로컬 world 상태와 HUD를 갱신합니다.",
          "이 방식으로 Unreal RPC가 여러 액터에 흩어지는 것을 일부 줄이고, 게임 진행 처리를 서버 코드에서 이어서 확인할 수 있었습니다. 다만 기능이 늘면서 `FServer`의 정적 상태와 tick 함수에 처리가 계속 붙었고, 나중에는 한 기능을 수정할 때 확인해야 할 범위가 커졌습니다. 서버 기능을 인벤토리, 스테이지, 플레이어 상태처럼 나눠 관리했으면 흐름을 더 쉽게 추적할 수 있었을 것이라는 아쉬움이 남았습니다.",
        ],
        en: [
          "A teammate first built the byte-level serialization foundation. I wrote the mapping and binding code that connects packet IDs to `FPac_*` USTRUCT types, added feature-specific packets, and implemented gameplay handling in `Server.cpp` and `Client.cpp` for inventory, supporting combat state, missions, revival, and other run-state changes.",
          "Client input and UI actions travel through reliable RPCs on `ANetPC` into the server dispatch queue. The server checks item-drag ownership and decides item rewards, entity health and shields, remaining monsters, soul gauge, revival, and game-over state before sending the result to one or both clients. Each client applies the response to its local world state and HUD.",
          "This reduced some RPC logic scattered across actors and kept the gameplay flow visible in the server code. As features accumulated, however, static `FServer` state and the tick function grew, increasing the amount of code that had to be checked for each change. Separating inventory, stage, and player-state handling would have made the flow easier to follow.",
        ],
      },
      image: { src: "./assets/nirvana-packet-flow.svg", alt: "Nirvana gameplay packet and server state flow" },
    },
    {
      id: "nirvana-loading-ui",
      order: 315,
      project: "nirvana",
      category: { ko: "스테이지·UI", en: "Stages & UI" },
      tags: ["game-client", "game-server", "cpp", "unreal", "network", "collaboration"],
      title: {
        ko: "두 플레이어의 로딩 완료를 확인한 뒤 다음 스테이지를 시작했습니다",
        en: "Started the next stage only after both players finished loading",
      },
      lead: {
        ko: "한쪽 클라이언트만 먼저 게임을 시작하지 않도록 로딩 화면, 진행률, 서버 확인과 입력 잠금을 하나의 전환 흐름으로 연결했습니다.",
        en: "Connected loading UI, progress, server readiness checks, and input locking so one client could not start the stage ahead of the other.",
      },
      paragraphs: {
        ko: [
          "서버가 다음 레벨을 정하면 `FPac_NextLevelLoadStart`를 전송하고 두 클라이언트의 입력을 잠급니다. 클라이언트는 로딩 위젯을 생성하고 맵과 진행률이 모두 준비됐을 때 `FPac_GameLoadingEnded`를 서버로 보냅니다. 서버는 각 `PlayerController`의 `StageLoaded` 값을 세어 현재 플레이어 수와 같아진 뒤에만 완료 패킷을 방송하고 입력을 다시 엽니다.",
          "스테이지별 몬스터 구성은 CSV와 DataTable에서 읽어 spawn queue를 만들었고, 서버가 남은 몬스터 수를 기준으로 미션과 다음 battle page를 진행하도록 연결했습니다. 레벨업 아이템 선택, 공동 인벤토리 조작, 맵 화면, 사망한 플레이어의 영혼 게이지와 부활, 두 명 모두 사망했을 때의 게임오버 화면도 같은 서버·클라이언트 흐름에서 처리했습니다.",
          "UI는 단순히 화면을 배치하는 작업으로 끝나지 않았습니다. 로딩 중 스킬 입력이 되는 문제, 한 명이 인벤토리를 닫았을 때 다른 플레이어의 상태와 어긋나는 문제, 재실행 시 남은 상태, 사망 상태에서 UI를 열고 닫을 때의 예외처럼 네트워크와 화면 수명이 맞물린 버그를 실제 2인 플레이로 확인하며 수정했습니다.",
        ],
        en: [
          "When the server selects the next level, it sends `FPac_NextLevelLoadStart` and locks input on both clients. A client creates its loading widget and sends `FPac_GameLoadingEnded` only after the map and progress are ready. The server counts each controller's `StageLoaded` flag and broadcasts completion only when that count matches the active player count.",
          "Stage monster composition is loaded from CSV and DataTable data into spawn queues, while the server advances missions and battle pages from the remaining-monster count. Level-up rewards, shared inventory interactions, map UI, soul-gauge revival, and game over are handled through the same server/client flow.",
          "The UI work was not just screen layout. Two-player testing exposed input during loading, inventory-close disagreement, stale state after restarting a run, and dead-player UI edge cases that required changes across both network state and widget lifetime.",
        ],
      },
      image: { src: "./assets/nirvana-loading-flow.svg", alt: "Nirvana synchronized level loading flow" },
      code: {
        language: "cpp",
        caption: { ko: "두 클라이언트의 로딩 완료를 기다리는 부분", en: "Waiting for both clients to finish loading" },
        source: "YC/Core/Server/Server.cpp",
        text: `CP->StageLoaded = true;
int ReadyCount = 0;

for (const auto PC : FServer::PCs)
  if (IsValid(PC)) ReadyCount += PC->StageLoaded;

if (ReadyCount >= GetPcNum(GetWorld())) {
  Server_SendAll(FPac_GameLoadingEnded{});
  // remove input lock for every connected player
}`,
      },
    },
    {
      id: "nirvana-animation",
      order: 320,
      project: "nirvana",
      category: { ko: "애니메이션 동기화", en: "Animation Synchronization" },
      tags: ["game-client", "cpp", "unreal", "network", "realtime", "collaboration"],
      title: {
        ko: "멀티플레이에서 몽타주 재생 상태가 어긋나는 문제를 수정했습니다",
        en: "Fixed multiplayer montage state drifting out of sync",
      },
      lead: {
        ko: "공동으로 만든 `NetAnim` 컴포넌트에서 몽타주와 섹션 전환, 재생·정지 상태를 두 클라이언트에 전달하는 부분을 수정했습니다.",
        en: "Revised the shared `NetAnim` component that propagates montage, section, play, pause, and resume state to both clients.",
      },
      paragraphs: {
        ko: [
          "서버의 애니메이션 인스턴스에서 현재 몽타주와 section을 확인하고 값이 달라질 때 multicast RPC를 보내는 구조였습니다. 저는 section jump와 resume 호출, 몽타주 play rate 전달을 수정했고, 현재 몽타주를 다시 전송하는 replay 경로를 추가했습니다.",
          "클라이언트와 서버의 시간 차이는 `FPac_TimeSync`로 계산한 offset을 사용했습니다. 일시정지 후 재개할 때는 공유 시간과 재개 시작 시점의 차이로 재생 위치를 계산해 `Montage_SetPosition`을 호출합니다. section 변경에서는 해당 section의 시작 위치로 이동하도록 처리돼 있습니다.",
          "이 컴포넌트는 액터 좌표를 보정하거나 root-motion 위치를 다시 계산하지 않습니다. 제가 수정한 범위는 몽타주 재생 상태가 서로 달라지는 조건을 찾고, 섹션 이동과 일시정지·재개·재전송 흐름을 보완한 부분입니다.",
        ],
        en: [
          "The server observes the active montage and section and sends a multicast RPC when either changes. I revised section-jump and resume calls, passed montage play rate through the RPC, and added a replay path that resends the current montage.",
          "Client/server time difference is derived from an offset calculated with `FPac_TimeSync`. On resume, the client calculates playback time from the shared clock and calls `Montage_SetPosition`; a section change moves to that section's start.",
          "This component does not correct actor coordinates or reconstruct root-motion position. My changes focused on conditions where montage state diverged and on section changes, pause/resume, and replay paths.",
        ],
      },
      code: {
        language: "cpp",
        caption: { ko: "몽타주 section 변경 감지와 전달", en: "Detecting and propagating a montage section change" },
        source: "YC/NetAnim.cpp",
        text: `if (CurrentMontage == NET_Montage &&
    CurrentSectionIdx != NET_SectionIdx) {
  CurrentStartTime = GetTime();
  NET_SectionIdx = CurrentSectionIdx;
  NMC_JumpSectionMontage(
    CurrentMontage, CurrentSectionIdx, CurrentStartTime);
}`,
      },
    },
    {
      id: "nirvana-cpp",
      order: 325,
      project: "nirvana",
      category: { ko: "Unreal C++", en: "Unreal C++" },
      tags: ["game-client", "game-server", "cpp", "unreal", "network"],
      title: {
        ko: "Unreal 객체 시스템과 표준 C++ 기능을 함께 사용했습니다",
        en: "Combined Unreal's object system with standard C++ features",
      },
      lead: {
        ko: "UObject와 RPC 규칙 안에서 코드를 작성하면서 `std::variant`, ranges, concept, generic lambda와 오류 반환형을 게임 진행 코드에 적용했습니다.",
        en: "Worked within UObject and RPC constraints while applying `std::variant`, ranges, concepts, generic lambdas, and explicit error-return types to gameplay code.",
      },
      paragraphs: {
        ko: [
          "네트워크에 전달할 데이터는 `USTRUCT`와 `UPROPERTY`로 정의해 Unreal 직렬화를 사용하고, `UFUNCTION(Server/Client/NetMulticast, Reliable)`로 전송 경계를 만들었습니다. 액터와 위젯 수명은 `IsValid`, `TObjectPtr`, `TArray`, `TMap` 같은 Unreal 타입과 규칙을 따라 처리했습니다.",
          "서버·클라이언트 처리 코드에서는 packet channel을 `std::variant`로 묶고 타입별 lambda를 실행했습니다. `std::views::filter`로 유효한 entity를 순회하고, packet concept과 generic lambda로 전송 함수를 공통화했으며, 포인터나 조회 실패는 `ErrorOr`로 호출자에게 넘기는 방식을 사용했습니다. 공통 유틸리티의 일부는 팀 코드이고, 저는 이를 기능 코드에서 사용하고 필요한 packet과 handler를 확장했습니다.",
          "당시에는 pipe 형태의 함수 조합과 정적 상태를 많이 사용해 코드를 짧게 만드는 데 관심이 있었습니다. 지금 보면 팀원이 처음 읽기 어렵고 디버깅 경로가 길어지는 단점도 분명합니다. 이 경험 이후에는 문법적인 압축보다 책임과 데이터 흐름이 바로 보이는 구조를 우선하게 됐습니다.",
        ],
        en: [
          "Network payloads use `USTRUCT` and `UPROPERTY` so Unreal serialization can handle them, while `UFUNCTION(Server/Client/NetMulticast, Reliable)` defines transport boundaries. Actor and widget lifetime follows Unreal types and checks such as `IsValid`, `TObjectPtr`, `TArray`, and `TMap`.",
          "Server and client handlers group packet channels with `std::variant` and invoke type-specific lambdas. `std::views::filter` selects valid entities, packet concepts and generic lambdas share send paths, and `ErrorOr` carries pointer or lookup failures to the caller. Some utilities are shared team code; my work used them in gameplay and expanded the packet and handler set.",
          "At the time I favored pipe-style composition and static state to make code concise. In retrospect, this also made the flow harder for teammates to read and debug. The project shifted my priority from syntactic compression toward explicit responsibility and visible data flow.",
        ],
      },
      code: {
        language: "cpp",
        caption: { ko: "타입이 정해진 패킷을 서버 handler로 분기", en: "Dispatching a typed packet into a server handler" },
        source: "YC/Core/Server/Server.cpp",
        text: `auto SendTo = [Client]<is_packet T>(T Packet) {
  return Server_Send(Packet, Client);
};

Packet | Unpack<FPac_Input2Server> | [](FPac_Input2Server Input) {
  auto Entity = GetEtt(Input.EttIdx);
  if (Entity.IsErr()) return;
  Entity.Unwrap().AChrPtr.Unwrap()
        ->ExecuteInput(Input.Input, Input.Type);
};`,
      },
    },
    {
      id: "team-retrospective",
      order: 330,
      project: "nirvana",
      category: { ko: "협업 회고", en: "Team Retrospective" },
      tags: ["game-client", "game-server", "cpp", "unreal", "network", "collaboration"],
      title: {
        ko: "프로젝트가 끝난 뒤 팀의 코드 구조가 왜 복잡해졌는지 되돌아봤습니다",
        en: "Reviewed why the team's code structure became harder to maintain",
      },
      lead: {
        ko: "기능을 빠르게 추가하는 동안 상속 관계와 서버·클라이언트 책임을 통일하지 못했습니다.",
        en: "While adding features quickly, the team did not keep inheritance and client/server responsibilities consistent.",
      },
      paragraphs: {
        ko: [
          "필요할 때마다 비슷한 자식 클래스를 추가하면서 부모·자식 관계가 역할보다 작업 순서에 따라 만들어졌습니다. 어느 함수가 어느 클래스에 있는지 찾기 어려워졌고, 액터 안에는 서버에서 처리할 코드와 클라이언트에서 실행할 코드가 HasAuthority 조건문으로 섞였습니다.",
          "기능 추가 일정이 우선되면서 새 코드를 어느 계층에 넣을지, 상태는 누가 소유할지, 서버와 클라이언트가 각각 어디까지 처리할지에 대한 기준을 충분히 맞추지 못했습니다. 같은 종류의 기능도 프로그래머마다 다른 위치와 방식으로 구현되면서 수정 범위가 점점 넓어졌습니다.",
          "프로젝트를 끝낸 뒤에는 코딩 스타일을 맞추는 것만으로는 부족하다는 점을 배웠습니다. 다음 팀 개발에서는 구현에 들어가기 전에 상태와 네트워크 책임의 경계를 먼저 정하고, 새 기능도 같은 구조를 따르게 만드는 과정을 중요하게 보고 있습니다.",
        ],
        en: [
          "Similar child classes were added whenever a feature needed them, so inheritance reflected implementation order rather than responsibility. Functions became hard to locate, while server and client code mixed inside actors behind repeated HasAuthority checks.",
          "Delivery pressure meant the team did not align enough on where new code belonged, who owned each state, or how far server and client responsibilities extended. Similar features ended up in different locations and styles depending on the programmer, so each change touched a wider area over time.",
          "After the project, I learned that a shared coding style alone is not enough. In future team projects, I want to agree on state ownership and network responsibility before implementation and make new features follow that shared structure.",
        ],
      },
    },
    {
      id: "cpp-network-foundations",
      order: 400,
      project: "foundations",
      category: { ko: "C++·네트워크 기초", en: "C++ & Networking Foundations" },
      tags: ["cpp", "game-server", "network", "realtime", "performance", "collaboration"],
      title: {
        ko: "소켓과 Windows IOCP부터 네트워크 프로그래밍을 공부했습니다",
        en: "Studied network programming from sockets and Windows IOCP",
      },
      lead: {
        ko: "온라인 게임을 직접 만들고 싶어 서버 개발에 관심을 가졌고, C++로 연결·패킷·동시성의 기초를 구현했습니다.",
        en: "Wanting to build online games led me to server development and implementing connection, packet, and concurrency fundamentals in C++.",
      },
      paragraphs: {
        ko: [
          "초등학생 때 RPG Maker로 게임을 만들면서 온라인 게임을 직접 구현할 수 있다는 점에 흥미를 느꼈습니다. 이후 게임 학원에서 소켓 프로그래밍과 Windows IOCP를 배우며 서버가 연결과 패킷을 처리하는 과정을 직접 구현했습니다.",
          "연결 수립, 비동기 입출력, 패킷 경계와 직렬화, 스레드 동기화를 직접 구현해 보며 라이브러리 아래에서 어떤 일이 일어나는지 공부했습니다. C++에서는 RAII와 객체 수명, 포인터·참조, 메모리 소유권을 코드 구조와 함께 이해하려고 했습니다.",
          "락프리나 나노초 단위 최적화를 실무 수준으로 다뤘다고 주장하지 않습니다. Modern C++와 저지연 시스템에 관심이 있고, 측정과 프로파일링을 바탕으로 더 깊게 배우려는 단계입니다.",
        ],
        en: [
          "I became interested in server development while making games in RPG Maker and realizing online games could be built directly. I later studied sockets and Windows IOCP at a game academy and implemented the connection and packet flow myself.",
          "Implementing connection setup, asynchronous I/O, packet framing and serialization, and thread synchronization helped me understand what libraries abstract away. In C++, I focus on RAII, object lifetime, pointers and references, and ownership.",
          "I do not claim production expertise in lock-free structures or nanosecond optimization. I am strongly interested in Modern C++ and low-latency systems and want to deepen that work through measurement and profiling.",
        ],
      },
    },
    {
      id: "p2p-netcode",
      order: 410,
      project: "p2p",
      category: { ko: "Rollback 넷코드 실험", en: "Rollback Netcode Experiment" },
      tags: ["game-server", "game-client", "rust", "network", "realtime", "performance"],
      title: {
        ko: "delay netcode에서 rollback 구조까지 직접 비교했습니다",
        en: "Compared delay netcode with a rollback design through direct implementation",
      },
      lead: {
        ko: "입력을 기다리는 구조의 지연을 확인한 뒤 world snapshot, 입력 기록과 재시뮬레이션을 추가했습니다.",
        en: "After seeing the latency cost of waiting for input, I added world snapshots, input history, and resimulation.",
      },
      flow: {
        ko: ["UDP tick·입력 packet", "delay 방식\n입력 대기", "world snapshot\n입력 기록", "rollback\n재시뮬레이션"],
        en: ["UDP ticks\nInput packets", "Delay model\nWait for input", "World snapshots\nInput history", "Rollback\nResimulation"],
      },
      paragraphs: {
        ko: [
          "Godot와 Rust GDExtension으로 UDP tick, ping과 입력 packet을 만들고 먼저 정해진 tick의 입력을 기다리는 delay 방식으로 동기화했습니다. 구조는 단순했지만 네트워크 지연이 그대로 조작 지연으로 느껴졌습니다.",
          "다음 구현에서는 먼저 예측해 실행하고 늦은 입력이 도착하면 과거 world snapshot으로 돌아가 같은 입력을 다시 실행하도록 바꿨습니다. 재실행 결과를 맞추기 위해 엔진 node 상태 의존을 줄이고 data-only world, 자체 collision type과 고정 PRNG를 추가했습니다.",
          "상용 넷코드라고 표현하지 않습니다. 두 동기화 방식에서 지연을 어디에 부담하는지 작은 코드로 직접 비교한 프로젝트입니다.",
        ],
        en: [
          "Using Godot and a Rust GDExtension, I implemented UDP ticks, ping, and input packets, starting with a delay model that waits for the required tick's input. It was simple, but network latency became input latency.",
          "The next version predicted ahead and returned to an earlier world snapshot when late input arrived. To make resimulation more repeatable, I reduced direct engine-node state, introduced a data-only world, custom collision types, and a fixed PRNG.",
          "This is not presented as production netcode. It is a small implementation used to compare where delay and rollback place their costs.",
        ],
      },
      links: [
        { label: { ko: "프로젝트 코드", en: "Project code" }, href: "https://github.com/yuchanahn/p2pactiongame", value: "GitHub" },
      ],
    },
    {
      id: "tower-overview",
      order: 420,
      project: "tower",
      category: { ko: "프로젝트 개요", en: "Project Overview" },
      tags: ["game-client", "unity", "csharp", "pathfinding", "performance", "collaboration"],
      title: {
        ko: "몬스터가 각자의 규칙으로 움직이고 싸우는 구조를 만들었습니다",
        en: "Built the systems that let each monster move and fight by its own rules",
      },
      lead: {
        ko: "대학교 1학년 팀 프로젝트에서 몬스터 AI를 중심으로 행동 트리, 이동, 피격과 상태이상, 사망 뒤 처리까지 맡았습니다.",
        en: "In a first-year university team project, I focused on monster AI, behavior trees, movement, hit and status handling, and post-death behavior.",
      },
      paragraphs: {
        ko: [
          "지상형과 비행형 몬스터의 공통 코드를 각각 `GroundMob_Base`와 `FlyingMob_Base`로 나누고, 슬라임·꽃잎박쥐·우는안개가 필요한 행동을 별도 컴포넌트와 Blackboard로 구성했습니다. 같은 추적·공격 기능을 공유하면서도 박쥐의 도망과 천장 매달리기, 우는안개의 순간이동과 범위 공격처럼 몬스터별 행동을 추가할 수 있게 만들었습니다.",
          "몬스터가 공격 중인지, 피격됐는지, 스턴이나 넉백 때문에 행동을 멈춰야 하는지를 이동·애니메이션·행동 트리에서 함께 확인했습니다. 사망 뒤에는 아이템 드롭, 시체 조각 생성과 흡수, 체력바와 대미지 텍스트까지 연결했습니다.",
          "처음 만든 장기 Unity 팀 프로젝트라 공통 기반과 개별 몬스터 코드의 경계가 고르지 않고, 여러 상태를 bool과 컴포넌트 조회로 연결한 부분도 많습니다. 그래도 하나의 몬스터가 인식부터 이동·공격·피격·사망까지 이어지는 전체 흐름을 직접 다뤄 본 프로젝트였습니다.",
        ],
        en: [
          "Shared ground and flying behavior was separated into `GroundMob_Base` and `FlyingMob_Base`, while Slime, Flower Bat, and Weeping Mist composed their own actions through components and blackboards. Common follow and attack behavior could be reused while adding monster-specific actions such as fleeing, ceiling hanging, teleporting, and area attacks.",
          "Movement, animation, and behavior-tree code all checked whether a monster was attacking, hurt, stunned, or being knocked back. The same flow connected item drops, pooled corpse pieces, health bars, and damage text after death.",
          "As an early long-running Unity team project, the boundary between shared foundations and individual monster code is uneven, and many states are linked through booleans and component lookups. It still gave me end-to-end experience with a monster's perception, movement, combat, damage, and death flow.",
        ],
      },
    },
    {
      id: "tower-behavior-tree",
      order: 422,
      project: "tower",
      category: { ko: "행동 트리", en: "Behavior Tree" },
      tags: ["game-client", "unity", "csharp", "collaboration"],
      title: {
        ko: "Selector·Decorator·Task를 조합하는 행동 트리를 직접 만들었습니다",
        en: "Implemented a behavior tree composed from selectors, decorators, and tasks",
      },
      lead: {
        ko: "몬스터마다 거대한 조건문을 작성하지 않고, 조건과 행동의 우선순위를 트리 모양으로 조립했습니다.",
        en: "Composed each monster's condition and action priority as a tree instead of one large conditional block.",
      },
      image: { src: "./assets/tower-behavior-tree.svg", alt: "Tower of Ukani Flower Bat behavior tree" },
      code: {
        language: "csharp",
        caption: { ko: "꽃잎박쥐 행동 우선순위 구성", en: "Flower Bat behavior priority" },
        source: "Assets/Devs/Yuchan/Mob/__FlowerBat/BT_FlowerBat.cs",
        text: `root.node
  .AddNode(new Selector())
    .AddNode(new Decorator(Bb.BTStop))
      .AddNode(new Task(() => true)).End().End()
    .AddNode(new Decorator(Bb.IsTargetInAttackRange))
      .AddNode(new Task(Bb.Attack)).End().End()
    .AddNode(new Decorator(Bb.IsTargetInFleeRange))
      .AddNode(new Task(Bb.Flee)).End().End()
    .AddNode(new Decorator(Bb.AgroCheck))
      .AddNode(new Task(Bb.Follow)).End().End()
    .AddNode(new Task(Bb.RandomMove)).End();`,
      },
      paragraphs: {
        ko: [
          "`BT_Base` 안에 Root, Selector, Sequence, Decorator, Service와 Task를 구현했습니다. 각 노드는 `Process()` 결과로 다음 노드를 계속 볼지 결정하고, `AddNode()`와 `End()`를 이어서 트리 구조를 코드에서 바로 읽을 수 있게 구성했습니다. Service는 노드별 시간을 기록해 일정 간격으로 조건을 갱신할 수 있게 했습니다.",
          "Blackboard는 몬스터 본체와 행동 컴포넌트를 연결했습니다. 예를 들어 꽃잎박쥐는 행동 정지, 공격, 도망, 추적, 천장 매달리기, 임의 이동 순서로 조건을 확인합니다. 슬라임은 피격·공격·추적·임의 이동을 사용하고, 우는안개는 순간이동과 스턴을 더 높은 우선순위로 처리했습니다.",
          "현재 구현은 성공·실패·실행 중을 구분하는 상태 대신 bool만 반환합니다. 여러 프레임에 걸리는 행동은 각 컴포넌트의 flag와 timer가 따로 진행 상태를 기억해야 했고, 행동 수가 늘수록 Blackboard와 컴포넌트 사이를 함께 확인해야 했습니다.",
        ],
        en: [
          "`BT_Base` implements Root, Selector, Sequence, Decorator, Service, and Task nodes. Each node uses its `Process()` result to decide whether traversal continues, while chained `AddNode()` and `End()` calls keep the tree visible in code. Services track per-node time for periodic work.",
          "Blackboards connect the tree to monster components. Flower Bat checks stop, attack, flee, follow, ceiling-hang, and random-move behavior in order. Slime uses hurt, attack, follow, and random movement, while Weeping Mist gives teleport and stun higher priority.",
          "The implementation returns booleans rather than explicit success, failure, and running states. Multi-frame actions therefore keep progress in separate flags and timers, so larger behavior sets require reading both the blackboard and its components.",
        ],
      },
    },
    {
      id: "tower-status-effects",
      order: 424,
      project: "tower",
      category: { ko: "피격·상태이상", en: "Damage & Status Effects" },
      tags: ["game-client", "unity", "csharp"],
      title: {
        ko: "스턴·슬로우·넉백이 행동과 이동을 함께 바꾸도록 연결했습니다",
        en: "Connected stun, slow, and knockback to both behavior and movement",
      },
      lead: {
        ko: "상태이상이 속도만 바꾸고 끝나지 않도록 공격 가능 여부, 방향 전환, 애니메이션과 행동 트리 정지를 함께 제어했습니다.",
        en: "Status effects control attack permission, turning, animation, and behavior-tree suspension as well as movement speed.",
      },
      image: { src: "./assets/tower-status-effects.svg", alt: "Tower of Ukani status effect property flow" },
      code: {
        language: "csharp",
        caption: { ko: "스턴이 몬스터 상태에 적용하는 값", en: "Values applied by stun" },
        source: "Assets/Devs/Yuchan/Mob/Core/StatusEffect/StatusEffect_Stunned.cs",
        text: `SetValue(SE_Obj.StatusEffect_Ani, eMobAniST.Stunned);
SetValue(SE_Obj.StatusEffect_SpeedMult, 0);
SetValue(SE_Obj.StatusEffect_AttackAble, false);
SetValue(SE_Obj.StatusEffect_FollowAble, false);
SetValue(SE_Obj.StatusEffect_ChangeDirAble, false);
SetValue(SE_Obj.StatusEffect_NoTask, true);`,
      },
      paragraphs: {
        ko: [
          "`StatusEffect_Object`가 속도 배율, 이동 방향, 공격·추적·방향 전환 가능 여부, 행동 정지, 애니메이션과 넉백 곡선을 한곳에 보관합니다. `GroundMob_Base`와 `FlyingMob_Base`는 이 값을 읽어 Rigidbody 속도, 현재 애니메이션과 행동 가능 여부를 결정합니다.",
          "스턴은 이동과 공격, 추적을 멈추고 스턴 애니메이션을 적용했습니다. 슬로우는 동시에 들어온 감속 값을 목록으로 관리했고, 넉백은 방향과 `AnimationCurve`를 전달해 시간에 따라 속도가 줄어드는 움직임을 만들었습니다. 효과 컴포넌트는 실행 중에 추가되고 timer가 끝나면 제거됩니다.",
          "우선순위가 높은 효과의 값을 먼저 적용하려고 `SE_Stat<T>`에 priority를 넣었지만, 높은 효과가 사라졌을 때 남은 효과의 우선순위를 다시 계산하는 구조까지는 만들지 못했습니다. 여러 상태가 겹치는 경우를 안정적으로 처리하려면 활성 효과 전체를 매번 합산하거나 정렬하는 방식이 필요했습니다.",
        ],
        en: [
          "`StatusEffect_Object` stores speed, effect direction, attack and follow permission, turning, behavior suspension, animation, and knockback curves. `GroundMob_Base` and `FlyingMob_Base` read those values when deciding Rigidbody velocity, animation, and available actions.",
          "Stun stops movement, attack, and follow behavior and selects a stunned animation. Slow keeps a list of active reductions, while knockback passes a direction and `AnimationCurve` to produce decaying velocity. Effect components are added at runtime and removed when their timer ends.",
          "`SE_Stat<T>` uses priority so stronger effects can win, but it does not fully recompute priority after a stronger effect disappears. Robust stacking would require aggregating or sorting the complete set of active effects each time.",
        ],
      },
    },
    {
      id: "tower-pathfinding-worker",
      order: 426,
      project: "tower",
      category: { ko: "길찾기 적용", en: "Pathfinding Integration" },
      tags: ["game-client", "unity", "csharp", "pathfinding", "performance"],
      title: {
        ko: "공개 JPS 코드를 게임 좌표와 움직이는 지형에 연결했습니다",
        en: "Connected an open JPS implementation to game coordinates and moving terrain",
      },
      lead: {
        ko: "JPS 알고리즘 자체를 만든 작업은 아니며, Unity 월드·Grid 변환과 몬스터 이동을 붙이고 반복 계산을 작업 스레드로 옮겼습니다.",
        en: "I did not author JPS itself; I connected Unity world/grid conversion and monster movement, then moved repeated rebuild work to a worker thread.",
      },
      image: { src: "./assets/tower-pathfinding-worker.svg", alt: "Tower of Ukani JPS integration and worker thread flow" },
      code: {
        language: "csharp",
        caption: { ko: "Grid 재계산을 전달하는 단일 작업 스레드", en: "Single worker used for grid rebuilds" },
        source: "Assets/Devs/Yuchan/System/Thread/YCThreadPool.cs",
        text: `while (!t1_stop) {
  while (!Works.IsEmpty) {
    Works.TryDequeue(out act);
    act.Invoke();
  }
}`,
      },
      paragraphs: {
        ko: [
          "프로젝트에 포함된 JPS 구현의 `GridView`와 `Grid`를 읽고 월드 좌표를 grid point로 변환하는 코드, 맵 이름과 대상 크기별 pathfinder 등록, 계산된 point를 몬스터 이동 벡터로 바꾸는 코드를 연결했습니다. 꽃잎박쥐의 추적과 임의 이동에서 이 경로를 사용했습니다.",
          "움직이는 발판이 차지하던 node를 해제하고 새 위치의 node를 장애물로 표시하도록 갱신했습니다. 장애물 변경 뒤 jump-point를 다시 만드는 작업은 `ConcurrentQueue<Action>`에 넣고 단일 worker가 처리하도록 만들어 메인 스레드에서 반복 계산하는 구간을 분리했습니다.",
          "worker는 일이 없을 때도 queue를 계속 확인하고, 종료 시 thread join을 하지 않으며, 계산 중인 grid를 메인 스레드가 읽는 시점도 엄격하게 통제하지 않습니다. 당시에는 스레드를 붙여 계산을 분리하는 데 집중했지만, 지금 보면 신호 기반 대기와 결과 교환 경계를 함께 설계했어야 합니다.",
        ],
        en: [
          "I read the included JPS `GridView` and `Grid` code and connected world-to-grid conversion, per-map and object-size pathfinder registration, and conversion of returned points into monster movement. Flower Bat used this path for follow and random-move behavior.",
          "Moving platforms clear their previous nodes and mark nodes at the new position as blocked. Rebuilding jump points after obstacle changes is queued through `ConcurrentQueue<Action>` and processed by a single worker instead of repeatedly running on the main thread.",
          "The worker busy-polls when idle, does not join on shutdown, and does not strictly guard when the main thread reads a grid being rebuilt. The experiment separated computation, but it also showed that waiting and result-exchange boundaries must be designed alongside the thread itself.",
        ],
      },
    },
    {
      id: "tower-object-reuse",
      order: 428,
      project: "tower",
      category: { ko: "오브젝트 재사용", en: "Object Reuse" },
      tags: ["game-client", "unity", "csharp", "performance"],
      title: {
        ko: "시체 조각과 반복 UI를 매번 생성하지 않고 다시 사용했습니다",
        en: "Reused corpse pieces and repeated UI instead of recreating them",
      },
      lead: {
        ko: "전투 중 반복되는 시체, 대미지 텍스트와 체력바의 생성·제거 비용을 줄이기 위해 간단한 오브젝트 풀을 만들었습니다.",
        en: "Built a small object pool for corpse pieces, damage text, and health bars that appear repeatedly during combat.",
      },
      code: {
        language: "csharp",
        caption: { ko: "필요할 때 pool에서 꺼내고 부족하면 확장", en: "Take from the pool and expand when empty" },
        source: "Assets/Devs/Yuchan/System/ObjectPool/ObjectPool.cs",
        text: `public static GameObject create(int id, Vector2 pos) {
  if (Inst.objects[id].Count == 0)
    Inst.CreateObj(id);

  GameObject obj = Inst.objects[id].Dequeue();
  obj.GetComponent<Object_ObjectPool_Base>().SetOn(pos);
  return obj;
}`,
      },
      paragraphs: {
        ko: [
          "시작할 때 prefab별 개수만큼 만들어 queue에 넣고, 필요할 때 꺼내 `SetOn()`으로 위치와 상태를 초기화했습니다. pool이 비면 같은 설정 개수만큼 추가 생성하고, 사용이 끝난 오브젝트는 `SetOff()`에서 다시 queue로 돌려보냈습니다.",
          "몬스터가 죽으면 `CorpseMgr`가 시체 조각을 pool에서 가져와 흩뿌리고, 흡수 상태가 되면 플레이어 쪽으로 이동시키면서 크기를 줄인 뒤 다시 반환했습니다. 대미지 텍스트와 몬스터 체력바도 짧은 시간 동안 재사용하는 흐름으로 연결했습니다.",
          "pool ID와 prefab 설정이 배열 순서에 묶여 있고 타입별 초기화 규칙도 각 컴포넌트가 직접 알고 있어 규모가 커지면 관리하기 어렵습니다. 작은 팀 프로젝트에서 반복 생성되는 전투 오브젝트의 수명과 초기화 문제를 처음 정리해 본 구현입니다.",
        ],
        en: [
          "The pool instantiates a configured count per prefab, dequeues an object, and resets its position and state through `SetOn()`. When empty it grows by the same configured amount, while `SetOff()` returns finished objects to the queue.",
          "On monster death, `CorpseMgr` takes corpse pieces from the pool and scatters them. Absorption moves them toward the player, shrinks them, and then returns them. Damage text and monster health bars follow similar short-lived reuse paths.",
          "Pool IDs depend on array order and each component owns its own reset rules, which would become difficult at larger scale. It was an early implementation for learning object lifetime and initialization around repeated combat objects.",
        ],
      },
    },
    {
      id: "vapor-overview",
      order: 440,
      project: "vapor",
      category: { ko: "프로젝트 개요", en: "Project Overview" },
      tags: ["game-client", "unity", "csharp", "collaboration"],
      title: {
        ko: "플레이어 조작부터 UI와 데이터까지 게임 전반을 연결했습니다",
        en: "Connected player control, UI, and data across the game",
      },
      lead: {
        ko: "Unity 2021.3 기반 2D 횡스크롤 액션 게임에서 플레이어 코드와 전투, 입력·UI, 컷신 데이터와 저장 기능을 맡았습니다.",
        en: "In a Unity 2021.3 2D side-scrolling action game, I worked on the player, combat, input and UI, cutscene data, and save flow.",
      },
      paragraphs: {
        ko: [
          "플레이어 이동·점프·공격·차지·방어·회피·피격·사망 동작을 구현하고, 일반 공격·콤보·차지 공격·패링을 애니메이션 이벤트와 충돌 판정에 연결했습니다. 입력은 이름과 태그를 가진 mapping으로 모아 플레이어와 UI가 같은 경로를 사용하게 했습니다.",
          "설정 화면에서는 키 변경, 음량과 전체 화면 설정을 저장했고, 씬 이동 시 체력·스태미나·포션과 다음 씬 정보를 파일로 남겼습니다. Google Sheets에서 컷신과 NPC 대사를 CSV로 받아 dictionary로 변환하고, 타이핑 연출과 튜토리얼 이벤트에서 사용했습니다.",
          "플레이어 코드에 여러 동작의 조건이 모이고 문자열로 연결한 애니메이션 이벤트가 많아 수정할 때 여러 지점을 함께 확인해야 하는 구조도 남아 있습니다. 반면 실제 게임 한 편을 완성하면서 조작, 전투, UI, 데이터와 씬 전환이 서로 어떻게 영향을 주는지 폭넓게 다뤘습니다.",
        ],
        en: [
          "I implemented player movement, jump, attack, charge, defense, roll, hit, and death behavior and connected normal attacks, combos, charged attacks, and parries to animation events and collision handling. Named and tagged input mappings allowed gameplay and UI to share one input path.",
          "Settings persist key bindings, audio, and fullscreen choice, while scene changes store health, stamina, potions, and the next scene. Cutscene and NPC text is downloaded from Google Sheets as CSV, converted into dictionaries, and used by typing effects and tutorial events.",
          "The player file still contains conditions for many behaviors, and string-based animation event connections require checking several points for each change. The project nevertheless provided broad experience connecting controls, combat, UI, data, and scene transitions in a complete game.",
        ],
      },
    },
    {
      id: "vapor-combat",
      order: 444,
      project: "vapor",
      category: { ko: "전투 구현", en: "Combat" },
      tags: ["game-client", "unity", "csharp"],
      title: {
        ko: "콤보·차지·패링을 입력과 애니메이션 타이밍에 맞춰 연결했습니다",
        en: "Connected combos, charged attacks, and parries to input and animation timing",
      },
      lead: {
        ko: "버튼을 누르고 떼는 시간, 현재 플레이어 상태와 애니메이션 이벤트를 함께 사용해 공격 종류와 판정 시점을 결정했습니다.",
        en: "Used press and release timing, player state, and animation events together to select attacks and their hit timing.",
      },
      code: {
        language: "csharp",
        caption: { ko: "공격 버튼을 뗄 때 일반 공격과 차지 공격을 구분", en: "Choosing normal or charged attack on release" },
        source: "Assets/Scripts/Player/PC.cs",
        text: `input.key.get_event_of_name("Attack").unpress_ev = x => {
  if (!is_grounded || is_attack) {
    is_attack_start = false;
    return;
  }

  if (is_attack_start) {
    is_attack_start = false;
    if (!(stamina.value > atk_stamina)) return;
    is_attack = true;
    normal_attack_timer.Reset();
    stamina.value -= atk_stamina;
  }
  else if (chargingAttack.IsCharging &&
           chargingAttack.IsChargeAttackReady) {
    chargingAttack.end_charge();
    if (!(stamina.value > charge_atk_stamina)) return;
    stamina.value -= charge_atk_stamina;
    is_charging_attack = true;
  }
};`,
      },
      paragraphs: {
        ko: [
          "공격 버튼을 짧게 눌렀다 떼면 일반 공격 상태로 들어가고, 일정 시간 이상 누르면 `ChargingAttack`의 timer가 끝나 차지 상태로 전환됩니다. combo 횟수에 따라 애니메이션과 대미지 배율, 이펙트를 바꾸고 제한 시간이 지나면 combo를 초기화했습니다.",
          "`NormalAttack`이 피격 callback을 등록하고 `ComboAttack`, `ChargingAttack`, `ParringAttack`이 필요한 판정만 override했습니다. 패링 가능한 공격이 collider에 들어오면 적의 패링 상태를 확인하고 적에게 대미지와 `OnParriedHit()`을 적용한 뒤 플레이어의 성공 이벤트를 호출했습니다.",
          "공격 collider의 시작·종료, 이동 곡선과 이펙트는 `AnimEvBind`의 이름으로 애니메이션 이벤트와 연결했습니다. 애니메이션 프레임과 실제 판정을 맞추기 편했지만 문자열 이름이 prefab 설정과 코드 양쪽에 흩어져 있어, 이름을 바꾸거나 이벤트를 빠뜨리면 실행 중에 문제가 발생하는 구조였습니다.",
        ],
        en: [
          "A short press and release enters normal attack, while holding beyond the timer switches to charge. Combo count selects animation, damage multiplier, and effect, then resets after a timeout.",
          "`NormalAttack` registers hit callbacks and `ComboAttack`, `ChargingAttack`, and `ParringAttack` override only their specific rules. A parry checks the enemy's parry state, applies damage and `OnParriedHit()`, and then notifies the player controller of success.",
          "Attack collision windows, movement curves, and effects are connected to animation events through names in `AnimEvBind`. This aligns hit timing with frames, but the string contract is spread across prefabs and code, so missing or renamed events fail at runtime.",
        ],
      },
    },
    {
      id: "vapor-input-ui",
      order: 446,
      project: "vapor",
      category: { ko: "입력·UI", en: "Input & UI" },
      tags: ["game-client", "unity", "csharp"],
      title: {
        ko: "입력 이름과 태그로 플레이어 조작과 UI 조작을 전환했습니다",
        en: "Switched gameplay and UI control through named, tagged input mappings",
      },
      lead: {
        ko: "Unity의 기존 `Input.GetKey` 위에 자체 mapping을 만들고, 화면이 열릴 때 플레이어 입력을 막고 UI 입력만 받도록 구성했습니다.",
        en: "Built a custom mapping layer over legacy `Input.GetKey` and switched input context when a UI screen opens.",
      },
      image: { src: "./assets/vapor-input-flow.svg", alt: "Vapor named input and UI context flow" },
      code: {
        language: "csharp",
        caption: { ko: "이름으로 입력 callback을 연결", en: "Binding input callbacks by name" },
        source: "Assets/Scripts/System/YCInputSystem.cs",
        text: `foreach (var i in key) {
  if (ignore.Any(t => t.is_ignore && t.tag.Equals(i.tag)))
    continue;

  bool state = i.state
    ? !i.key.Any(Input.GetKeyUp)
    : i.key.Any(Input.GetKeyDown);

  if (i.state != state) {
    if (state) i.press_ev?.Invoke(true);
    else i.unpress_ev?.Invoke(false);
  }
  i.state = state;
}`,
      },
      paragraphs: {
        ko: [
          "1차원·2차원 axis와 key mapping에 이름, player 또는 UI 태그, 현재 상태와 callback을 저장했습니다. 플레이어 코드는 `Move`, `Jump`, `Attack`, `Defence` 같은 이름으로 callback을 연결하고, 상호작용과 포션 사용, 설정 화면도 같은 입력 목록을 사용했습니다.",
          "`UIView`가 열리면 player 태그를 막고 UI 태그를 활성화한 뒤 `Time.timeScale`을 0으로 바꿨습니다. UI 이동은 `Time.unscaledDeltaTime`으로 처리해 일시정지 중에도 포인터와 slider가 움직이게 했습니다. 키 변경 화면은 다음에 눌린 `KeyCode`를 mapping에 반영하고 JSON 저장 파일에 남겼습니다.",
          "이 코드는 Unity의 새 Input System action을 사용한 구현은 아닙니다. callback 필드가 하나뿐이라 서로 다른 화면이 같은 입력을 쓰면 덮어쓸 수 있고 중복 키 검사와 mouse rebinding도 없습니다. 당시 프로젝트에 필요한 입력 문맥과 키 저장을 직접 묶은 구조입니다.",
        ],
        en: [
          "One- and two-dimensional axes and key mappings store a name, player or UI tag, current state, and callback. Player code binds names such as `Move`, `Jump`, `Attack`, and `Defence`, while interactions, potions, and settings use the same list.",
          "Opening `UIView` blocks the player tag, enables the UI tag, and sets `Time.timeScale` to zero. UI motion uses `Time.unscaledDeltaTime`, so the pointer and sliders keep moving while paused. Rebinding captures the next `KeyCode` and stores the mapping in JSON.",
          "This is not an implementation of Unity's newer Input System actions. Each mapping has only one callback slot, so screens can overwrite one another, and duplicate-key checks and mouse rebinding are absent. It is a project-specific layer for input context and persistence.",
        ],
      },
    },
    {
      id: "vapor-sheet-data",
      order: 448,
      project: "vapor",
      category: { ko: "컷신 데이터", en: "Cutscene Data" },
      tags: ["game-client", "unity", "csharp", "collaboration"],
      title: {
        ko: "Google Sheets의 대사를 CSV로 받아 컷신에서 사용했습니다",
        en: "Loaded dialogue from Google Sheets as CSV for cutscenes",
      },
      lead: {
        ko: "대사와 NPC 텍스트를 코드와 scene에서 분리하고, sheet 이름·행 key·column으로 찾을 수 있는 데이터로 변환했습니다.",
        en: "Separated dialogue and NPC text from code and scenes, then indexed it by sheet, row key, and column.",
      },
      image: { src: "./assets/vapor-data-flow.svg", alt: "Vapor Google Sheets CSV and cutscene data flow" },
      code: {
        language: "csharp",
        caption: { ko: "CSV 첫 행을 column 이름으로 사용해 dictionary 구성", en: "Building dictionaries from CSV column names" },
        source: "Assets/Scripts/System/Google/LoadGoogleSheets.cs",
        text: `var columnNames = row[0]
  .Where(x => !string.IsNullOrEmpty(x)).ToArray();

foreach (var t in row.Skip(1)) {
  if (!dic.ContainsKey(t[0].Trim()))
    dic[t[0].Trim()] = new Dictionary<string, string>();

  for (var i = 0; i < columnNames.Length; ++i)
    dic[t[0].Trim()].Add(columnNames[i].Trim(), t[i].Trim());
}`,
      },
      paragraphs: {
        ko: [
          "`UnityWebRequest`로 Google Sheets의 gviz CSV 응답을 받고, 직접 만든 `CsvParser`가 comma, 줄바꿈, 따옴표로 감싼 값과 이중 따옴표 escape를 처리했습니다. 첫 행을 column 이름으로 삼아 `Dictionary<string, Dictionary<string, string>>` 형태로 변환했습니다.",
          "`CutsceneView`는 Story, NPC, Intro_Cutscene sheet를 불러오고, `PrintStory`가 key에 해당하는 Text를 한 글자씩 출력했습니다. sheet와 key를 `Sheet@Key` 형태로 전달해 다른 UI에서도 텍스트를 가져올 수 있게 했으며 타이핑 사운드와 종료 이벤트도 연결했습니다.",
          "데이터를 실행 중에 받아오기 때문에 네트워크나 sheet 형식이 잘못되면 컷신이 시작되지 않을 수 있지만, 오류 표시나 로컬 fallback은 충분히 만들지 못했습니다. 팀이 텍스트를 코드 밖에서 편집할 수 있게 한 대신 외부 데이터 의존성을 함께 관리해야 한다는 점을 배웠습니다.",
        ],
        en: [
          "`UnityWebRequest` downloads the Google Sheets gviz CSV response. My `CsvParser` handles commas, newlines, quoted fields, and escaped double quotes, then the first row becomes column names in a nested dictionary.",
          "`CutsceneView` loads Story, NPC, and Intro_Cutscene sheets, and `PrintStory` renders the selected Text one character at a time. Other UI can request text with a `Sheet@Key` string, with typing audio and completion events connected to the same flow.",
          "Because data is downloaded at runtime, a network or schema failure can block a cutscene, and the project lacks a complete error display or local fallback. Moving text out of code improved team editing but introduced an external dependency that also needed operational handling.",
        ],
      },
    },
    {
      id: "vapor-save-settings",
      order: 449,
      project: "vapor",
      category: { ko: "저장·설정", en: "Save & Settings" },
      tags: ["game-client", "unity", "csharp"],
      title: {
        ko: "진행 상태와 키·사운드 설정을 타입별 JSON 파일로 저장했습니다",
        en: "Stored progress, key bindings, and audio settings in typed JSON files",
      },
      lead: {
        ko: "저장할 데이터를 struct로 나누고 타입 이름을 파일 구분자로 사용해 같은 `SaveLoad` 코드로 읽고 썼습니다.",
        en: "Split saved data into structs and used the type name to read and write each category through one `SaveLoad` path.",
      },
      code: {
        language: "csharp",
        caption: { ko: "값이 없을 수 있는 제네릭 Load와 JSON Save", en: "Nullable generic load and JSON save" },
        source: "Assets/Scripts/System/SaveLoad.cs",
        text: `public T? Load<T>() where T : struct {
  try {
    using StreamReader file = new(
      "\${filepath}/Save_\${typeof(T).Name}.txt");
    return JsonConvert.DeserializeObject<T>(file.ReadToEnd());
  } catch {
    return null;
  }
}

public void Save<T>(T data) where T : struct {
  using StreamWriter file = new(
    "\${filepath}/Save_\${typeof(T).Name}.txt");
  file.WriteLine(
    JsonConvert.SerializeObject(data, Formatting.Indented));
}`,
      },
      paragraphs: {
        ko: [
          "`save_ingame_data_t`에는 포션 수, 체력, 스태미나, 다음 scene과 새 게임 여부를 저장했습니다. scene이 바뀔 때 현재 값을 기록하고, 다음 scene에서 파일을 읽어 플레이어와 인벤토리에 다시 적용했습니다.",
          "키 mapping은 이름별 `KeyCode[]` dictionary로 저장했고, 사운드 master·BGM·SFX와 전체 화면 여부도 각각 별도 struct로 관리했습니다. 저장 파일이 없으면 nullable 결과를 받아 기본 설정이나 새 게임 흐름으로 넘어가게 했습니다.",
          "실제 코드는 inspector에서 받은 경로에 바로 파일을 쓰며 버전, 임시 파일 교체와 손상 복구가 없습니다. 예외도 모두 같은 ‘저장 파일 없음’으로 처리해 원인을 구분하지 못합니다. 졸업 프로젝트 범위에서는 동작했지만 저장 형식 변경과 실패 복구까지 생각하려면 구조를 더 보완해야 했습니다.",
        ],
        en: [
          "`save_ingame_data_t` stores potion count, health, stamina, the next scene, and new-game state. Values are written during a scene change and applied back to the player and inventory in the following scene.",
          "Key mappings are stored as a dictionary of named `KeyCode[]` values, while master, BGM, SFX, and fullscreen settings use their own structs. A missing file returns a nullable result so the game can continue with defaults or a new-game path.",
          "The implementation writes directly to an inspector-provided path without versioning, temporary-file replacement, or corruption recovery. It also catches all exceptions as a missing file. It worked for the project scope but would need stronger migration and failure handling for a released game.",
        ],
      },
    },
    {
      id: "cpp-trading-bot",
      order: 450,
      project: "bybitCpp",
      category: { ko: "C++ 거래소 API", en: "C++ Exchange API" },
      tags: ["cpp", "fintech", "network", "realtime", "operations", "performance"],
      title: {
        ko: "Bybit의 실시간 시세와 주문 상태를 C++로 직접 연결했습니다",
        en: "Connected Bybit market data and order state directly in C++",
      },
      lead: {
        ko: "공개 호가·비공개 포지션 WebSocket과 주문 REST API, HMAC-SHA256 서명을 하나의 실행 흐름으로 묶었습니다.",
        en: "Combined public order-book and private-position WebSockets, order REST APIs, and HMAC-SHA256 signing in one execution flow.",
      },
      flow: {
        ko: ["Public WebSocket\n호가", "Private WebSocket\n포지션", "position_type_b\n전략 상태", "REST API\n주문·취소·재조회"],
        en: ["Public WebSocket\nOrder book", "Private WebSocket\nPositions", "position_type_b\nStrategy state", "REST API\nOrder·cancel·reconcile"],
      },
      paragraphs: {
        ko: [
          "공개 WebSocket에서 BTCUSDT 호가 snapshot과 insert·delete event를 받아 매수·매도 기준 가격을 갱신했습니다. 비공개 WebSocket에서는 long·short 포지션의 진입 가격과 수량 변화를 받고, 주문 생성·취소와 잔액·포지션 조회는 REST API로 분리했습니다.",
          "비공개 요청은 API key, timestamp와 parameter를 정렬해 문자열로 만든 뒤 OpenSSL HMAC-SHA256으로 서명했습니다. 시장가·지정가 주문과 reduce_only 청산 주문이 같은 parameter 생성 규칙을 사용하도록 구성했습니다.",
          "현재 기준으로는 WebSocket thread와 main loop가 공유하는 상태의 동기화, reconnect·shutdown과 thread 소유권이 부족합니다. 다시 만든다면 std::jthread와 event queue로 수신과 상태 소유를 분리하고 testnet에서 재연결과 중복 event를 먼저 검증합니다. 저지연 거래 시스템으로 과장하지 않고 C++ 네트워크 구현과 현재의 코드 판단을 함께 보여주는 프로젝트입니다.",
        ],
        en: [
          "The public WebSocket applied BTCUSDT order-book snapshots and insert/delete events to local bid and ask prices. A private WebSocket received long and short position changes, while order creation, cancellation, balances, and reconciliation used REST APIs.",
          "Private requests sorted the API key, timestamp, and parameters into a signing string, then generated an OpenSSL HMAC-SHA256 signature. Market, limit, and reduce-only close orders shared the same parameter-building rule.",
          "By today's standards, synchronization between WebSocket threads and the main loop, reconnect and shutdown handling, and thread ownership are incomplete. A rebuild would use std::jthread and an event queue with testnet cases for reconnects and duplicate events. I present it as hands-on C++ networking plus a current code review, not a low-latency trading system.",
        ],
      },
      links: [
        { label: { ko: "프로젝트", en: "Project" }, href: "https://github.com/yuchanahn/trade_bot_bybit_cpp", value: "GitHub" },
        { label: "REST", href: "https://github.com/yuchanahn/trade_bot_bybit_cpp/blob/0905f73e564103ad20e77b9b991bfd47893f102a/trade_bot_bybit/bybit_api.hpp", value: "bybit_api.hpp" },
        { label: "WebSocket", href: "https://github.com/yuchanahn/trade_bot_bybit_cpp/blob/0905f73e564103ad20e77b9b991bfd47893f102a/trade_bot_bybit/bybit_websocket.hpp", value: "bybit_websocket.hpp" },
        { label: "HMAC", href: "https://github.com/yuchanahn/trade_bot_bybit_cpp/blob/0905f73e564103ad20e77b9b991bfd47893f102a/trade_bot_bybit/Encryption.hpp", value: "Encryption.hpp" },
      ],
    },
    {
      id: "trading-state-recovery",
      order: 460,
      project: "autoTrading",
      category: { ko: "외부 상태 복구", en: "External State Recovery" },
      tags: ["fintech", "network", "operations"],
      title: {
        ko: "프로세스가 종료돼도 거래소 주문 상태를 다시 복구하도록 바꿨습니다",
        en: "Changed the design so exchange order state could recover after a process exit",
      },
      lead: {
        ko: "메모리 상태만 믿지 않고 거래소의 realtime order와 저장된 포지션을 복구 기준으로 사용했습니다.",
        en: "Used exchange real-time orders and persisted positions as the recovery source instead of trusting process memory alone.",
      },
      flow: {
        ko: ["전략 의사코드", "Bybit REST·WebSocket", "상태 JSON 저장", "realtime order 기준\n재시작 복구"],
        en: ["Strategy pseudocode", "Bybit REST·WebSocket", "Persist state as JSON", "Recover from\nreal-time orders"],
      },
      paragraphs: {
        ko: [
          "Nim 버전은 매매 전략을 의사코드로 먼저 정리하고 Bybit 공개·비공개 REST와 WebSocket, HMAC 인증을 붙였습니다. WebSocket 오류 재연결, 동시에 API를 호출할 때 생기는 문제와 포지션 JSON 저장을 순서대로 보완했습니다.",
          "D 버전에서는 프로그램 내부 상태만 믿으면 강제 종료 뒤 거래소의 실제 주문과 로컬 상태가 달라질 수 있다고 판단했습니다. 거래소 realtime order를 기준으로 활성 주문과 open·close·cancel 상태를 저장해 재시작 뒤 복구하도록 바꿨습니다.",
          "투자 수익을 보여주는 사례가 아니라 외부 시스템을 상태의 기준으로 삼고 연결 단절과 재시작을 처리해 본 경험으로 설명합니다.",
        ],
        en: [
          "The Nim version began with trading-strategy pseudocode, then connected Bybit public/private REST, WebSockets, and HMAC authentication. I added WebSocket reconnect handling, addressed overlapping API calls, and persisted positions as JSON.",
          "In the D version, process memory could diverge from the exchange after a forced exit. The design changed to persist active and open/close/cancel state from the exchange's real-time order stream for restart recovery.",
          "This is not an investment-performance claim. It is an example of treating an external system as the source of truth and handling disconnects and restarts.",
        ],
      },
      links: [
        { label: "Nim", href: "https://github.com/doongjohn/bigmoney", value: "GitHub" },
        { label: "D", href: "https://github.com/doongjohn/bigmoney-d", value: "GitHub" },
      ],
    },
  ],
};

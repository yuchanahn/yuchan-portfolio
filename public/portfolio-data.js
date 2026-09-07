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
      tags: ["operations", "performance", "admin", "mobile", "localization", "collaboration", "perochat-summary"],
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
    realtime: { ko: "실시간 통신", en: "Realtime" },
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
    "perochat-summary": { ko: "PeroChat 요약", en: "PeroChat Summary" },
  },

  presets: [
    {
      id: "finance-backend",
      title: { ko: "금융·웹 백엔드", en: "Fintech Backend" },
      description: {
        ko: "결제·DB 병목을 먼저 보고 인증·배포 판단과 외부 주문 복구로 이어지는 6개 사례",
        en: "Six cases: payments, database bottlenecks, authentication, deployment, order recovery, and real-world use",
      },
      tags: ["backend", "fintech", "go", "postgresql", "redis", "payment", "testing", "operations"],
      caseIds: ["payment-consistency", "redis-k6", "auth-evolution", "deployment", "trading-state-recovery", "quickbite"],
    },
    {
      id: "game-service",
      title: { ko: "게임 서비스 백엔드", en: "Game Service Backend" },
      description: {
        ko: "게임 상태·로딩 동기화와 롤백, 웹 서비스의 DB·실시간·운영을 연결한 7개 사례",
        en: "Seven cases connecting game-state synchronization and rollback with database, streaming, and operations work",
      },
      tags: ["game-server", "backend", "go", "redis", "llm", "realtime", "network", "operations"],
      caseIds: ["nirvana-gameplay-network", "nirvana-loading-ui", "p2p-rollback", "redis-k6", "llm-gateway", "realtime-character", "deployment"],
    },
    {
      id: "cpp-systems",
      title: { ko: "C++ 시스템·네트워크", en: "C++ Systems & Networking" },
      description: {
        ko: "Unreal C++의 게임 상태·로딩·애니메이션 동기화와 거래소 API 구현 5개 사례",
        en: "Five cases covering Unreal C++ state, loading, animation synchronization, and exchange APIs",
      },
      tags: ["cpp", "network", "unreal", "performance", "collaboration"],
      caseIds: ["nirvana-gameplay-network", "nirvana-loading-ui", "nirvana-animation", "nirvana-cpp", "cpp-trading-bot"],
    },
    {
      id: "game-client",
      title: { ko: "게임 프로그래밍·네트워크", en: "Game Programming & Networking" },
      description: {
        ko: "Nirvana의 멀티플레이 문제와 롤백을 중심으로 전투·몬스터 AI·서비스 경험을 담은 8개 사례",
        en: "Eight cases led by Nirvana multiplayer and rollback, followed by combat, monster AI, and a service summary",
      },
      tags: ["game-client", "game-server", "cpp", "unreal", "unity", "csharp", "rust", "network", "realtime", "performance", "collaboration", "perochat-summary"],
      caseIds: ["nirvana-loading-ui", "nirvana-animation", "nirvana-gameplay-network", "p2p-rollback", "p2p-world-simulation", "vapor-combat", "tower-behavior-tree", "perochat-service-summary"],
    },
    {
      id: "ai-fullstack",
      title: { ko: "AI 서비스 풀스택", en: "AI Service Full-stack" },
      description: {
        ko: "LLM·PromptKit·캐릭터 표현을 먼저 보고 모바일 비교 실험·결제·인증으로 이어지는 6개 사례",
        en: "Six cases: LLM integration, PromptKit, character runtime, mobile experiments, payments, and authentication",
      },
      tags: ["ai", "fullstack", "svelte", "go", "llm", "realtime", "mobile", "admin"],
      caseIds: ["llm-gateway", "admin-console", "realtime-character", "mobile-keyboard", "payment-consistency", "auth-evolution"],
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
      description: {
        ko: "웹 브라우저에서 2D·Live2D·VRM 캐릭터와 LLM으로 대화하는 서비스입니다. 대학 과제로 만든 VRM+LLM 채팅에서 시작해 캐릭터 탐색과 제작, 계정, 포인트 결제, 관리자 기능과 모바일 앱 배포 테스트까지 확장했습니다.",
        en: "A browser-based service for chatting with 2D, Live2D, and VRM characters through LLMs. It began as a university VRM+LLM chat assignment and expanded into character discovery and authoring, accounts, credit payments, admin tools, and mobile distribution tests.",
      },
      contribution: {
        ko: "서비스 기획, SvelteKit 프런트엔드, Go API, 데이터베이스와 캐시, 인증·결제, 배포와 운영을 혼자 진행했습니다.",
        en: "Handled product planning, the SvelteKit frontend, Go APIs, database and cache, authentication and payments, deployment, and operations as a solo developer.",
      },
      stack: ["SvelteKit", "Go", "PostgreSQL", "Redis", "Supabase", "Coolify", "Oracle Cloud"],
      image: { src: "./assets/perochat-chat.png", alt: "PeroChat character chat screen" },
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
      description: {
        ko: "메신저로 주문을 받으며 생기던 반복 작업을 줄이기 위해 만든 디저트 주문 사이트입니다. 수개월 동안 실제 판매에 사용하면서 메뉴 옵션, 재고, 판매 일정, 계좌 안내와 주문 확인 화면을 판매 방식에 맞춰 계속 수정했습니다.",
        en: "A dessert ordering site built to reduce repetitive messenger-based ordering. It was used for real sales over several months and evolved with menu options, inventory, schedules, payment guidance, and order confirmation screens.",
      },
      contribution: {
        ko: "주문·완료 화면과 모바일 UI, 판매 관리 흐름, SQLite 주문 처리, Google Sheets 기록, Discord 알림, 도메인과 Ubuntu 서버 운영을 맡았습니다.",
        en: "Built the order and completion screens, mobile UI, seller workflow, SQLite order processing, Google Sheets logging, Discord notifications, and domain and Ubuntu deployment.",
      },
      stack: ["Web UI", "SQLite", "Google Sheets", "Discord", "Ubuntu"],
      images: [
        { src: "./assets/quickbite-order.png", alt: "QuickBite order form" },
        { src: "./assets/quickbite-success.png", alt: "QuickBite successful order screen" },
      ],
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
      description: {
        ko: "두 플레이어가 한 팀으로 스테이지를 진행하는 Unreal Engine 5.3 액션 로그라이크입니다. 22명 규모의 졸업 프로젝트에서 프로그래머 4명이 약 8개월 동안 개발했습니다.",
        en: "A two-player Unreal Engine 5.3 action roguelike in which both players progress through stages as one team. It was developed over roughly eight months by four programmers in a 22-person capstone team.",
      },
      contribution: {
        ko: "온라인 세션과 로비, 패킷 ID·타입 매핑, 서버·클라이언트 게임 진행 처리, 스테이지 로딩, 인벤토리·미션·부활·게임오버 UI 연결을 담당했습니다.",
        en: "Worked on online sessions and the lobby, packet ID/type mapping, server/client gameplay flow, stage loading, and UI integration for inventory, missions, revival, and game over.",
      },
      stack: ["Unreal Engine 5.3", "C++", "EOSPlus", "Steam", "RPC", "USTRUCT"],
      image: { src: "./assets/nirvana-gameplay.png", alt: "Nirvana two-player combat gameplay" },
      links: [
        { label: { ko: "플레이 영상", en: "Play video" }, href: "https://www.youtube.com/watch?v=IK2acnw1DHY", value: "YouTube" },
        { label: { ko: "공개 코드", en: "Public code" }, href: "https://github.com/yuchanahn/-", value: "GitHub" },
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
      description: {
        ko: "플레이어가 횡스크롤 스테이지를 이동하며 여러 몬스터와 전투하는 Unity 2D 액션 게임입니다. 대학교 1학년 때 진행한 팀 프로젝트로, 몬스터의 인식부터 이동·공격·피격·사망까지 이어지는 흐름을 중심으로 개발했습니다.",
        en: "A Unity 2D side-scrolling action game in which the player traverses stages and fights multiple monster types. Built as a first-year university team project, with work centered on the full monster flow from perception through movement, combat, damage, and death.",
      },
      contribution: {
        ko: "행동 트리, 몬스터별 AI와 상태 관리, 스턴·슬로우·넉백, 전투 오브젝트 재사용을 구현했습니다. 공개 JPS 코드는 Unity 좌표와 몬스터 이동에 연결하고 반복 계산을 작업 스레드로 분리했습니다.",
        en: "Implemented behavior trees, per-monster AI and state handling, stun, slow, knockback, and combat-object reuse. Connected an open JPS implementation to Unity coordinates and monster movement and moved repeated rebuilds to a worker thread.",
      },
      stack: ["Unity", "C#", "Behavior Tree", "Monster AI", "JPS Integration", "Multithreading"],
      image: {
        src: "./assets/tower-of-ukani-gameplay.jpg",
        alt: "Tower of Ukani gameplay with multiple monsters",
        position: "center 46%",
      },
      links: [
        { label: { ko: "프로젝트", en: "Project" }, href: "https://github.com/yuchanahn/Tower_Of_Ukani", value: "GitHub" },
        { label: { ko: "플레이 영상", en: "Play video" }, href: "https://www.youtube.com/watch?v=aay9sGB_U9c", value: "YouTube" },
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
      description: {
        ko: "Unity 2021.3으로 제작한 2D 횡스크롤 액션 게임입니다. 2022–2023년 팀 프로젝트에서 플레이어 조작과 전투를 중심으로 설정 화면, 컷신 데이터와 저장 기능까지 한 게임 흐름으로 연결했습니다. 이후 P2P 롤백 실험에서는 이 프로젝트의 화면 리소스 일부만 재사용했습니다.",
        en: "A 2D side-scrolling action game built with Unity 2021.3. In this 2022–2023 team project, player control and combat were connected with settings, cutscene data, and save files into one game flow. Only some visual assets were later reused in the separate P2P rollback experiment.",
      },
      contribution: {
        ko: "이동·점프·콤보·차지·방어·회피·패링, 입력 매핑과 키 변경 UI, Google Sheets 기반 대사 로딩, 진행 상태와 설정 저장을 구현했습니다.",
        en: "Implemented movement, jumping, combos, charge attacks, defense, rolls and parries, input mapping and rebinding UI, Google Sheets dialogue loading, and progress and settings saves.",
      },
      stack: ["Unity 2021.3", "C#", "Animation Event", "Google Sheets", "JSON"],
      image: {
        src: "./assets/vapor-gameplay.png",
        alt: "Vapor gameplay combat scene",
        fit: "contain",
        background: "#0b0b0b",
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
        ko: "Vapor의 화면 리소스 일부를 재사용해 Godot와 Rust의 UDP 입력 동기화와 rollback 재시뮬레이션을 검증한 별도 프로젝트입니다.",
        en: "A separate Godot and Rust project that reused some Vapor visual assets to test UDP input synchronization and rollback resimulation.",
      },
      description: {
        ko: "Vapor와는 코드와 목적이 다른 2025년 개인 실험입니다. 화면과 애니메이션을 빠르게 구성하기 위해 Vapor 리소스 일부를 사용했고, Godot은 화면과 입력에, Rust GDExtension은 UDP 통신과 tick 단위 게임 계산에 사용했습니다. 같은 게임에서 입력 지연 방식과 rollback 방식을 비교했습니다.",
        en: "A 2025 personal experiment with code and goals separate from Vapor. Some Vapor assets were reused to assemble the visuals and animation quickly. Godot handled presentation and input, while a Rust GDExtension implemented UDP transport and tick-based simulation. Input delay and rollback were compared in the same game.",
      },
      contribution: {
        ko: "상대 주소 등록과 UDP 연결 시도, bit 단위 입력 기록, 최근 30tick 중복 전송, 입력 예측, world snapshot과 불일치 시점부터의 재시뮬레이션을 구현했습니다.",
        en: "Implemented peer endpoint registration and UDP connection attempts, bit-packed input history, overlapping 30-tick packets, input prediction, world snapshots, and resimulation from the first mismatched tick.",
      },
      stack: ["Godot", "Rust", "GDExtension", "UDP", "Rollback", "Tick Simulation"],
      image: {
        src: "./assets/p2p-rollback-gameplay.png",
        alt: "Two P2P rollback game clients running side by side",
        fit: "contain",
        background: "#111111",
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
      description: {
        ko: "Bybit 거래소의 실시간 호가와 포지션을 받아 주문 전략에 연결한 C++ 개인 학습 프로젝트입니다. 공개·비공개 WebSocket과 주문 REST API를 한 실행 흐름에서 사용했습니다.",
        en: "A personal C++ study project connecting Bybit real-time order books and positions to order logic. Public and private WebSockets and the trading REST API run in one application flow.",
      },
      contribution: {
        ko: "호가 snapshot과 변경 event 처리, 포지션 상태 갱신, 시장가·지정가·청산 주문, API parameter 구성과 OpenSSL HMAC-SHA256 서명을 구현했습니다.",
        en: "Implemented order-book snapshots and updates, position-state updates, market, limit, and close orders, API parameter construction, and OpenSSL HMAC-SHA256 signing.",
      },
      stack: ["C++", "WebSocket", "REST API", "OpenSSL", "HMAC-SHA256", "JSON"],
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
      description: {
        ko: "D와 Nim으로 거래소 주문·포지션 상태와 자동매매 흐름을 구현한 학습 프로젝트입니다. 실행 중인 주문 정보를 저장하고 프로세스가 다시 시작될 때 거래소 상태를 기준으로 이어서 처리했습니다.",
        en: "Study projects in D and Nim implementing exchange order and position state for automated trading. Active order data was persisted and reconciled against exchange state after process restarts.",
      },
      contribution: {
        ko: "실시간 주문 수신, 주문 상태 저장, 프로세스 재시작 뒤 주문·포지션 복구와 전략 상태 연결을 구현했습니다.",
        en: "Implemented real-time order handling, persisted order state, recovery of orders and positions after restart, and strategy-state integration.",
      },
      stack: ["D", "Nim", "WebSocket", "REST API", "State Recovery"],
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
        "ko": "조회와 채팅 저장의 부하 조건을 나눠 DB 병목을 확인했습니다",
        "en": "Separated read and chat-write load conditions to identify database bottlenecks"
      },
      lead: {
        "ko": "캐시 유무를 비교하는 조회 테스트와 채팅 저장 구조의 A/B 테스트를 따로 실행해, 처리량과 DB 연결 점유를 구분해서 확인했습니다.",
        "en": "Ran separate cache comparisons and chat-persistence A/B tests to distinguish throughput from database connection pressure."
      },
      paragraphs: {
        "ko": [
          "캐릭터 목록은 Redis에 캐시하고 수정 시 관련 키를 무효화했습니다. 100 VU random-key 조회 실험에서는 no-cache와 Redis 경로의 p99가 각각 596.33ms와 239.04ms였고 HTTP 실패는 모두 0%였습니다. 별도의 과부하 실험에서는 대기 시간 없이 요청을 투입하고 응답 본문을 축약해 DB/cache 처리 한계를 확인했습니다. 약 590·1,760 RPS는 각 경로가 포화된 구간의 관측값이며, 요청 투입 누락이 발생한 수치입니다.",
          "채팅 저장은 외부 LLM을 mock으로 대체하고, 5,000개 가상 사용자에 10~60초 대기 시간을 둔 A/B 실험으로 비교했습니다. 메시지·세션 갱신의 DB 왕복을 줄이고 채팅 환불 원장을 사용자별로 합산한 후보에서 DB pool 최대 사용은 79/80에서 10/80으로, 측정 중 최대 DB ping은 409.32ms에서 2.14ms로 감소했습니다.",
          "다만 최종 실행의 HTTP 실패율은 1.82%였으므로 이를 5,000명 안정 수용이나 채팅 응답 2ms로 해석하지 않았습니다. 종료 후 가상 사용자 5,000명의 잔액과 원장 합계 불일치가 0건인지 확인했고, 동시 환불의 잠금과 실제 결제 원장 보존을 보강한 뒤 저장 최적화를 실제 채팅 경로에 적용했습니다."
        ],
        "en": [
          "Character-list reads use Redis with invalidation on edits. A 100-VU random-key experiment measured p99 of 596.33ms without cache and 239.04ms with Redis, both with zero HTTP failures. A separate overload experiment removed think time and shortened response bodies to isolate DB/cache capacity. Roughly 590 and 1,760 RPS were observations in saturated runs with dropped iterations, not stable service capacity.",
          "Chat persistence was compared using mocked external LLM calls, 5,000 synthetic users, and 10–60-second think times. Reducing database round trips for messages and sessions and coalescing chat-refund ledgers reduced peak pool usage from 79/80 to 10/80 and the maximum observed DB ping from 409.32ms to 2.14ms.",
          "The final run still had 1.82% HTTP failures, so it did not establish stable capacity for 5,000 users or a 2ms chat response. Credit balances matched ledger totals for all 5,000 synthetic users after the run. I strengthened concurrent-refund locking and preservation of real payment ledgers before promoting the persistence changes to the live chat route."
        ]
      },
      metrics: [
        {
          "label": {
            "ko": "100 VU 조회 p99 · 캐시 비교",
            "en": "100-VU read p99 · cache comparison"
          },
          "before": "596.33ms",
          "after": "239.04ms"
        },
        {
          "label": {
            "ko": "최대 DB 연결 · 저장 A/B",
            "en": "Peak DB connections · persistence A/B"
          },
          "before": "79/80",
          "after": "10/80"
        },
        {
          "label": {
            "ko": "최대 DB ping · 저장 A/B",
            "en": "Max DB ping · persistence A/B"
          },
          "before": "409.32ms",
          "after": "2.14ms"
        }
      ],
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
        "ko": "iPhone 입력창 문제의 해결 후보를 같은 화면에서 비교했습니다",
        "en": "Compared candidate fixes for iPhone keyboard behavior in one test screen"
      },
      lead: {
        "ko": "에이전트로 비교용 화면을 빠르게 만들고 iPhone에서 직접 시험해, 화면에 보이는 입력창과 실제 포커스 대상을 분리하는 방식을 선택했습니다.",
        "en": "Used an agent to build a comparison screen, then tested on an iPhone and selected a design separating the visible input from the actual focus target."
      },
      paragraphs: {
        "ko": [
          "전체 화면 캐릭터 위에 하단 입력창을 배치하자 iPhone 브라우저가 키보드를 열면서 화면 전체를 밀었습니다. 직접 자료를 읽고 에이전트에도 탐색을 맡겨 프로젝트에 적용할 만한 후보 3~4개를 추렸습니다. 각 방식을 탭으로 전환하는 비교 화면을 만들도록 지시해 같은 기기에서 차이를 바로 확인했습니다.",
          "비교 결과, 표시용 입력창을 누르면 별도의 실제 입력 요소에 포커스를 넘기는 방식이 빠르게 동작했습니다. 구현에서는 `realInput.focus({ preventScroll: true })`로 포커스를 전달하고, `innerHeight`, `visualViewport.height`, `offsetTop`으로 계산한 키보드 영역만큼 입력 wrapper를 이동합니다. 키보드가 닫힌 뒤 남는 위치 차이도 확인해 복귀시켰습니다.",
          "후보 구현을 빠르게 준비하는 데 에이전트를 사용하고, 실제 기기에서의 비교와 적용 방식 결정, 후속 구현은 직접 진행했습니다. 설명만 읽고 한 가지 해법을 채택하기보다 동작하는 후보를 나란히 놓고 판단한 경험입니다."
        ],
        "en": [
          "A bottom input over a full-screen character caused the iPhone browser to push the whole scene when opening the keyboard. I read references and used an agent for research, narrowed the options to three or four, and asked it to build a tabbed comparison screen so I could test each on the same device.",
          "The option that quickly worked transferred focus from a display input to a separate real input. The implementation uses `realInput.focus({ preventScroll: true })` and translates the input wrapper by the keyboard region calculated from `innerHeight`, `visualViewport.height`, and `offsetTop`. A post-close check restores any remaining offset.",
          "The agent accelerated preparation of the candidate implementations. I tested them on the device, chose the approach, and carried out the subsequent implementation. Comparing working alternatives made the decision more concrete than choosing from written explanations alone."
        ]
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
          "카드와 목록에서는 화면에 필요한 크기의 이미지만 내려받도록 바꿔, 원본 이미지를 반복해서 요청하던 흐름을 줄였습니다.",
        ],
        en: [
          "The character hub rendered slowly, so I inspected the Network panel. Although cards displayed small images, their URLs still pointed at the uploaded originals.",
          "I added a shared URL transformer. Character cards request width 480 at quality 72, while chat lists and avatars request 96×96 assets. Detail views and failed transformations can still use the original URL.",
          "Cards and lists now download images sized for their actual display area instead of repeatedly requesting full-resolution originals.",
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
          "초기 번역과 반복적인 누락 확인에는 AI 에이전트의 도움을 많이 받았고, 실제 UI 길이와 서비스 용어, 변수 치환을 직접 확인해 수정했습니다.",
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
          "여러 명이 동시에 만드는 Unreal 프로젝트에서 네트워크 권한, 비동기 콜백, UI 상태와 레벨 수명을 함께 다뤘습니다.",
        ],
        en: [
          "My scope covered online sessions and the lobby, server/client gameplay flow, stage loading, and the UI paths for inventory, missions, revival, and game over. Other programmers led player combat and monster AI; I connected those systems to the shared two-player server flow and UI.",
          "Late in development, much of my work was integrating features from different programmers into a complete two-player run. I fixed session-join failures, two-player crashes, monster health and shield synchronization, loading-completion timing, and conflicting inventory interactions.",
          "The project required handling network authority, asynchronous callbacks, UI state, and level lifetime together in Unreal.",
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
          "프로젝트 설정은 EOSPlus를 기본 서비스, Steam을 native platform으로 두고 Steam 계정 ID를 외부 자격 정보로 넘기도록 구성했습니다. Steam 로그인 정보를 EOSPlus 세션 흐름에 연결해 계정 확인부터 방 검색과 합류까지 이어지는 경로를 구현했습니다.",
        ],
        en: [
          "`UOSS` centralizes delegates for create, find, join, destroy, login, invite acceptance, and network failures. The game-specific `UNrvOss` tracks an `Init → Searching → Found → Joining → Joined` state so the main menu can show progress and avoid duplicate requests.",
          "The host opens the lobby as a listen server after `CreateSession` completes. A guest validates the search result, calls `JoinSession`, resolves the connect string inside the join callback, and then performs `ClientTravel`. I also made a failed search return to a state from which the user could search again.",
          "The project configured EOSPlus as the default service and Steam as the native platform, passing the Steam account ID into the external-credential path. This connected Steam sign-in to the EOSPlus flow from identity checks through room discovery and joining.",
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
      featured: true,
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
          "이 방식으로 Unreal RPC가 여러 액터에 흩어지는 것을 줄이고, 인벤토리 조작부터 전투 상태와 미션 진행까지 서버 코드에서 한 흐름으로 처리했습니다.",
        ],
        en: [
          "A teammate first built the byte-level serialization foundation. I wrote the mapping and binding code that connects packet IDs to `FPac_*` USTRUCT types, added feature-specific packets, and implemented gameplay handling in `Server.cpp` and `Client.cpp` for inventory, supporting combat state, missions, revival, and other run-state changes.",
          "Client input and UI actions travel through reliable RPCs on `ANetPC` into the server dispatch queue. The server checks item-drag ownership and decides item rewards, entity health and shields, remaining monsters, soul gauge, revival, and game-over state before sending the result to one or both clients. Each client applies the response to its local world state and HUD.",
          "This reduced RPC logic scattered across actors and kept inventory interactions, combat state, and mission progress in one server-side flow.",
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
          "제가 수정한 부분은 몽타주 재생 상태가 서로 달라지는 조건을 찾고, 섹션 이동과 일시정지·재개·재전송 흐름을 보완한 작업입니다.",
        ],
        en: [
          "The server observes the active montage and section and sends a multicast RPC when either changes. I revised section-jump and resume calls, passed montage play rate through the RPC, and added a replay path that resends the current montage.",
          "Client/server time difference is derived from an offset calculated with `FPac_TimeSync`. On resume, the client calculates playback time from the shared clock and calls `Montage_SetPosition`; a section change moves to that section's start.",
          "My changes focused on identifying when montage state diverged and revising section changes, pause/resume, and replay paths.",
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
      featured: true,
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
        ],
        en: [
          "Network payloads use `USTRUCT` and `UPROPERTY` so Unreal serialization can handle them, while `UFUNCTION(Server/Client/NetMulticast, Reliable)` defines transport boundaries. Actor and widget lifetime follows Unreal types and checks such as `IsValid`, `TObjectPtr`, `TArray`, and `TMap`.",
          "Server and client handlers group packet channels with `std::variant` and invoke type-specific lambdas. `std::views::filter` selects valid entities, packet concepts and generic lambdas share send paths, and `ErrorOr` carries pointer or lookup failures to the caller. Some utilities are shared team code; my work used them in gameplay and expanded the packet and handler set.",
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
      id: "p2p-overview",
      order: 410,
      project: "p2p",
      category: { ko: "프로젝트 개요", en: "Project Overview" },
      tags: ["game-server", "game-client", "rust", "network", "realtime", "performance"],
      title: {
        ko: "입력 지연 방식부터 rollback까지 같은 게임으로 비교했습니다",
        en: "Compared input-delay and rollback approaches in the same game",
      },
      lead: {
        ko: "Godot의 화면과 입력은 그대로 두고, Rust GDExtension에서 UDP 통신과 tick 단위 게임 계산을 구현했습니다.",
        en: "Kept Godot for presentation and input while implementing UDP transport and tick-based game simulation in a Rust GDExtension.",
      },
      paragraphs: {
        ko: [
          "첫 버전은 왕복 지연을 tick으로 환산해 입력을 미래 tick에 예약하고, 양쪽 입력 확인이 끝난 tick만 실행하는 delay 방식이었습니다. 구현은 단순했지만 네트워크 지연이 커질수록 내 조작도 늦게 반응했습니다.",
          "rollback 브랜치에서는 입력을 먼저 예측해 현재 tick을 진행하고, 나중에 받은 입력이 예측과 다르면 저장한 world로 돌아가 현재 tick까지 다시 계산했습니다. 이를 위해 입력 기록, world snapshot과 일정한 tick 기반 시뮬레이션을 추가했습니다.",
        ],
        en: [
          "The first version converted round-trip latency into ticks, scheduled input in a future tick, and advanced only after both inputs were acknowledged. It was simple, but higher network latency directly delayed local control.",
          "The rollback branch predicts missing input and advances immediately. If a later packet differs from the prediction, it restores a stored world and simulates forward to the current tick using recorded input.",
        ],
      },
      links: [
        { label: { ko: "프로젝트 코드", en: "Project code" }, href: "https://github.com/yuchanahn/p2pactiongame/tree/rollback", value: "GitHub · rollback" },
      ],
    },
    {
      id: "p2p-udp-session",
      order: 412,
      project: "p2p",
      category: { ko: "UDP 연결", en: "UDP Connection" },
      tags: ["game-server", "game-client", "rust", "network", "realtime"],
      title: {
        ko: "등록 서버에서 상대 주소를 받은 뒤 UDP 직접 연결을 시도했습니다",
        en: "Attempted a direct UDP connection after receiving the peer endpoint",
      },
      lead: {
        ko: "상대방의 내부·외부 주소를 전달받아 같은 공유기 안의 주소, 공인 주소, 중계 주소 순서로 연결 경로를 바꿨습니다.",
        en: "Received the peer's private and public endpoints, then changed the connection path from LAN to public and finally relay fallback.",
      },
      image: { src: "./assets/p2p-session-flow.svg", alt: "P2P endpoint registration and UDP connection attempts" },
      code: {
        language: "rust",
        caption: { ko: "내부 주소를 먼저 시도한 뒤 다음 연결 후보로 전환", en: "Trying the private endpoint before moving to the next candidate" },
        source: "src/network_controller.rs",
        text: `PacketType::GetEndpoint => {
  let (ep, _) = unpack::<Endpoint>(&buffer[1..]).unwrap();
  let mut packet = pack::<u8>(&0, PacketType::HolePunch);
  packet.insert(0, (packet.len() + 1) as u8);
  let sock = net_data.socket.as_ref();
  sock.unwrap().connect(ep.local_addr).expect("Failed to connect");
  send_bytes(sock, &packet, ep.local_addr.to_string().as_str());

  self.peer_addr = Some(ep.clone());
  self.time_out1 = timestamp + 3000;
}`,
      },
      paragraphs: {
        ko: [
          "클라이언트는 UDP socket을 임의 port에 열고 등록 서버에 자신의 endpoint를 보냈습니다. 서버에서 상대방의 local address와 public address를 받으면 내부 주소로 먼저 hole-punch packet을 보내고, 응답이 없으면 일정 시간 뒤 공인 주소를 다시 시도했습니다. 마지막에는 등록 서버 주소를 중계 경로로 사용하도록 전환했습니다.",
          "수신은 별도 thread에서 담당하고, 주소별 packet queue를 `Mutex<HashMap<SocketAddr, Vec<Vec<u8>>>>`에 넣었습니다. Godot의 physics loop에서는 queue를 비운 뒤 packet type에 따라 연결, ping·pong, 입력과 시간 동기화를 처리했습니다. 여러 packet은 1byte 길이를 앞에 붙여 하나의 UDP payload로 묶었습니다.",
        ],
        en: [
          "The client opens a UDP socket on an ephemeral port and registers its endpoint. After receiving the peer's private and public addresses, it first sends a hole-punch packet to the LAN address, retries through the public address after a timeout, and finally switches to the registration server address as a relay fallback.",
          "A receive thread groups packets by sender in a mutex-protected queue. The Godot physics loop drains the queue and handles connection, ping/pong, input, and time synchronization. Multiple packets are concatenated into one UDP payload with a one-byte length prefix.",
        ],
      },
      links: [
        { label: { ko: "연결 코드", en: "Connection code" }, href: "https://github.com/yuchanahn/p2pactiongame/blob/rollback/src/network_controller.rs", value: "network_controller.rs" },
        { label: { ko: "패킷 코드", en: "Packet code" }, href: "https://github.com/yuchanahn/p2pactiongame/blob/rollback/src/udp_net.rs", value: "udp_net.rs" },
      ],
    },
    {
      id: "p2p-input-history",
      order: 414,
      project: "p2p",
      category: { ko: "입력 동기화", en: "Input Synchronization" },
      tags: ["game-server", "game-client", "rust", "network", "realtime"],
      title: {
        ko: "한 tick의 조작을 6bit로 묶고 최근 30tick을 함께 보냈습니다",
        en: "Packed one tick of controls into six bits and resent 30 ticks of history",
      },
      lead: {
        ko: "UDP packet 하나가 유실돼도 다음 packet으로 최근 입력을 다시 받을 수 있도록 입력 기록을 겹쳐 전송했습니다.",
        en: "Overlapped input history so a later UDP packet could recover recent input after packet loss.",
      },
      image: { src: "./assets/p2p-input-history.svg", alt: "P2P bit-packed input history packet" },
      code: {
        language: "rust",
        caption: { ko: "키 상태를 bit flag로 만들고 tick별로 기록", en: "Encoding key state as bit flags per tick" },
        source: "src/input_controller.rs",
        text: `let mut input2send: u8 = 0;
if input.is_action_pressed("d".into())      { input2send |= 0b0001; }
if input.is_action_pressed("a".into())      { input2send |= 0b0010; }
if input.is_action_pressed("w".into())      { input2send |= 0b0100; }
if input.is_action_pressed("attack".into()) { input2send |= 0b1000; }
if input.is_action_pressed("roll".into())   { input2send |= 0b10000; }
if input.is_action_pressed("guard".into())  { input2send |= 0b100000; }

self.inputs.insert(tick, input2send);`,
      },
      paragraphs: {
        ko: [
          "좌우 이동, 점프, 공격, 회피와 방어를 `u8`의 각 bit에 배치했습니다. 로컬 입력은 현재 game tick보다 3tick 뒤의 key로 저장하고, `InputPacket`에는 기준 tick과 `[u8; 30]` 배열을 넣었습니다.",
          "매 tick 새 입력만 보내는 대신 보관 중인 최근 30tick을 packet에 다시 채웠습니다. 별도의 신뢰성 계층이나 매 packet 재전송 요청 없이도 다음 UDP packet이 도착하면 직전에 빠진 입력을 함께 복구할 수 있게 한 방식입니다.",
        ],
        en: [
          "Left, right, jump, attack, roll, and guard occupy individual bits in a `u8`. Local input is stored three ticks ahead, and each `InputPacket` carries a reference tick plus a `[u8; 30]` history array.",
          "Instead of sending only the newest input, every packet overlaps the latest 30 ticks. A later UDP packet can therefore recover recently lost input without a separate reliable channel or per-packet retransmission request.",
        ],
      },
      links: [
        { label: { ko: "입력 코드", en: "Input code" }, href: "https://github.com/yuchanahn/p2pactiongame/blob/rollback/src/input_controller.rs", value: "input_controller.rs" },
      ],
    },
    {
      id: "p2p-rollback",
      order: 416,
      project: "p2p",
      category: { ko: "Rollback", en: "Rollback" },
      tags: ["game-server", "game-client", "rust", "network", "realtime", "performance"],
      featured: true,
      title: {
        "ko": "상대만 되돌려서는 해결되지 않아 월드 상태를 복원하도록 바꿨습니다",
        "en": "Changed rollback from restoring only the remote player to restoring world state"
      },
      lead: {
        "ko": "처음에는 늦게 받은 입력의 주인인 상대 플레이어만 되돌리면 된다고 생각했습니다. 하지만 상대의 공격이 바뀌면 내 체력과 상태도 함께 달라질 수 있었습니다.",
        "en": "I initially thought only the remote player needed to rewind. But a changed remote attack could also change my own character’s health and state."
      },
      image: { src: "./assets/p2p-rollback-flow.svg", alt: "P2P input prediction, mismatch detection, and rollback resimulation" },
      code: {
        language: "rust",
        caption: { ko: "원격 입력이 없으면 snapshot 저장 후 직전 입력으로 예측", en: "Saving a snapshot and predicting with the previous remote input" },
        source: "src/network_controller.rs",
        text: `if !target_player_input.contains_key(&cur_tick) {
  self.world_snapshot.insert(cur_tick, self.world.clone());
  let remote = player_input.get_mut(&(port as u64)).unwrap();
  remote.insert(
    cur_tick,
    remote.get(&(cur_tick - 1)).or(Some(&0)).unwrap().clone()
  );
}

self.world = simulate_world(self.world.clone(), current_inputs, cur_tick);`,
      },
      paragraphs: {
        "ko": [
          "처음에는 상대의 과거 입력을 다시 적용하는 데 집중했습니다. 그러나 두 플레이어가 공격과 충돌로 서로에게 영향을 주므로 상대 상태만 복원하면 같은 시점의 게임으로 돌아간 것이 아니었습니다. 복원 대상을 두 플레이어와 충돌 등 전투 계산에 영향을 주는 논리 상태로 넓히고, 이를 복제 가능한 `WorldData`에 모았습니다.",
          "상대 입력이 없을 때는 계산 전 world를 저장하고 직전 입력으로 예측해 진행했습니다. 이후 받은 최근 30tick 입력과 예측값이 처음 달라진 시점의 snapshot을 복원하고, 두 플레이어의 입력을 `simulate_world_range`에 다시 적용해 현재까지 계산했습니다. 상대 캐릭터의 표시를 보정하는 문제에서 월드의 과거 상태를 복원하는 문제로 이해가 바뀐 것입니다.",
          "홀펀칭 후 친구 PC와 연결해 실제로 동작을 시험했습니다. 다만 fixed tick과 tick 기반 난수를 사용한 것만으로 결정론이 검증된 것은 아닙니다. 자료구조 순회 순서와 부동소수점 차이를 state hash로 확인하고, 재실행 구간별 계산 시간을 측정해 한 프레임의 롤백 예산을 정하는 작업은 후속 연구로 남겨두었습니다."
        ],
        "en": [
          "I first focused on reapplying the remote player’s past input. Attacks and collisions affect both players, however, so restoring only one player does not restore the game to a consistent past moment. I expanded the snapshot to both players and the logical state involved in combat, including collisions, and collected it in cloneable `WorldData`.",
          "When remote input was missing, I saved the pre-simulation world and advanced using the previous input. On receiving the recent 30-tick history, I restored the snapshot at the earliest mismatch and reapplied both players’ inputs through `simulate_world_range` to reach the current tick. I came to understand rollback as restoring past world state rather than correcting the remote character’s display.",
          "I tested the game with a friend’s PC after hole punching. Fixed ticks and tick-based randomness alone do not establish determinism. State-hash checks across collection order and floating-point behavior, and timing replay windows to set a per-frame rollback budget, remain follow-up research."
        ]
      },
      links: [
        { label: { ko: "Rollback 코드", en: "Rollback code" }, href: "https://github.com/yuchanahn/p2pactiongame/blob/rollback/src/network_controller.rs", value: "network_controller.rs" },
      ],
    },
    {
      id: "p2p-world-simulation",
      order: 418,
      project: "p2p",
      category: { ko: "재시뮬레이션", en: "Resimulation" },
      tags: ["game-server", "game-client", "rust", "network", "realtime"],
      featured: true,
      title: {
        ko: "되돌려 실행할 상태와 한 tick의 게임 계산을 별도 구조로 모았습니다",
        en: "Collected rewindable state and one-tick simulation into dedicated structures",
      },
      lead: {
        ko: "위치·속도·체력·애니메이션 tick을 `WorldData`에 모으고 같은 입력으로 과거 구간을 반복 계산하도록 만들었습니다.",
        en: "Collected position, velocity, health, and animation tick state in `WorldData` and replayed past ranges from recorded input.",
      },
      image: { src: "./assets/p2p-world-simulation.svg", alt: "P2P world snapshot and resimulation boundary" },
      code: {
        language: "rust",
        caption: { ko: "저장한 world와 tick별 입력으로 구간 재계산", en: "Recomputing a tick range from stored world and input" },
        source: "src/world.rs",
        text: `for tick in start_tick..end_tick {
  if tick > real_input_tick {
    snapshot.insert(tick, world_data.clone());
  }
  for (id, input) in input_data.iter() {
    let player = world_data.players.get_mut(id).unwrap();
    let (next, action, cols) = simulate_player(
      player.clone(), &world_data.collision,
      input[&tick], tick, 1.0 / 60.0
    );
    world_data.players.insert(*id, next);
    world_data.collision = cols;
    if let Some(action) = action {
      action_process(vec![action], &mut world_data, tick);
    }
  }
}`,
      },
      paragraphs: {
        ko: [
          "플레이어의 위치·속도·체력·공격 대기 시간과 애니메이션 시작 tick을 복제 가능한 `WorldData`와 `PlayerData`에 모았습니다. 한 tick 계산은 1/60초 고정 delta를 받고 이동, 점프, 공격·회피·방어, 충돌과 대미지 적용 결과를 다음 world로 돌려줬습니다.",
          "Godot physics query 대신 Box·Circle 충돌 자료형과 cast 함수를 만들었고, 공격 대미지는 동일 tick에서 같은 값이 나오도록 tick을 seed로 한 Xorshift 난수를 사용했습니다. 애니메이션 frame도 경과 시간 대신 시작 tick과 현재 tick으로 계산했습니다.",
        ],
        en: [
          "`WorldData` and `PlayerData` hold cloneable position, velocity, health, attack cooldown, and animation-start tick. One simulation tick uses a fixed 1/60 delta and produces the next state after movement, jump, attack, roll, guard, collision, and damage handling.",
          "Custom box and circle collision helpers replace Godot physics queries for these interactions. Damage uses an Xorshift generator seeded from the tick, while animation frames are derived from start and current tick instead of elapsed wall time.",
        ],
      },
      links: [
        { label: { ko: "시뮬레이션 코드", en: "Simulation code" }, href: "https://github.com/yuchanahn/p2pactiongame/blob/rollback/src/world.rs", value: "world.rs" },
        { label: { ko: "충돌 코드", en: "Collision code" }, href: "https://github.com/yuchanahn/p2pactiongame/blob/rollback/src/col2d.rs", value: "col2d.rs" },
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
        ],
        en: [
          "Shared ground and flying behavior was separated into `GroundMob_Base` and `FlyingMob_Base`, while Slime, Flower Bat, and Weeping Mist composed their own actions through components and blackboards. Common follow and attack behavior could be reused while adding monster-specific actions such as fleeing, ceiling hanging, teleporting, and area attacks.",
          "Movement, animation, and behavior-tree code all checked whether a monster was attacking, hurt, stunned, or being knocked back. The same flow connected item drops, pooled corpse pieces, health bars, and damage text after death.",
        ],
      },
    },
    {
      id: "tower-behavior-tree",
      order: 422,
      project: "tower",
      category: { ko: "행동 트리", en: "Behavior Tree" },
      tags: ["game-client", "unity", "csharp", "collaboration"],
      featured: true,
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
        ],
        en: [
          "`BT_Base` implements Root, Selector, Sequence, Decorator, Service, and Task nodes. Each node uses its `Process()` result to decide whether traversal continues, while chained `AddNode()` and `End()` calls keep the tree visible in code. Services track per-node time for periodic work.",
          "Blackboards connect the tree to monster components. Flower Bat checks stop, attack, flee, follow, ceiling-hang, and random-move behavior in order. Slime uses hurt, attack, follow, and random movement, while Weeping Mist gives teleport and stun higher priority.",
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
        ],
        en: [
          "`StatusEffect_Object` stores speed, effect direction, attack and follow permission, turning, behavior suspension, animation, and knockback curves. `GroundMob_Base` and `FlyingMob_Base` read those values when deciding Rigidbody velocity, animation, and available actions.",
          "Stun stops movement, attack, and follow behavior and selects a stunned animation. Slow keeps a list of active reductions, while knockback passes a direction and `AnimationCurve` to produce decaying velocity. Effect components are added at runtime and removed when their timer ends.",
        ],
      },
    },
    {
      id: "tower-pathfinding-worker",
      order: 426,
      project: "tower",
      category: { ko: "길찾기 적용", en: "Pathfinding Integration" },
      tags: ["game-client", "unity", "csharp", "pathfinding", "performance"],
      featured: true,
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
        "language": "csharp",
        "caption": {
          "ko": "당시 단일 worker 구현 · 빈 큐에서 대기하지 않는 한계",
          "en": "Original single worker · no waiting when the queue is empty"
        },
        "source": "Assets/Devs/Yuchan/System/Thread/YCThreadPool.cs",
        "text": "while (!t1_stop) {\n  while (!Works.IsEmpty) {\n    Works.TryDequeue(out act);\n    act.Invoke();\n  }\n}"
      },
      paragraphs: {
        "ko": [
          "프로젝트에 포함된 JPS 구현의 `GridView`와 `Grid`를 읽고 월드 좌표를 grid point로 변환하는 코드, 맵 이름과 대상 크기별 pathfinder 등록, 계산된 point를 몬스터 이동 벡터로 바꾸는 코드를 연결했습니다. 꽃잎박쥐의 추적과 임의 이동에서 이 경로를 사용했습니다.",
          "움직이는 발판이 차지하던 node를 해제하고 새 위치의 node를 장애물로 표시하도록 갱신했습니다. 장애물 변경 뒤 jump-point를 다시 만드는 작업은 `ConcurrentQueue<Action>`에 넣고 단일 worker가 처리하도록 만들어 메인 스레드에서 반복 계산하는 구간을 분리했습니다.",
          "현재 돌아보면 이 worker는 큐가 비어도 반복하며 CPU를 사용한다는 한계가 있습니다. 메인 스레드에서 작업을 분리한 구현 경험과 효율적인 대기·종료 설계는 구분해야 합니다. 다시 구현한다면 작업 도착을 기다리는 방식과 worker 종료 절차, grid를 읽고 갱신하는 시점의 동기화를 먼저 정리하겠습니다."
        ],
        "en": [
          "I read the included JPS `GridView` and `Grid` code and connected world-to-grid conversion, per-map and object-size pathfinder registration, and conversion of returned points into monster movement. Flower Bat used this path for follow and random-move behavior.",
          "Moving platforms clear their previous nodes and mark nodes at the new position as blocked. Rebuilding jump points after obstacle changes is queued through `ConcurrentQueue<Action>` and processed by a single worker instead of repeatedly running on the main thread.",
          "Looking back, this worker keeps spinning and consuming CPU when the queue is empty. Moving work off the main thread is distinct from designing efficient waiting and shutdown. A new implementation would first define how the worker waits for work, shuts down, and synchronizes grid reads with updates."
        ]
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
        ],
        en: [
          "The pool instantiates a configured count per prefab, dequeues an object, and resets its position and state through `SetOn()`. When empty it grows by the same configured amount, while `SetOff()` returns finished objects to the queue.",
          "On monster death, `CorpseMgr` takes corpse pieces from the pool and scatters them. Absorption moves them toward the player, shrinks them, and then returns them. Damage text and monster health bars follow similar short-lived reuse paths.",
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
        ],
        en: [
          "I implemented player movement, jump, attack, charge, defense, roll, hit, and death behavior and connected normal attacks, combos, charged attacks, and parries to animation events and collision handling. Named and tagged input mappings allowed gameplay and UI to share one input path.",
          "Settings persist key bindings, audio, and fullscreen choice, while scene changes store health, stamina, potions, and the next scene. Cutscene and NPC text is downloaded from Google Sheets as CSV, converted into dictionaries, and used by typing effects and tutorial events.",
        ],
      },
    },
    {
      id: "vapor-combat",
      order: 444,
      project: "vapor",
      category: { ko: "전투 구현", en: "Combat" },
      tags: ["game-client", "unity", "csharp"],
      featured: true,
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
          "공격 collider의 시작·종료, 이동 곡선과 이펙트는 `AnimEvBind`의 이름으로 애니메이션 이벤트와 연결해 애니메이션 프레임과 실제 판정 시점을 맞췄습니다.",
        ],
        en: [
          "A short press and release enters normal attack, while holding beyond the timer switches to charge. Combo count selects animation, damage multiplier, and effect, then resets after a timeout.",
          "`NormalAttack` registers hit callbacks and `ComboAttack`, `ChargingAttack`, and `ParringAttack` override only their specific rules. A parry checks the enemy's parry state, applies damage and `OnParriedHit()`, and then notifies the player controller of success.",
          "Attack collision windows, movement curves, and effects are connected to animation events through names in `AnimEvBind`, aligning hit timing with animation frames.",
        ],
      },
    },
    {
      id: "vapor-input-ui",
      order: 446,
      project: "vapor",
      category: { ko: "입력·UI", en: "Input & UI" },
      tags: ["game-client", "unity", "csharp"],
      featured: true,
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
        ],
        en: [
          "One- and two-dimensional axes and key mappings store a name, player or UI tag, current state, and callback. Player code binds names such as `Move`, `Jump`, `Attack`, and `Defence`, while interactions, potions, and settings use the same list.",
          "Opening `UIView` blocks the player tag, enables the UI tag, and sets `Time.timeScale` to zero. UI motion uses `Time.unscaledDeltaTime`, so the pointer and sliders keep moving while paused. Rebinding captures the next `KeyCode` and stores the mapping in JSON.",
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
        ],
        en: [
          "`UnityWebRequest` downloads the Google Sheets gviz CSV response. My `CsvParser` handles commas, newlines, quoted fields, and escaped double quotes, then the first row becomes column names in a nested dictionary.",
          "`CutsceneView` loads Story, NPC, and Intro_Cutscene sheets, and `PrintStory` renders the selected Text one character at a time. Other UI can request text with a `Sheet@Key` string, with typing audio and completion events connected to the same flow.",
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
        "language": "csharp",
        "caption": {
          "ko": "값이 없을 수 있는 제네릭 Load와 JSON Save",
          "en": "Nullable generic load and JSON save"
        },
        "source": "Assets/Scripts/System/SaveLoad.cs",
        "text": "public T? Load<T>() where T : struct {\n  try {\n    using StreamReader file = new(\n      $\"{filepath}/Save_{typeof(T).Name}.txt\");\n    return JsonConvert.DeserializeObject<T>(file.ReadToEnd());\n  } catch {\n    return null;\n  }\n}\n\npublic void Save<T>(T data) where T : struct {\n  using StreamWriter file = new(\n    $\"{filepath}/Save_{typeof(T).Name}.txt\");\n  file.WriteLine(\n    JsonConvert.SerializeObject(data, Formatting.Indented));\n}"
      },
      paragraphs: {
        ko: [
          "`save_ingame_data_t`에는 포션 수, 체력, 스태미나, 다음 scene과 새 게임 여부를 저장했습니다. scene이 바뀔 때 현재 값을 기록하고, 다음 scene에서 파일을 읽어 플레이어와 인벤토리에 다시 적용했습니다.",
          "키 mapping은 이름별 `KeyCode[]` dictionary로 저장했고, 사운드 master·BGM·SFX와 전체 화면 여부도 각각 별도 struct로 관리했습니다. 저장 파일이 없으면 nullable 결과를 받아 기본 설정이나 새 게임 흐름으로 넘어가게 했습니다.",
        ],
        en: [
          "`save_ingame_data_t` stores potion count, health, stamina, the next scene, and new-game state. Values are written during a scene change and applied back to the player and inventory in the following scene.",
          "Key mappings are stored as a dictionary of named `KeyCode[]` values, while master, BGM, SFX, and fullscreen settings use their own structs. A missing file returns a nullable result so the game can continue with defaults or a new-game path.",
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
        ],
        en: [
          "The public WebSocket applied BTCUSDT order-book snapshots and insert/delete events to local bid and ask prices. A private WebSocket received long and short position changes, while order creation, cancellation, balances, and reconciliation used REST APIs.",
          "Private requests sorted the API key, timestamp, and parameters into a signing string, then generated an OpenSSL HMAC-SHA256 signature. Market, limit, and reduce-only close orders shared the same parameter-building rule.",
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
    {
      id: "perochat-service-summary",
      order: 990,
      project: "perochat",
      category: { ko: "추가 프로젝트", en: "Additional Project" },
      tags: ["perochat-summary"],
      crossPortfolio: true,
      appendixOnly: true,
      skipProjectIntro: true,
      title: {
        ko: "PeroChat을 혼자 개발하고 실제 사용자에게 운영하고 있습니다",
        en: "Built PeroChat independently and operate it for real users",
      },
      lead: {
        ko: "대학 과제로 시작한 VRM+LLM 채팅을 캐릭터, 결제, 관리자 기능과 다국어 UI를 갖춘 웹 서비스로 확장했습니다.",
        en: "Expanded a university VRM and LLM chat prototype into a web service with characters, payments, admin tools, and multilingual UI.",
      },
      images: [
        { src: "./assets/perochat-chat.png", alt: "PeroChat 2D character chat screen" },
        { src: "./assets/perochat-mobile-live2d.png", alt: "PeroChat Live2D character chat screen on mobile" },
      ],
      paragraphs: {
        ko: [
          "SvelteKit 프런트엔드와 Go API, PostgreSQL과 Redis를 분리해 구성했습니다. 2D·Live2D·VRM 캐릭터 채팅, Supabase 인증과 이미지 변환, 실제 결제·취소·웹훅, 운영용 관리자 페이지를 직접 개발했습니다.",
          "한국어·영어·일본어 UI를 제공하고 Oracle Cloud 인스턴스에 Coolify로 배포해 실제 사용자 대상으로 운영하고 있습니다. 게임 프로젝트와 별개로, 하나의 서비스를 기획부터 배포와 운영까지 이어간 경험입니다.",
        ],
        en: [
          "The service separates a SvelteKit frontend, Go API, PostgreSQL, and Redis. I implemented 2D, Live2D, and VRM character chat, Supabase authentication and image transformation, real payment, cancellation and webhook flows, and an operations admin page.",
          "It provides Korean, English, and Japanese UI and runs on an Oracle Cloud instance deployed through Coolify. Separate from the game projects, it represents taking one service from planning through deployment and ongoing operation.",
        ],
      },
      links: [
        { label: { ko: "서비스", en: "Service" }, href: "https://personaxi.com", value: "personaxi.com" },
        { label: { ko: "공개 코드", en: "Public code" }, href: "https://github.com/yuchanahn/-", value: "GitHub" },
      ],
    },
  ],
};

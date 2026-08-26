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
        ko: "소켓·IOCP, 멀티스레드, 게임 넷코드와 성능 측정 경험",
        en: "Sockets, IOCP, multithreading, game netcode, and performance work",
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
      name: "PeroChat",
      period: "2025.05–현재",
      type: { ko: "개인 개발·운영", en: "Solo development and operations" },
      summary: {
        ko: "대학 과제로 시작한 VRM+LLM 웹 채팅을 2D·Live2D·VRM 캐릭터, 결제, 관리자 기능과 다국어 UI를 갖춘 서비스로 확장했습니다.",
        en: "A university VRM+LLM web-chat project expanded into a service with 2D, Live2D and VRM characters, payments, admin tools, and multilingual UI.",
      },
    },
    quickbite: {
      name: "QuickBite",
      period: { ko: "수개월간 운영", en: "Operated for several months" },
      type: { ko: "개인 개발·실사용", en: "Solo development, used in production" },
      summary: {
        ko: "교내 디저트 판매자의 주문 접수와 판매 관리를 위해 만들고 실제 요구에 맞춰 계속 수정한 웹사이트입니다.",
        en: "An ordering and sales-management site built for a dessert seller and iterated from real operational feedback.",
      },
    },
    nirvana: {
      name: "Nirvana",
      period: "2023.03–2023.11",
      type: { ko: "22명 팀 · 프로그래머 4명", en: "22-person team · 4 programmers" },
      summary: {
        ko: "Unreal Engine 5.3으로 제작한 2인 멀티플레이 액션 로그라이크 졸업 프로젝트입니다.",
        en: "A two-player multiplayer action roguelike capstone project built with Unreal Engine 5.3.",
      },
    },
    foundations: {
      name: { ko: "네트워크·시스템 학습", en: "Networking & systems foundations" },
      period: { ko: "고등학교–현재", en: "High school–present" },
      type: { ko: "개인 학습·실험", en: "Study and experiments" },
      summary: {
        ko: "소켓과 IOCP부터 P2P·롤백 실험까지 직접 구현하며 네트워크 프로그래밍을 공부했습니다.",
        en: "Networking studies ranging from sockets and IOCP to P2P and rollback experiments.",
      },
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
          "조회와 실제 2D 채팅 흐름을 별도 k6 시나리오로 만들었습니다. 조회 테스트에서 처리량은 약 590 RPS에서 1,760 RPS로 증가했고 p99는 596.33ms에서 239.04ms로 줄었습니다.",
          "채팅 시나리오에서는 조회보다 저장 과정의 연결 사용이 더 큰 문제였습니다. 메시지·세션·재화 정산 기록을 함께 처리하도록 수정한 뒤 같은 조건에서 DB 연결 사용량은 79/80에서 10/80으로, 응답 확인 시간은 409.32ms에서 2.14ms로 줄었습니다.",
        ],
        en: [
          "Character lists are read often and change less frequently, so I cached read models in Redis. Character edits invalidate related keys, and PostgreSQL remains the fallback when Redis is unavailable.",
          "I created separate k6 scenarios for list reads and a realistic 2D chat flow. Read throughput increased from about 590 to 1,760 RPS, while p99 fell from 596.33ms to 239.04ms.",
          "The chat scenario showed a larger issue in the write path. Grouping message, session, and credit-settlement work reduced database connection usage from 79/80 to 10/80 and response-check time from 409.32ms to 2.14ms under the same test conditions.",
        ],
      },
      metrics: [
        { label: "RPS", before: "590", after: "1,760" },
        { label: "DB connections", before: "79/80", after: "10/80" },
        { label: "Response check", before: "409.32ms", after: "2.14ms" },
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
        ko: "관리자 페이지에서 서비스 프롬프트와 사용자 상태를 관리했습니다",
        en: "Managed service prompts and user state through an admin console",
      },
      lead: {
        ko: "DB를 직접 수정하지 않고 반복되는 프롬프트 검증, 사용자 상태 확인과 재화 지급을 처리합니다.",
        en: "Handled repeated prompt validation, account checks, and credit grants without editing the database directly.",
      },
      paragraphs: {
        ko: [
          "관리 대상은 사용자가 캐릭터에 작성한 개인 프롬프트가 아니라, PeroChat이 2D·Live2D·VRM 채팅과 LLM 호출에 자동으로 붙이는 시스템 프롬프트와 공통 레이어입니다.",
          "캐릭터·채팅 모드·테스트 메시지를 넣어 최종 조합 결과와 포함된 레이어를 확인하고 Runtime Check를 통과한 PromptKit만 적용합니다. 사용자 관리에서는 역할·플랜·상태·재화를 조회하고 지급 사유와 처리 기록을 남깁니다.",
          "관리 화면은 로컬에서만 실행하고 API는 Supabase JWT, 관리자 역할과 별도 rate limit으로 보호했습니다.",
        ],
        en: [
          "The console does not edit a user's private character prompt. It manages system prompts and shared service layers automatically added to 2D, Live2D, VRM, and other LLM calls.",
          "A character, chat mode, and test message preview the final prompt composition. Only PromptKits that pass Runtime Check can become active. Account tools inspect roles, plans, status, credits, and record grant reasons.",
          "The admin UI runs locally, while its APIs require Supabase JWT validation, an admin role, and a separate rate limit.",
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
      id: "nirvana-network",
      order: 300,
      project: "nirvana",
      category: { ko: "UE5 멀티플레이", en: "UE5 Multiplayer" },
      tags: ["game-client", "game-server", "cpp", "unreal", "network", "realtime", "collaboration"],
      title: {
        ko: "Nirvana에서 온라인 세션, 네트워크 구조와 C++ UI를 맡았습니다",
        en: "Worked on online sessions, networking structure, and C++ UI in Nirvana",
      },
      lead: {
        ko: "Unreal Engine 5.3 기반 2인 멀티 액션 로그라이크를 22명 팀, 프로그래머 4명과 함께 만들었습니다.",
        en: "Built a two-player multiplayer action roguelike in Unreal Engine 5.3 with a 22-person team and four programmers.",
      },
      paragraphs: {
        ko: [
          "Online Subsystem 문서를 분석하고 Steam 로그인과 EOS Plus 기반 크로스 플랫폼 구조를 검토했습니다. RPC와 권한 확인이 액터 코드에 섞여 읽기 어려웠던 흐름을 클라이언트 로직과 서버 처리 흐름이 구분되는 패킷 기반 형태로 바꿨습니다.",
          "인게임 UI, 로딩과 게임오버 화면은 C++ 기반 Slate/UMG 연결로 제작했습니다. 멀티캐스트 애니메이션에서는 몽타주 섹션 점프와 위치 보정으로 동기화를 다뤘습니다.",
          "팀 프로젝트이므로 게임 전체를 혼자 만들었다고 표현하지 않습니다. 제 담당 범위는 온라인 세션 검토, 네트워크 구조 일부, UI와 작업 자동화 도구입니다.",
        ],
        en: [
          "I studied Online Subsystem documentation and reviewed Steam sign-in and an EOS Plus cross-platform path. Actor code had mixed RPC and authority checks, so I moved part of the flow toward packet-oriented handling that made client and server responsibilities easier to follow.",
          "I built in-game, loading, and game-over UI through C++ Slate/UMG integration. Multiplayer animation work used montage section jumps and position correction.",
          "This was a team project, not a solo game. My scope covered online-session research, part of the networking structure, UI, and a workflow automation tool.",
        ],
      },
      image: { src: "./assets/game-portfolio-outline.png", alt: "Nirvana game portfolio outline" },
    },
    {
      id: "team-retrospective",
      order: 310,
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
          "프로젝트 종료 후에는 코딩 스타일만 맞추는 것으로 부족했다고 판단했습니다. Unreal 프로젝트라면 GAS 같은 프레임워크를 반드시 써야 한다는 뜻이 아니라, 팀이 따를 상태·능력·네트워크 책임의 공통 구조를 먼저 정하고 같은 방식으로 기능을 추가했어야 했습니다.",
          "당시 GAS를 사용한 경험으로 꾸미지 않습니다. 사용하지 않았고, 끝난 뒤 구조적인 기준이 필요했다는 결론에 도달한 시행착오입니다.",
        ],
        en: [
          "Similar child classes were added whenever a feature needed them, so inheritance reflected implementation order rather than responsibility. Functions became hard to locate, while server and client code mixed inside actors behind repeated HasAuthority checks.",
          "After the project, I concluded that a shared coding style was not enough. This does not mean every Unreal project must use GAS; it means the team should first agree on a common structure for state, abilities, and network responsibility.",
          "I do not claim that we used GAS. The value of this experience is the architectural lesson learned after the project.",
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
          "초등학생 때 RPG Maker로 게임을 만들면서 온라인 게임을 직접 구현할 수 있다는 점에 흥미를 느꼈습니다. 고등학교에서는 Unity와 UNET으로 멀티플레이 게임을 만들고, 게임 학원에서 소켓 프로그래밍과 Windows IOCP를 배웠습니다.",
          "연결 수립, 비동기 입출력, 패킷 경계와 직렬화, 스레드 동기화를 직접 구현해 보며 라이브러리 아래에서 어떤 일이 일어나는지 공부했습니다. C++에서는 RAII와 객체 수명, 포인터·참조, 메모리 소유권을 코드 구조와 함께 이해하려고 했습니다.",
          "락프리나 나노초 단위 최적화를 실무 수준으로 다뤘다고 주장하지 않습니다. Modern C++와 저지연 시스템에 관심이 있고, 측정과 프로파일링을 바탕으로 더 깊게 배우려는 단계입니다.",
        ],
        en: [
          "I became interested in server development while making games in RPG Maker and realizing online games could be built directly. In high school I built a multiplayer Unity/UNET project, then studied sockets and Windows IOCP at a game academy.",
          "Implementing connection setup, asynchronous I/O, packet framing and serialization, and thread synchronization helped me understand what libraries abstract away. In C++, I focus on RAII, object lifetime, pointers and references, and ownership.",
          "I do not claim production expertise in lock-free structures or nanosecond optimization. I am strongly interested in Modern C++ and low-latency systems and want to deepen that work through measurement and profiling.",
        ],
      },
    },
    {
      id: "p2p-netcode",
      order: 410,
      project: "foundations",
      category: { ko: "게임 넷코드 실험", en: "Game Netcode Experiments" },
      tags: ["game-server", "game-client", "network", "realtime", "performance", "unreal", "cpp"],
      title: {
        ko: "P2P 연결과 lockstep·rollback 구조를 작은 프로젝트로 실험했습니다",
        en: "Experimented with P2P connectivity, lockstep, and rollback in small projects",
      },
      lead: {
        ko: "Rust UDP 프로젝트에서 NAT 홀펀칭과 지연 환경의 동기화 방식을 직접 비교했습니다.",
        en: "A Rust UDP project compared NAT hole punching and synchronization approaches under induced latency.",
      },
      paragraphs: {
        ko: [
          "초기 릴레이 서버를 통해 피어의 외부 주소를 교환하고 UDP hole punching으로 직접 연결을 시도했습니다. 패킷 손실과 순서 문제를 다루기 위해 ACK, timeout과 순서 보장 로직도 작은 단위로 구현했습니다.",
          "Clumsy로 지연을 만들어 delay lockstep과 rollback 흐름을 비교했습니다. 과거 테스트 기록에서는 각각 약 200~250ms와 450ms 조건을 사용했습니다. 상용 넷코드라고 주장하기보다 동기화 방식의 차이를 이해하기 위한 실험입니다.",
        ],
        en: [
          "An initial relay exchanged peers' public addresses before UDP hole punching attempted a direct connection. Small ACK, timeout, and ordering mechanisms explored packet loss and sequencing.",
          "I used Clumsy to compare delay lockstep and rollback flows under latency. Historical test notes used roughly 200–250ms and 450ms conditions. This was an experiment to understand the trade-offs, not production netcode.",
        ],
      },
    },
    {
      id: "unity-unet",
      order: 420,
      project: "foundations",
      category: { ko: "초기 게임 개발", en: "Early Game Development" },
      tags: ["game-client", "game-server", "unity", "network", "collaboration"],
      title: {
        ko: "고등학교 동아리에서 Unity와 UNET으로 멀티플레이 게임을 만들었습니다",
        en: "Built a multiplayer Unity/UNET game in a high-school club",
      },
      lead: {
        ko: "엔진에서 제공하는 네트워크 기능을 사용하며 클라이언트·서버 역할과 상태 동기화를 처음 경험했습니다.",
        en: "Using the engine's networking layer introduced me to client/server roles and state synchronization.",
      },
      paragraphs: {
        ko: [
          "동아리에서 Unity 게임을 함께 만들며 오브젝트 생성, 플레이어 상태와 네트워크 이벤트가 각 클라이언트에서 어떻게 보이는지 다뤘습니다. 이후 더 낮은 수준을 이해하고 싶어 C++ 소켓과 IOCP 학습으로 이어졌습니다.",
          "현재 기준으로 오래된 기술이며 최근 Unity 네트워크 스택 경험으로 포장하지 않습니다. 온라인 게임 개발에 관심을 갖게 된 출발점으로만 설명합니다.",
        ],
        en: [
          "The club project dealt with object spawning, player state, and how network events appear on each client. Wanting to understand the lower layers led me to C++ sockets and IOCP.",
          "UNET is now legacy technology, so I present it only as the start of my interest in online games rather than current Unity networking expertise.",
        ],
      },
    },
    {
      id: "cpp-trading-bot",
      order: 430,
      project: "foundations",
      category: { ko: "C++ API 실험", en: "C++ API Experiment" },
      tags: ["cpp", "fintech", "network", "operations"],
      title: {
        ko: "거래소 API와 C++ 자동매매 프로그램을 실험했습니다",
        en: "Experimented with exchange APIs and a C++ trading bot",
      },
      lead: {
        ko: "시세와 주문 API를 연결하고 프로그램이 계속 실행될 때 필요한 연결 상태와 로그를 다뤘습니다.",
        en: "Connected market-data and order APIs while handling connection state and logs for a continuously running process.",
      },
      paragraphs: {
        ko: [
          "Bybit 시세와 거래 API를 호출하고 주문 조건을 평가하는 작은 C++ 프로젝트를 만들었습니다. 이를 실제 투자 성과나 금융 시스템 실무 경험으로 표현하지 않습니다.",
          "의미가 있었던 부분은 외부 API 오류, 연결 재시도, 로그와 프로세스 재시작처럼 한 번 실행되는 코드와 계속 운영되는 코드의 차이를 경험한 것입니다.",
        ],
        en: [
          "I built a small C++ project that consumed Bybit market and trading APIs and evaluated order conditions. I do not present this as investment performance or professional financial-systems experience.",
          "Its value was learning the difference between code that runs once and a process that must continue through API errors, reconnects, logging, and restarts.",
        ],
      },
    },
  ],
};

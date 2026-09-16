(() => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const presetCopy = {
    "toss-securities-fe": {
      description: {
        ko: "모바일 브라우저 문제 해결부터 실시간 UI, 운영 도구, 결제 데이터 정합성까지 직접 구현하며 다뤘습니다.",
        en: "I worked through mobile browser issues, real-time UI, operations tooling, and payment-data consistency in working products.",
      },
      coverIntro: {
        ko: "브라우저에서 실제로 부딪힌 문제를 직접 재현하고 해결해 왔습니다. 모바일 입력 처리부터 SSE·WebSocket 기반 실시간 UI, 백오피스와 결제 흐름까지 직접 구현했습니다.",
        en: "I reproduce browser problems and test fixes directly. My work spans mobile input handling, real-time UI over SSE/WebSocket, back-office tooling, and payment flows.",
      },
    },
    "lotte-ai-service": {
      description: {
        ko: "LLM 공급자 통합, 외부 API 한도 제어, 실시간 응답, 부하 테스트와 서비스 운영까지 직접 다뤘습니다.",
        en: "I worked on LLM provider integration, external API quota control, streaming responses, load testing, and live service operations.",
      },
      coverIntro: {
        ko: "AI 기능을 서비스에 연결한 뒤 운영하면서 생긴 문제를 계속 고쳤습니다. LLM 호출 구조부터 공급자 장애·한도 처리, 실시간 응답, 부하 테스트와 배포까지 경험했습니다.",
        en: "I connected AI features to a live service and kept fixing the problems that appeared in operation, from LLM calls and provider failures to quota handling, streaming, load testing, and deployment.",
      },
    },
    "lotte-software": {
      description: {
        ko: "결제, DB, 인증, 배포와 운영 도구를 실제 서비스에 적용하고 운영했습니다.",
        en: "I implemented and operated payments, database work, authentication, deployment, and internal operations tooling in a live service.",
      },
      coverIntro: {
        ko: "서비스를 직접 운영하면서 데이터 정합성 문제, DB 병목, 인증 구조와 배포 방식을 하나씩 고쳐 왔습니다.",
        en: "While operating the service, I fixed data-consistency issues, database bottlenecks, authentication architecture, and deployment problems as they appeared.",
      },
    },
    "lotte-ai-platform": {
      description: {
        ko: "배포, LLM 게이트웨이, API 한도 제어와 부하 테스트를 직접 구현하고 운영했습니다.",
        en: "I implemented and operated deployment, an LLM gateway, API quota control, and load testing.",
      },
      coverIntro: {
        ko: "API 게이트웨이와 배포 환경을 구성하고, 외부 API 한도와 장애를 처리했습니다. 부하 테스트로 병목을 확인하고 운영 과정에서 필요한 도구도 직접 만들었습니다.",
        en: "I built an API gateway and deployment environment, handled external API quotas and failures, used load tests to find bottlenecks, and built tools needed for day-to-day operations.",
      },
    },
    "gearsecond-platform": {
      description: {
        ko: "트래픽, 결제, 인증, 운영 도구와 실시간 통신을 서비스 운영 과정에서 직접 다뤘습니다.",
        en: "I worked directly with traffic, payments, authentication, operations tooling, and real-time communication while running services.",
      },
      coverIntro: {
        ko: "인증, 결제, 실시간 채팅과 운영 도구를 직접 구현했고 부하 테스트로 병목도 확인했습니다. 게임 네트워크 실험과 실제 웹 서비스 운영 경험을 함께 갖고 있습니다.",
        en: "I implemented authentication, payments, real-time chat, and operations tooling, and used load tests to find bottlenecks. I also have hands-on experience with game-networking experiments and live web-service operations.",
      },
    },
    "webzen-redand-server": {
      description: {
        ko: "Unreal C++ 멀티플레이 상태 동기화부터 입력 동기화·rollback, Redis/DB 성능 점검까지 서버 경험을 묶었습니다.",
        en: "Server-focused work spanning Unreal C++ multiplayer state synchronization, input synchronization, rollback, and Redis/DB performance review.",
      },
      coverIntro: {
        ko: "고등학생 때 C++ 소켓·멀티스레딩·IOCP를 학습한 뒤, Unreal C++ 팀 프로젝트에서 서버가 게임 진행 상태를 판단하고 두 클라이언트에 동기화하는 코드를 맡았습니다. 이후 UDP 입력 동기화와 rollback 재시뮬레이션, 웹 서비스의 Redis/DB 성능 점검까지 이어갔습니다.",
        en: "I started with C++ sockets, multithreading, and IOCP study, then handled server-owned gameplay state and client synchronization in an Unreal C++ team project. I later explored UDP input synchronization, rollback resimulation, and Redis/DB performance in a live web service.",
      },
    },
    "eastgames-rts-server": {
      description: {
        ko: "rollback, 입력 동기화와 월드 재시뮬레이션을 구현했고, 실제 서비스에서는 부하 테스트와 DB 병목도 다뤘습니다.",
        en: "I implemented rollback, input synchronization, and world resimulation, and also worked on load testing and database bottlenecks in a live service.",
      },
      coverIntro: {
        ko: "입력 이력을 저장하고 과거 월드 상태를 복원해 현재 tick까지 다시 계산하는 rollback을 구현했습니다. 별도 웹 서비스에서는 부하 테스트와 배포를 직접 운영하며 성능 문제도 확인했습니다.",
        en: "I recorded input history, restored earlier world states, and resimulated to the current tick. In a separate web service, I also ran load tests and handled deployment and performance issues directly.",
      },
    },
    "webzen-crevix-server": {
      description: {
        ko: "Unreal C++ 멀티플레이, UDP/rollback 실험, Redis/DB 성능 점검과 배포 운영을 서버 흐름으로 묶었습니다.",
        en: "Server-focused work across Unreal C++ multiplayer, UDP/rollback experiments, Redis/DB performance review, and deployment operations.",
      },
      coverIntro: {
        ko: "C++ 소켓·멀티스레딩·IOCP를 학습하고 Unreal C++ 멀티플레이에서 서버/클라이언트 상태 동기화를 구현했습니다. 이후 UDP 입력 동기화와 rollback, 실제 웹 서비스의 DB/Redis 부하 점검과 배포 운영까지 서버 문제를 넓혀 왔습니다.",
        en: "I studied C++ sockets, multithreading, and IOCP, then implemented server/client state synchronization in Unreal C++ multiplayer. I later expanded into UDP input synchronization, rollback, DB/Redis load testing, and deployment operations for a live web service.",
      },
    },
  };

  for (const preset of data.presets || []) {
    const copy = presetCopy[preset.id];
    if (!copy) continue;
    preset.description = copy.description;
    preset.coverIntro = copy.coverIntro;
  }

  if (data.projects?.ycnet?.description) {
    data.projects.ycnet.description = {
      ko: "Windows의 Registered I/O(RIO)로 등록 버퍼와 completion/request queue를 구성하고, 별도 RUDP 계층에서 UDP 패킷의 sequence, ACK, RTT와 재전송을 처리했습니다. 지금 다시 보면 생명주기, backpressure와 동시성 경계가 거칠어 개선할 부분이 많은 학습 코드입니다.",
      en: "Used Windows Registered I/O (RIO) with registered buffers and completion/request queues, while a separate RUDP layer handled UDP sequence numbers, ACKs, RTT, and retransmission. Looking back, the study code has clear room for improvement around lifecycle, backpressure, and concurrency boundaries.",
    };
  }
})();

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
        ko: "Windows RIO/RUDP 실험부터 rollback, 월드 재시뮬레이션과 멀티플레이 상태 동기화까지 저수준 네트워크 경험을 다뤘습니다.",
        en: "My low-level networking work spans Windows RIO/RUDP experiments, rollback, world resimulation, and multiplayer state synchronization.",
      },
      coverIntro: {
        ko: "Windows RIO 위에 UDP 신뢰 계층을 직접 구성해 본 뒤, 최근에는 입력 동기화와 rollback 재시뮬레이션을 다시 구현하며 네트워크 상태 처리 방식을 더 깊게 살펴봤습니다.",
        en: "After building a UDP reliability layer on Windows RIO, I revisited network state handling through input synchronization and rollback resimulation.",
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
        ko: "C++/C# 네트워크 코드와 비동기 처리, rollback, 실서비스 성능 검증까지 직접 경험했습니다.",
        en: "I worked directly with C++/C# networking, asynchronous processing, rollback, and live-service performance testing.",
      },
      coverIntro: {
        ko: "C++ 네트워크 계층을 직접 구현하고 Unreal 프로젝트에서는 서버·클라이언트 상태 동기화를 다뤘습니다. 이후 rollback 실험과 웹 서비스 부하 테스트까지 이어가며 네트워크와 서버 성능을 계속 파고들었습니다.",
        en: "I built C++ networking code, handled server/client state synchronization in Unreal, then continued exploring networking and server performance through rollback experiments and web-service load tests.",
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

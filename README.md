# 안유찬 태그형 포트폴리오

개발 경험을 독립적인 사례로 기록하고, 선택한 기술 태그에 따라 한 편의 포트폴리오를 동적으로 구성하는 GitHub Pages 사이트입니다.

## URL 구성

```text
/?tags=backend,fintech,payment,postgresql,operations
/?tags=game-client,cpp,unreal,network
/?project=bybitCpp
/?project=p2p
```

같은 URL을 열면 같은 사례와 순서가 표시됩니다. 기술 사례의 프로젝트명을 누르면 해당 프로젝트의 기록만 모은 `?project=` 문서로 이동하고, 프로젝트·코드 링크에서 실제 저장소나 서비스로 들어갈 수 있습니다. 문서 화면의 `PDF로 저장` 버튼은 브라우저 인쇄 기능을 열며, 선택된 사례만 A4 문서로 저장할 수 있습니다.

## 주요 파일

```text
public/
  index.html          # 태그 조합기와 연속 문서 화면
  app.js              # 태그 선택, URL, 사례 조합, 인쇄
  portfolio-data.js   # 태그, 기본 조합, 프로젝트와 기술 사례 원본
  styles.css          # 화면·다크 모드·A4 인쇄 스타일
  assets/             # 사례에 사용하는 화면과 다이어그램
scripts/
  validate-site.mjs   # 태그, 프로젝트, 이미지 참조 검사
```

## 방문 기록

`public/visitor-tracking.js`가 실제 GitHub Pages 도메인에서 페이지가 처음 보일 때 Cloudflare Worker의 `POST /visit`를 한 번 호출합니다. 새 페이지 열기와 새로고침은 각각 기록되며, 같은 페이지의 언어·테마 변경이나 인쇄는 추가 기록하지 않습니다. 로컬 미리보기는 수집하지 않습니다.

연결 주소: `https://portfolio-visitor-worker.ultrauc123.workers.dev`

전송 데이터는 경로와 `tags`, `project`, `lang` 쿼리만 포함합니다. 임의 쿼리와 URL fragment는 제외하며, 비밀키나 방문자 식별자를 브라우저에 저장하지 않습니다. Worker가 IP의 HMAC으로 방문자를 구분하고 D1에 저장합니다. 네트워크 오류 시 자동 재전송하지 않으며 포트폴리오 이용에는 영향을 주지 않습니다. 최근 방문 목록은 화면에 표시하지 않습니다.

Worker 소스: `C:\YuChan\portfolio-visitor-worker`. `VISITOR_SECRET`은 Worker의 서버 측 secret으로만 관리합니다.

## 사례 추가

`public/portfolio-data.js`의 `modules`에 다음 정보를 추가합니다.

- 고유 `id`와 문서 순서 `order`
- 연결할 `project`
- 해당 사례를 불러올 `tags`
- 제목, 요약과 상세 설명
- 필요할 경우 수치, 목록, 이미지

배포 전 `node scripts/validate-site.mjs`로 존재하지 않는 태그·프로젝트·이미지와 중복 ID를 검사합니다. `main` 브랜치에 push하면 GitHub Actions가 검사 후 GitHub Pages에 배포합니다.

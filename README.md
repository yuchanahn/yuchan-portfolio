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

## 사례 추가

`public/portfolio-data.js`의 `modules`에 다음 정보를 추가합니다.

- 고유 `id`와 문서 순서 `order`
- 연결할 `project`
- 해당 사례를 불러올 `tags`
- 제목, 요약과 상세 설명
- 필요할 경우 수치, 목록, 이미지

배포 전 `node scripts/validate-site.mjs`로 존재하지 않는 태그·프로젝트·이미지와 중복 ID를 검사합니다. `main` 브랜치에 push하면 GitHub Actions가 검사 후 GitHub Pages에 배포합니다.

# 안유찬 포트폴리오

PDF 포트폴리오를 바로 열어 보고 다운로드할 수 있는 정적 사이트입니다.
별도의 프레임워크나 빌드 과정 없이 GitHub Pages에서 배포됩니다.

## 구조

```text
public/
  assets/portfolio.pdf
  index.html
  styles.css
.github/workflows/pages.yml
```

## 배포

1. GitHub에 새 저장소를 만듭니다.
2. 이 저장소의 `main` 브랜치를 push합니다.
3. GitHub 저장소의 `Settings → Pages → Build and deployment`에서
   Source를 `GitHub Actions`로 설정합니다.
4. Actions의 `Deploy portfolio to GitHub Pages` 작업이 끝나면 공개됩니다.

## 포트폴리오 교체

최신 PDF를 `public/assets/portfolio.pdf`에 덮어쓰고 push하면 자동으로
다시 배포됩니다.

## 배포 전 확인할 정보

- 공개 이메일 주소

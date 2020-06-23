---
createdAt: '2020-05-14'
title: React Boilerplate 만들기
description: '회사에서 새로운 프로젝트를 시작하면서 `CRA(Create React App)`로 작업환경을 구축했는데 다른 프로젝트를 만들때도 사용하면 좋을 것 같아서 Boilerplate(상용구)를 만들어보았다.'
tags: ['CRA', 'React', 'Boilerplate']
---

> <a href="https://ko.wikipedia.org/wiki/%EC%83%81%EC%9A%A9%EA%B5%AC_%EC%BD%94%EB%93%9C" target="_blank">Boilerplate code(상용구 코드)</a>
>
> 컴퓨터 프로그래밍에서 상용구 코드 또는 상용구는 수정하지 않거나 최소한의 수정만을 거쳐 여러 곳에 필수적으로 사용되는 코드를 말한다. 이와 같은 코드는 최소한의 작업을 하기 위해 많은 분량의 코드를 작성해야 하는 언어에서 자주 사용된다.

## 요약

-   <a href="https://github.com/Aimho/boilerplate-react" target="_blank"> Boilerplate git 주소</a>
-   적용된 패키지
    -   Typescript
    -   Redux
    -   Custom Hooks
    -   i18n
    -   axios
    -   styled-components

## 기본 설정

코드 스타일 유지 및 편의성을 위한 VSCode 설정

-   VSCode Extension(Prettier, vscode-icons) 설치
-   settings.json 설정 변경
-   .editorconfig 추가

VSCode Extension에서 <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">Prettier - Code formatter</a> 와 <a href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons" target="_blank">vscode-icons</a>를 설치한다.

![Prettier - Code formatter](./vscodePrettier.png 'Prettier - Code formatter')

![vscode - icons](./vscodeIcons.png 'vscode - icons')

설치가 끝나면 settings.json 설정을 한다.

```json
# settings.json
{
  "window.zoomLevel": 0,
  "editor.tabSize": 2,
  "editor.fontLigatures": true,
  "editor.snippetSuggestions": "top",
  // 코드 자동 수정
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.preferences.importModuleSpecifier": "relative",
  // Explorer에서 제외
  "files.exclude": {
    "**/.DS_Store": true,
    "**/.git": true,
    "**/.idea": true,
    "**/.vscode": false,
    "**/tmp": true,
    "**/yarn.lock": true
  },
  // 검색 대상에서 제외
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/.git": true,
    "**/.DS_Store": true,
    "**/tmp": true,
    "**/coverage": true,
    "**/build": true,
    "**/Pods": true,
    "**/*.xcodeproj": true,
    "**/*.xcworkspace": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.updateImportsOnFileMove.enabled": "always",
  // vscode-icons 설정
  "workbench.iconTheme": "vscode-icons",
  // prettier 설정
  "prettier.arrowParens": "always",
  "prettier.quoteProps": "preserve",
  "prettier.singleQuote": true,
}
```

```shell
# .editorconfig
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 80
trim_trailing_whitespace = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false

[COMMIT_EDITMSG]
max_line_length = 0
```

`Prettier`는 3가지 방법으로 설정을 변경할 수 있으며 각 방법마다 우선순위가 있다고 한다. (참고: <a href="https://ux.stories.pe.kr/150" target="_blank">https://ux.stories.pe.kr/150</a>)

## 폴더구조 설명

![폴더구조](./folder.png '폴더구조')

각 폴더는 다음과 같은 역할을 가진 파일들이 위치해 있다.

-   api - API 통신에 사용되는 함수
-   component - 재사용 되는 컴포넌트
-   config - App 기본 설정이나 환경변수
-   hooks - Custom Hooks (ex: Input태그 value, onChange 관련 hook)
-   locale - i18n 번역
-   modules - Redux
-   page - url 경로에서 노출될 컴포넌트
-   utils - 자주 사용하는 함수

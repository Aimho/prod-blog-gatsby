---
createdAt: '2020-05-14'
title: React Boilerplate 만들기
description: 'CRA(Create React App)를 사용하여 자주 사용하는 라이브러리가 적용된 Boilerplate(상용구)를 만들어보자'
tags: ['CRA', 'React', 'Boilerplate']
---

회사에서 새로운 프로젝트를 시작하면서 `CRA(Create React App)`로 작업환경을 구축했는데 다른 프로젝트를 만들때도 사용하면 좋을 것 같아서 Boilerplate(상용구)를 만들어보았다.

> [Boilerplate code(상용구 코드)](https://ko.wikipedia.org/wiki/%EC%83%81%EC%9A%A9%EA%B5%AC_%EC%BD%94%EB%93%9C)
>
> 컴퓨터 프로그래밍에서 상용구 코드 또는 상용구는 수정하지 않거나 최소한의 수정만을 거쳐 여러 곳에 필수적으로 사용되는 코드를 말한다. 이와 같은 코드는 최소한의 작업을 하기 위해 많은 분량의 코드를 작성해야 하는 언어에서 자주 사용된다.

### 1. CRA(Create React App)로 프로젝트 생성

타입스크립트를 적용할 것이므로 기본 `CRA` 명령어 뒤에 `--template typescript`를 붙여준다

```shell
npx create-react-app "project name" --template typescript
```

### 2. Prettier 적용

협업 or 코드 스타일 유지를 위해 `Prettier`를 적용해보자 순서는 아래와 같다

-   VsCode Extension 설치
-   Prettier 설정 변경

우선 [`Prettier - Code formatter`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)를 설치한다.

![Prettier - Code formatter](./vscodePrettier.png 'Prettier - Code formatter')

설치가 끝나면 Prettier 설정을 해보자 나는 `settings.json`, `.editorconfig`만 변경했다. <br/>
Prettier 설정은 아래의 순서로 적용된다.

> `settings.json` < `.editorconfig` < `.prettierrc`

```json
# settings.json
  // 저장 시 자동 포맷팅 되게 할지 설정 (원하지않으면 false해도 됨)
  "editor.formatOnSave": true,
  // 자동 포맷팅 시 기본 포매터 설정
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 검색 대상 제외
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/.git": true,
    "**/.DS_Store": true,
    "**/tmp": true,
    "**/coverage": true,
    "**/build": true,
    "**/dist": true,
    "**/Pods": true,
    "**/*.xcodeproj": true,
    "**/*.xcworkspace": true
  },
  // prettier 정의
  "prettier.arrowParens": "always",
  "prettier.quoteProps": "preserve",
  "prettier.singleQuote": true
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

### 3. react-router-dom 적용

https://ux.stories.pe.kr/150

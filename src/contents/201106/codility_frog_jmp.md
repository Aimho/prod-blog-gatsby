---
createdAt: '2020-11-06'
title: Codility 문제풀이 - FrogJmp
description: 'Codility Lesson3 Time Complexity: FrogJmp'
tags: ['Codility', '코딩테스트 연습', 'FrogJmp', 'Time Complexity', 'javascript']
---

## 문제설명
A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이
```javascript
function solution(X, Y, D) {
  // Y와 X의 차이 값
  const gapXtoY = Y - X;
  // 위 차이값을 점프 거리로 나누고 소수점 올림
  const result = Math.ceil(gapXtoY / D);
  return result;
}
```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/3-time_complexity/" target="_blank">Lesson3 Time Complexity</a>

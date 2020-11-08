---
createdAt: '2020-11-08'
title: Codility 문제풀이 - CountDiv
description: 'Codility Lesson5 Prefix Sums: CountDiv'
tags: ['Codility', 'CountDiv', 'Prefix Sums', 'javascript']
---

## 문제설명
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이

performance test `large_1`, `large_2` timeout error, total score 77%.

```javascript
function solution(A, B, K) {
  // 나눌 수 있는 정수 최소값
  const min = Math.ceil(A/K);
  // 나눌 수 있는 정수 최대값
  const max = Math.floor(B/K);
    
  // 최대값 - 최소값 + 1
  return max - min + 1;
}

```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/5-prefix_sums/" target="_blank">Lesson5 Prefix Sums</a>

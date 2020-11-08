---
createdAt: '2020-11-07'
title: Codility 문제풀이 - MissingInteger
description: 'Codility Lesson4 Counting Elements: MissingInteger'
tags: ['Codility', 'MissingInteger', 'Counting Elements', 'javascript']
---

## 문제설명
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이

performance test `large_1`, `large_2` timeout error, total score 77%.

```javascript
function solution(A) {
  // A 배열에서 0이상이고, 겹치지는 값을 제외한 값들만 남김
  const uniqueA = [...new Set(A.filter((item => item > 0)))];

  // uniqueA의 길이 만큼 순회
  for (let i = 1; i <= uniqueA.length + 1; i++) {
    // 포함하지 않는 값이 있으면 반환
    if (!uniqueA.includes(i)) return i;
  }
  // 모든 값이 포함되어 있으면 -1 반환
  return -1;
}

```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/4-counting_elements/" target="_blank">Lesson4 Counting Elements</a>

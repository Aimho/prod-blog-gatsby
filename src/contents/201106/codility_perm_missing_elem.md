---
createdAt: '2020-11-06'
title: PermMissingElem
description: 'Codility Lesson3 Time Complexity: PermMissingElem'
tags: ['Codility', 'PermMissingElem', 'Time Complexity', 'javascript']
---

## 문제설명
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이
```javascript
function solution(A) {
  // 빈 배열의 경우 1 반환
  if (A.length === 0) return 1;
  
  // B: A 배열의 총합
  const sumA = A.reduce((prev, next) => prev + next);
  
  // C: A 배열의 (index + 1) + 누락된 값 총합
  const n = A.length + 1;
  const sumN = n * (n + 1) / 2;
  
  // C - B = 누락된 값
  return sumN - sumA;
}
```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/3-time_complexity/" target="_blank">Lesson3 Time Complexity</a>

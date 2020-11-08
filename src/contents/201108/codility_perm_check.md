---
createdAt: '2020-11-08'
title: Codility 문제풀이 - PermCheck
description: 'Codility Lesson4 Counting Elements: PermCheck'
tags: ['Codility', 'PermCheck', 'Counting Elements', 'javascript']
---

## 문제설명
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이

performance test `large_1`, `large_2` timeout error, total score 77%.

```javascript
function solution(A) {
  // A.length 총 합
  const sumLength = A.length * (A.length + 1) / 2;
  // A 배열 중복 값 제외
  const uniqueA = [...new Set(A)];
  // uniqueA 총 합
  const sumA = uniqueA.reduce((prev, next) => prev + next, 0);
    
  // 값 비교 후 같지 않으면 0, 같으면 1 반환
  if (sumLength !== sumA) return 0;
  return 1;
}

```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/4-counting_elements/" target="_blank">Lesson4 Counting Elements</a>

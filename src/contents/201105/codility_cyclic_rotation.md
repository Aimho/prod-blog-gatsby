---
createdAt: '2020-11-05'
title: CyclicRotation
description: 'Codility Lesson2 Arrays: CyclicRotation'
tags: ['Codility', 'CyclicRotation', 'Arrays', 'javascript']
---

## 문제설명
An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

function solution(A, K);

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
For another example, given

    A = [0, 0, 0]
    K = 1
the function should return [0, 0, 0]

Given

    A = [1, 2, 3, 4]
    K = 4
the function should return [1, 2, 3, 4]

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이
```javascript
function solution(A, K) {
  // K를 A로 나눈 나머지 만큼 이동
  const moveCount = K % A.length;
  // moveCount가 0인 경우 A 그대로 반환
  if (!moveCount) return A;
  
  // 이동할 아이템을 담을 배열
  let moveItems = [];
  // moveCount 만큼 A배열에서 옮김
  for (let i=0; i<moveCount; i++) {
      const item = A.pop();
      moveItems.unshift(item);
  }
  
  // 옮긴 아이템 뒤에 남은 배열 붙임
  return moveItems.concat(A);
}
```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/2-arrays/" target="_blank">Lesson2 Arrays</a>

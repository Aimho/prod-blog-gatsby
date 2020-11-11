---
createdAt: '2020-11-11'
title: Codility 문제풀이 - PassingCars
description: 'Codility Lesson5 Prefix Sums: PassingCars'
tags: ['Codility', 'PassingCars', 'Prefix Sums', 'javascript']
---

## 문제설명
A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이

**total score 70%**

performance `large_random`, `large_big_answer`, `large_alternate` wrong answer.

```javascript
function solution(A) {
    const includeIndex = A.map((a, index) => ({item: a, index}));
    const zero = includeIndex.filter(a => !a.item);
    const result = zero.reduce((prev, next, zeroIndex) => {
        const index = next.index;
        const remainNumCount = A.length - (index + 1);
        const remainZeroCount = zero.length - (zeroIndex + 1);
        const count = remainNumCount - remainZeroCount;
        return prev + count;
    },0);
    
    return result;
}
```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/5-prefix_sums/" target="_blank">Lesson5 Prefix Sums</a>

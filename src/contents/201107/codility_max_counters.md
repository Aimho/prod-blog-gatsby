---
createdAt: '2020-11-07'
title: Codility 문제풀이 - MaxCounters
description: 'Codility Lesson4 Counting Elements: MaxCounters'
tags: ['Codility', 'MaxCounters', 'Counting Elements', 'javascript']
---

## 문제설명
You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Write a function:

function solution(N, A);

that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

Result array should be returned as an array of integers.

For example, given:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.

Write an efficient algorithm for the following assumptions:

N and M are integers within the range [1..100,000];
each element of array A is an integer within the range [1..N + 1].
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이

**total score 77%**

performance test `large_random2`, `extreme_large` timeout error.

```javascript
function solution(N, A) {
  // Length N인 배열 생성
  let counts = Array(N).fill(0);
  // 최대값 저장할 변수
  let maxCount = 0;
  
  for (let arr of A) {
    // max count 조건
    if (arr > N) {
      // 초기화
      counts = Array(N).fill(maxCount);
    } else {
      // 값 교체
      counts[arr - 1]++;
      // 최대값 갱신
      maxCount = maxCount < counts[arr - 1] ? counts[arr - 1] : maxCount;
    }
  }
  
  return counts
}
```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/4-counting_elements/" target="_blank">Lesson4 Counting Elements</a>

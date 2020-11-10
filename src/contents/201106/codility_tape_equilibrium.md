---
createdAt: '2020-11-06'
title: Codility 문제풀이 - TapeEquilibrium
description: 'Codility Lesson3 Time Complexity: TapeEquilibrium'
tags: ['Codility', 'TapeEquilibrium', 'Time Complexity', 'javascript']
---

## 문제설명
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이

**total score 100%**

```javascript
function solution(A) {
  // length 1 인 경우 첫 번째 요소 반환
  if (A.length === 1) return A[0];
  
  // A 배열의 총 합
  const sumA = A.reduce((prev, next) => prev + next);
  
  // 현재합 나머지합(총합 - 현재 합) 차이를 저장할 변수
  let results = [];
  // 차이 계산
  A.reduce((prev, next) => {
      const remain = sumA - prev;
      results.push(Math.abs(remain - prev));
      return prev + next;
  });
  
  // 결과 정렬해서 제일 작은 수 반환
  results.sort((a,b) => a-b);
  return results[0];
}
```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/3-time_complexity/" target="_blank">Lesson3 Time Complexity</a>

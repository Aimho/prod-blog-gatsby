---
createdAt: '2020-11-10'
title: Codility 문제풀이 - MinAvgTwoSlice
description: 'Codility Lesson5 Prefix Sums: MinAvgTwoSlice'
tags: ['Codility', 'MinAvgTwoSlice', 'Prefix Sums', 'javascript']
---

## 문제설명
A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:

slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이

**total score 60%**

performance `large_ones`, `large_random`, `extreme_values`, `large_sequence` timeout error.

```javascript
function solution(A) {
  // A 배열 복사
  const changeA = A.map((a) => a);
    
  // 최소 평균 값들을 담을 배열
  let avgs = [];

  // 1회 순회 후 A 값 앞에서 부터 제외 
  for (let i=0; i<A.length-1; i++) {
      // 최소 평균값을 저장할 변수
      let avg;

      // 배열 순회 하면서 최소 평균 값을 찾음
      changeA.reduce((prev, next, index) => {
          const sum = prev + next;
          const m_avg = sum / (index + 1);
          if (!avg || avg > m_avg) avg = m_avg;
          return sum;              
      });
      
      // 첫번째 요소 제거
      changeA.shift();
      // 최소 평균값을 배열에 담음
      avgs.push(avg);
  }
  
  // 최소 값을 찾은 후
  const min = Math.min(...avgs);

  // 해당 값의 index를 찾아 반환함
  return avgs.indexOf(min);
}
```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/5-prefix_sums/" target="_blank">Lesson5 Prefix Sums</a>

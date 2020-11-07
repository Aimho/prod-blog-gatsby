---
createdAt: '2020-11-07'
title: FrogRiverOne
description: 'Codility Lesson4 Counting Elements: FrogRiverOne'
tags: ['Codility', 'FrogRiverOne', 'Counting Elements', 'javascript']
---

## 문제설명
A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

Write a function:

function solution(X, A);

that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.

Write an efficient algorithm for the following assumptions:

N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이
문제 설명이 복잡하게 되어 있는데, 그냥 배열안의 요소가 1부터 X까지 중복되는 수 없이 있는지 확인하고, 배열의 몇 번째 인덱스에서 확인이 끝난 것인지를 반환하면 된다.

performance test에서 `large_permutation`, `large_range` timeout error, total score 81%.

```javascript
function solution(X, A) {
    // 가장 큰 인덱스를 저장할 변수
    let maxIndex = 0;
    // 1부터 X 까지 반복
    for (let i=1; i<(X+1); i++) {
        // 찾는 값(i)의 인덱스를 반환
        const index = A.indexOf(i);
        // 반대편으로 건너지 못하는경우 (1부터 X까지 수가 배열에 없는 경우) -1 반환
        if (index === -1) return -1;
        
        // index가 maxIndex보다 큰 경우 maxIndex 갱신
        if (index > maxIndex) {
            maxIndex = index;
        }
    }
    return maxIndex;
}
```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/4-counting_elements/" target="_blank">Lesson4 Counting Elements</a>

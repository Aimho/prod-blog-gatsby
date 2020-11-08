---
createdAt: '2020-11-05'
title: Codility 문제풀이 - BinaryGap
description: 'Codility Lesson1 Iterations: BinaryGap'
tags: ['Codility', 'BinaryGap', 'Iterations', 'javascript']
---

## 문제설명
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이
```javascript
function solution(N) {
  // 2진수로 변경
  const num = [...N.toString(2)];
  
  // binary gap 저장할 변수
  let gap = 0;
  
  const result = num.reduce((prev, next) => {
    const nextNum = parseInt(next);
    // 다음 항목이 1이면 gap 비교 후 저장 및 초기화
    if (nextNum) {
        gap = prev < gap ? gap : prev;
        return 0;
    }
    // 다음 항목이 0이면 BinaryGap + 1
    if (!nextNum) {
        return prev + 1;
    }
  }, 0)
  
  return gap;
}
```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/1-iterations/" target="_blank">Lesson1 Iterations</a>

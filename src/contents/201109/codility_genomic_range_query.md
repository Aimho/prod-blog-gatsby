---
createdAt: '2020-11-09'
title: Codility 문제풀이 - GenomicRangeQuery
description: 'Codility Lesson5 Prefix Sums: GenomicRangeQuery'
tags: ['Codility', 'GenomicRangeQuery', 'Prefix Sums', 'javascript']
---

## 문제설명
A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

For example, consider string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
The answers to these M = 3 queries are as follows:

The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
Write a function:

function solution(S, P, Q);

that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

Result array should be returned as an array of integers.

For example, given the string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
the function should return the values [2, 4, 1], as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
M is an integer within the range [1..50,000];
each element of arrays P, Q is an integer within the range [0..N − 1];
P[K] ≤ Q[K], where 0 ≤ K < M;
string S consists only of upper-case English letters A, C, G, T.
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 문제풀이

문제 설명이 복잡하게 되어 있는데, S문자열의 인덱스가 P[N]이상, Q[N]이하 인 항목 에서 가장 작은 문자의 값을 찾으면 되는 문제이다.

performance `almost_all_same_letters`, `large_random`, `extreme_large` 항목 timeout error, total score 62%.

```javascript
function solution(S, P, Q) {
  // 문자를 정해진 값으로 변경
  const format = (val) => {
      if (val === 'A') return 1;
      if (val === 'C') return 2;
      if (val === 'G') return 3;
      if (val === 'T') return 4;
  }

  // 볌위 안의 가장 작은 값을 담을 변수 
  let results = [];
  // S 문자열을 배열로 변경
  const arrS = S.split('');
  // P 배열의 길이만큼 순회
  for (let i=0; i<P.length; i++) {
    // P[i]이상 Q[i]이하의 값들만 남기고, 작은 순으로 정렬
    const words = arrS.filter((_, index) => P[i] <= index && index <= Q[i]).sort();
    // 첫번째 항목 값으로 변경 후 결과 변수에 push
    results.push(format(words[0]));
  }
  
  return results;
}
```  

---

## Codility 링크
<a href="https://app.codility.com/programmers/lessons/5-prefix_sums/" target="_blank">Lesson5 Prefix Sums</a>

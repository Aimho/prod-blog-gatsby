---
createdAt: '2020-07-19'
title: 프로그래머스 문제풀이 - H-Index
description: '프로그래머스의 코딩테스트 연습 항목 중 정렬 > H-Index 문제를 풀어보았다.'
tags: ['프로그래머스', '코딩테스트 연습', 'H-Index', 'javascript', '정렬']
---

## 문제 설명 

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

## 제한사항
- 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
- 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

## 입출력 예
- citations: [3, 0, 6, 1, 5]
- return: 3

## 문제 풀이

```javascript
function solution(citations) {
    // 정렬 (큰 수 부터 정렬했으면 더 효율적이었을 듯...)
    citations.sort();
    const max = Math.max(...citations);
    
    // find h-index
    let result = 0;
    for (let i=0; i<=max; i++) {
        const m_result = citations.filter(item => i <= item).length;
        if (i <= m_result) {
            result = i;
        }
    }
    
    return result;
}
```  

---

## 프로그래머스 링크
<a href="https://programmers.co.kr/learn/courses/30/lessons/42747" target="_blank">코딩테스트 연습 > 정렬 > H-Index</a>

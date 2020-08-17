---
createdAt: '2020-08-18'
title: 코딩테스트 연습 - 위장
description: '프로그래머스의 코딩테스트 연습 항목 중 해시 > 위장 문제를 풀어보았다.'
tags: ['프로그래머스', '코딩테스트 연습', 'level2', '위장', 'javascript', '해시']
---

## 문제 설명 

스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

종류	이름
얼굴	동그란 안경, 검정 선글라스
상의	파란색 티셔츠
하의	청바지
겉옷	긴 코트
스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

## 제한사항
- clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
- 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
- 같은 이름을 가진 의상은 존재하지 않습니다.
- clothes의 모든 원소는 문자열로 이루어져 있습니다.
- 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
- 스파이는 하루에 최소 한 개의 의상은 입습니다.

## 입출력 예
- [[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]
  - return: 5
- [[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]
  - return: 3

## 문제 풀이
- 순열 & 조합 지식이 필요함
- 의상 종류 별 의상수 + 의상을 입지 않는 경우의 수를 포함하여 곱함
- 마지막에  -1을 하는 이유는 아무것도 입지 않는 경우의 수를 제외하는 것

```javascript
function solution(clothes) {
    const category = clothes.map((item) => item[1]).sort();
    const uniqCategory = Array.from(new Set(category));
    
    let counts = {};
    category.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    
    const result = uniqCategory
        .map((key) => counts[key] + 1)
        .reduce((prev, next) => prev * next);
    
    return result - 1;
}
```  

---

## 프로그래머스 링크
<a href="https://programmers.co.kr/learn/courses/30/lessons/42578" target="_blank">코딩테스트 연습 > 해시 > 위장</a>

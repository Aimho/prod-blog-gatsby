---
createdAt: '2020-07-11'
title: 코딩테스트 연습 - 완주하지 못한 선수
description: '프로그래머스의 코딩테스트 연습 항목 중 해시 > 완주하지 못한 선수 문제를 풀어보았다.'
tags: ['프로그래머스', '코딩테스트 연습', '완주하지 못한 선수', 'javascript', '해시']
---

## 문제 설명 

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

## 제한사항
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

## 입출력 예
- participant: [leo, kiki, eden]
- completion: [eden, kiki]
- return: leo

## 문제 풀이

```javascript
function solution(participant, completion) {
    // 정렬
    participant.sort();
    completion.sort();
    
    // 값 비교
    const answer = participant.filter((item, index) => item !== completion[index]);
    
    // 0번째 인자가 맞지 않는 값
    return answer[0];
}
```  

---

## 프로그래머스 링크
<a href="https://programmers.co.kr/learn/courses/30/lessons/42576" target="_blank">코딩테스트 연습 > 해시 > 완주하지 못한 선수</a>

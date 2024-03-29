---
createdAt: '2020-08-23'
title: 프로그래머스 문제풀이 - 기능개발
description: '프로그래머스의 코딩테스트 연습 항목 중 스택/큐 > 기능개발 문제를 풀어보았다.'
tags: ['프로그래머스', '코딩테스트 연습', 'level2', '기능개발', 'javascript', '스택/큐']
---

## 문제 설명 

프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

## 제한사항
- 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
- 작업 진도는 100 미만의 자연수입니다.
- 작업 속도는 100 이하의 자연수입니다.
- 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

## 입출력 예
- progresses: [93,30,55]
- speeds: [1,30,5]
- result: [2,1]

## 문제 풀이
- progress와 speed 배열로 개발 완료일 배열을 만들고 값을 비교하여 결과(배포 수)를 스택으로 저장하여 해결함

```javascript
function completeDev(progress, speed) {
    const remainProgress = 100 - progress;
    let day = Math.floor(remainProgress / speed);
    if (remainProgress % speed) day++;
    return day;
}

function solution(progresses, speeds) {
    // 개발 완료일 계산
    const completeDays = progresses.map((item, index) => completeDev(item, speeds[index]));
    
    // 배포일 계산
    let publishCount = 1;
    const result = [];
    completeDays.reduce((prev, next) => {
        if (prev < next) {
            result.push(publishCount) 
            publishCount = 1;
            return next;
        } else {
            publishCount++;
            return prev;
        }
    });
    result.push(publishCount);
    
    return result;
}
```  

---

## 프로그래머스 링크
<a href="https://programmers.co.kr/learn/courses/30/lessons/42586" target="_blank">코딩테스트 연습 > 스택/큐 > 기능개발</a>

---
createdAt: '2020-07-10'
title: 프로그래머스 문제풀이 - 모의고사
description: '프로그래머스의 코딩테스트 연습 항목 중 완전탐색 > 모의고사 문제를 풀어보았다.'
tags: ['프로그래머스', '코딩테스트 연습', '모의고사', 'javascript', '완전탐색']
---

## 문제 설명 

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 제한사항
- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

## 입출력 예
<Table>
  <thead>
    <tr>
      <th>answers</th>
      <th>return</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[1,2,3,4,5]</td>
      <td>[1]</td>
    </tr>
    <tr>
      <td>[1,3,2,4,2]</td>
      <td>[1,2,3]</td>
    </tr>
  </tbody>
</Table>

## 문제 풀이

```javascript
function solution(answers) {
    // 학생 정보 
    const students = [
        {
            id: 1,
            answer: [1,2,3,4,5],
            success: 0
        },
        {
            id: 2,
            answer: [2,1,2,3,2,4,2,5],
            success: 0
        },
        {
            id: 3,
            answer: [3,3,1,1,2,2,4,4,5,5],
            success: 0
        }
    ];

    // 문제 정답 확인
    const result = students.map((student) => {
        const success = answers.reduce((prev, next, index) => {
            return next === student.answer[index % student.answer.length] ? 
                prev + 1 : prev
        }, 0)

        return  {
            ...student,
            success: success
        }
    })

    // 고득점 학생 정렬
    result.sort((a, b) => b.success - a.success);

    // 최고점수 확인
    const resultSuccess = result.map(item => item.success);
    const maxSuccess = Math.max(...resultSuccess)

    // 최고점수 학생만 남김
    const answer = result
        .filter(item => item.success === maxSuccess)
        .map(item => item.id);

    return answer;
}
```  

---

## 프로그래머스 링크
<a href="https://programmers.co.kr/learn/courses/30/lessons/42840" target="_blank">코딩테스트 연습 > 완전탐색 > 모의고사</a>

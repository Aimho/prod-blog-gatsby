---
createdAt: '2020-07-08'
title: 코딩테스트 연습 - 베스트앨범
description: '프로그래머스의 코딩테스트 연습 항목 중 해시 > 베스트앨범 문제를 풀어보았다.'
tags: ['프로그래머스', '코딩테스트 연습', '베스트앨범', 'javascript']
---

## 문제 설명 

스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

## 제한사항
- genres[i]는 고유번호가 i인 노래의 장르입니다.
- plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
- genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
- 장르 종류는 100개 미만입니다.
- 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
- 모든 장르는 재생된 횟수가 다릅니다.

## 문제 풀이

```javascript
  function solution(genres, plays) {
    const result = [];

		// songs data combine
    const songs = genres.map((genre, index) => ({ 
        id: index, play: plays[index], genre: genre
    }));

		// unique genre
    const genreKeys = Array.from(new Set(genres));

    genreKeys.map((genreKey) => {
				// 같은 genre로 배열 분리 (재생 수 많은 순으로 정렬)
        const songFilter = songs
            .filter(song => song.genre === genreKey)
            .sort((a, b) => b.play - a.play);

				// 각 genre별 total 재생 수
        const totalPlays = songFilter
            .map(item => item.play)
            .reduce((prev, next) => prev + next);

				// 정보 결과 push
        result.push({
            totalPlay: totalPlays,
            songs: songFilter.map((item, index) => item.id)
        });
    })
		// total play 많은 순으로 정렬
    result.sort((a, b) => b.totalPlay - a.totalPlay);

		// answer 저장
    const answer = [];
    result.map(item => {
        answer.push(item.songs[0]);
        if (item.songs.length > 1) {
            answer.push(item.songs[1]);
        }
    })

    console.log(answer)
    return answer;
} 
```  

---

## 프로그래머스 링크
<a href="https://programmers.co.kr/learn/courses/30/lessons/42579" target="_blank">코딩테스트 연습 > 해시 > 베스트앨범</a>

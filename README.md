# Next.js version 14 사용한 예제

```
아래 요건을 위해서 본래 서버에서 다 처리가 가능하지만 기능 별로 사용을 해봄

1. react-query를 사용하여 서버 데이터 관리 및 fetch
2. zustand store를 사용하여 상태 관리
3. tailwind 를 사용하여 UI 생성
4. apexCharts를 사용하여 그래피 & 차트 제작 연습
```

```
src
	app : route
			L api : API route  - ex) localhost:3000/api
			L todo : Page route - ex) localhost:3000/todo
	components : 공통 및 다수 사용에 대한 component 분리
	helper : 불특정 다수에서 사용될 함수 모움
			L fetch : fetch를 각 페이지에 사용성에 맞게 함수화
	hook : 불특정 다수에서 사용될 hook 모음
	quires : react-query를 사용하기 쉽게 함수화
	store : zustand를 사용하여 생성한 상태 관리
	types : 전역 & 불특정 다수에서 사용되는 interface || type 정리
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

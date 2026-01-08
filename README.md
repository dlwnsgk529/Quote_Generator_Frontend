# Quote_Generator_Frontend
<br>

// 메인 사진

## 📌 프로젝트 소개
HTML, CSS, JavaScript를 이용하여 유명한 명언 생성 웹사이트 구현한 프로젝트.<br>
Open API에서 데이터를 불러오고, JavaScript를 활용해 비동기 처리 및 LocalStorage 활용 연습을 목적으로 둔 프로젝트. 
<br>
<br>


## 🛠 사용 기술
- HTML
- CSS
- JavaScript
<br>

## ✨ 주요 기능
- 외부 Open API를 이용한 명언 데이터 호출
  - 데이터 불러올 때 비동기 처리
- 불러오기 성공 / 로딩 중 / API 실패 등 상황 별 UI 표시 및 버튼 비활성화 기능 구현
- LocalStorage를 활용한 즐겨찾기 기능
  - 즐겨찾기 중복 방지 기능 추가
<br>

// 상황별 사진들

## 📂 JavaScript 구현 내용
- 비동기 흐름 제어
  - fetch(), async / await 를 사용해 API 응답 처리
- try / catch 를 이용해 API 데이터 오류 상황 처리
- 데이터 로딩 중 중복 요청 방지를 위한 버튼 비활성화
- 데이터 불러오기 오류 발생 시 즐겨찾기 방지를 위한 즐겨찾기 버튼 비활성화
- 현재 명언을 LocalStorage에 저장하여 즐겨찾기 기능 구현
- 이미 즐겨찾기된 명언은 다시 추가되지 않도록 검사
<br>


## 🎯 학습 목적
- JavaScript를 활용한 DOM 조작 및 이벤트 처리 연습
- fetch()와 async / await을 이용한 비동기 데이터 처리 학습
- API 요청 과정 중 발생 가능한 로딩 상태와 에러 상황 연습
- LocalStorage를 활용한 데이터 저장 연습
<br>

📌 참고 <br>
본 프로젝트는 JavaScript 학습 목적의 개인 연습 프로젝트이며,
실제 서버 통신이나 데이터베이스 연동은 포함되어 있지 않음.

# 홀리데이즈 HOLIDAYS

점점 더 많은 사람들이 새로운 스킬을 배우고 개인적인 관심사를 탐구하기 위해  원데이클래스에 대한 수요가 증가하고 있습니다. 그러나 원데이클래스를 찾고 참여하기 위해서는 여러 가지 장벽이 존재하곤 합니다. HOLIDAYS는 이러한 장벽을 극복하고, 원데이클래스를 원하는 사람들에게 쉽게  접근 가능하고 매칭이 용이한 서비스를 제공하는 것을 목표로 합니다.

## 배포 주소

**HOLIDAYS** [https://happyholidays.site](https://happyholidays.site)

## 기술 스택

`TypeScript`, `Next.js`, `React`, `GraphQL`, `React-Hooks`, `Emotion`, `Recoil`
<br></br>

## FrontEnd 팀원
### 신재욱 (FE)
- 커뮤니티 페이지, 회원관리 페이지, 원데이클래스 페이지(리스트)
- 레이아웃 제작
- Git 관리
### 이중한 (FE)
- 로그인 페이지, 결제 페이지, 랜딩페이지
- PWA 배포
### 유시영 (FE)
- 원데이클래스 페이지
- AWS 배포
- 노션 관리

## 프로젝트 기록
- [Team Project 1일차](https://velog.io/@sju4486/TIL-Team-Project-1%EC%9D%BC%EC%B0%A8)
- [Team Project 2일차](https://velog.io/@sju4486/TIL-Team-Project-2%EC%9D%BC%EC%B0%A8)
- [Team Project 3일차](https://velog.io/@sju4486/TIL-Team-Project-3%EC%9D%BC%EC%B0%A8)
- [Team Project 4일차](https://velog.io/@sju4486/TIL-Team-Project-4%EC%9D%BC%EC%B0%A8)
- [Team Project 5일차](https://velog.io/@sju4486/TIL-Team-Project-5%EC%9D%BC%EC%B0%A8)
- [Team Project 6일차](https://velog.io/@sju4486/TIL-Team-Project-6%EC%9D%BC%EC%B0%A8)
- [Team Project 7일차](https://velog.io/@sju4486/TIL-Team-Project-7%EC%9D%BC%EC%B0%A8)
- [Team Project 8일차](https://velog.io/@sju4486/TIL-Team-Project-8%EC%9D%BC%EC%B0%A8)
- [Team Project 9일차](https://velog.io/@sju4486/TIL-Team-Project-9%EC%9D%BC%EC%B0%A8)
- [Team Project 10일차](https://velog.io/@sju4486/TIL-Team-Project-10%EC%9D%BC%EC%B0%A8-yjod680s)
- [Team Project 11일차](https://velog.io/@sju4486/TIL-Team-Project-11%EC%9D%BC%EC%B0%A8)
- [Team Project 12일차](https://velog.io/@sju4486/TIL-Team-Project-12%EC%9D%BC%EC%B0%A8)
- [Team Project 회고록](https://velog.io/@sju4486/TIL-Team-Project-%ED%9A%8C%EA%B3%A0%EB%A1%9D)
- [Team Project 리팩토링 회고록](https://velog.io/@sju4486/Project-Team-Project-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81-%ED%9A%8C%EA%B3%A0)

## 화면 구성
![스크린샷, 2023-07-13 19-02-53](https://github.com/mrpumpkin98/Reused_client/assets/114569429/0022329b-ddd8-4908-961d-4b2f2c4ea233)


## 구현 기능

### 원데이클래스 List Page (Service / Area Category)

![클래스 리스트(서비스 카테고리)](https://github.com/mrpumpkin98/Reused_client/assets/114569429/dab9e020-d6fc-4795-8535-f12c76f44d98)

<hr/>

![클래스 리스트(지 카테고리)](https://github.com/mrpumpkin98/Reused_client/assets/114569429/77163812-208e-4401-9dcc-a29344cc0332)

<hr/>

![클래스 리스트(검색)](https://github.com/mrpumpkin98/Reused_client/assets/114569429/6a673c74-3c10-4dff-b75d-92a3df1fc320)

- Recoil 상태 관리 라이브러리를 사용하여 상태를 저장
- 특정 카테고리 클릭 시, Recoil 상태에서 해당 카테고리와 일치하는 데이터를 불러옵니다.

<br/>
<br/>

### 커뮤니티 (List / Detail / Comment / Write)

![커뮤니티(디테일)](https://github.com/mrpumpkin98/Reused_client/assets/114569429/04d04087-1574-47da-9b18-22791ad6a5fb)

<hr/>

![커뮤니티(댓글)](https://github.com/mrpumpkin98/Reused_client/assets/114569429/5f790b2f-7c6e-4943-aa40-cb031400eae8)

<hr/>

![커뮤니티(작성)](https://github.com/mrpumpkin98/Reused_client/assets/114569429/654de327-a292-43f6-b39a-63b13c0170ab)


- TOAST UI Editor 3.0 라이브러리를 사용했습니다.
- 대표이미지 등록과 게시물작성시 필요한 이미지들을 자유롭게 등록할 수 있습니다.
- 댓글 작성과 수정 시 apolloClient에서 제공하는 기능인 refetchQueries를 사용해서 즉각적으로 반영되도록 구현했습니다.

<br/>
<br/>

### 마이페이지 (Edit profile / View my page)

![마이페이지(회원정보 수정)](https://github.com/mrpumpkin98/Reused_client/assets/114569429/2aa672ed-061f-46bd-96fd-3d84a48cad4b)

<hr/>

![마이페이지](https://github.com/mrpumpkin98/Reused_client/assets/114569429/69bbb872-d645-4562-a909-9574c2ba2eed)

- 회원정보 수정시 핸드폰 인증을 받고, 인증번호가 확인되면 닉네임을 수정할 수 있도록 구현했습니다.
- 예약 승인 및 확인 조회: 마이페이지에서 예약에 대한 승인 상태나 확인 상태를 실시간으로 확인할 수 있습니다.


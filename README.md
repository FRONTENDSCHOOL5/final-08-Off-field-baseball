# <span id='top'>⚾️ 구장 밖 야구</span>

![리드미 타이틀](https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/53a09af4-9a1b-49bc-8c34-c8df2fd3e238)
<br>
<br>
[🔗 구장 밖 야구 바로가기](https://off-field-baseball.netlify.app) 
- ID : `baseball@test.com`
- PW : `test123!`
- 모바일로 확인하기 : <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/a13cb450-1f8d-42fa-acae-94dc39319d6c" width="70px">
<br>
<br>

## 1. 서비스 소개

**구장 밖 야구는 구장 밖에서도 같은 팀을 응원하는 팬들과 교류할 수 있는 야구 팬들을 위한 SNS 커뮤니티입니다.**

- 유저들이 각자 어느 팀을 응원하는지를 한눈에 알 수 있습니다.
- 응원하는 팀의 시그니처 컬러로 테마를 바꿀 수 있는 기능을 통해 커뮤니티에 더 큰 소속감을 느낄 수 있습니다.
- 사용하던 팀 응원 소품이나 야구 관련 물품을 중고 거래를 통해 판매하고, 구입할 수 있습니다.
- 야구와 관련된 이슈들을 실시간으로 올리며 SNS 활동을 할 수 있습니다.
- 같은 팀을 응원하는 유저를 팔로우 하여 피드를 꾸릴 수 있고, 댓글과 좋아요 기능으로 소통할 수 있습니다.
<br>
<br>

## 2. 팀 소개 & 역할 분담

|                                                                 FE 한수빈                                                                 |                                                                          FE 김은총                                                                           |                                                             FE 김하연                                                             |                                                                    FE 최예지                                                                    |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/astinaus/git-test/blob/main/8429F25B-444B-47ED-8D03-9DBCE13828C1_1_201_a.jpeg" width="180px" height="180px"> | <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/08b30968-7235-4d4d-b009-c192ab2faa2c" width="180px" height="180px"> | <img src="https://github.com/KimHayeon1/hihi/assets/108985221/34bd89c8-4b1f-4542-8f2c-d4ba55647281" width="180px" height="180px"> | <img src="https://user-images.githubusercontent.com/126536476/248644074-997e8180-717c-4abc-898e-84f7f3072f21.jpg" width="180px" height="180px"> |
|                                                  [🔗GitHub](https://github.com/astinaus)                                                  |                                                            [🔗GitHub](https://github.com/echo-6)                                                             |                                             [🔗GitHub](https://github.com/KimHayeon1)                                             |                                                     [🔗GitHub](https://github.com/moojinkl)                                                     |

🦜 저희는 멋쟁이사자처럼 프론트엔드스쿨 5기 프로젝트 8조 `the 8색조` 팀입니다 !
<br>
<br>
<br>

## 🐼 한수빈 (팀장)

**🖥️ 화면 구현**
- 피드 포스트 목록 프로필 페이지 팔로잉 
- 팔로워 목록 메인 레이아웃
- 콘텐츠 레이아웃 헤더 navbar 

**🛠️ 기능 개발**
- 피드 페이지 
  - 팔로우 중인 유저들의 게시글 불러오기
  - 팔로우 중인 유저가 없을 경우 검색하기 버튼 노출
  - 무한 스크롤 구현
- 포스트 등록/수정/삭제/신고 기능 
- API 활용
  - 더보기 버튼 클릭시 작성자와 사용자의 일치 여부에 따라 삭제/수정 모달과 신고 모달이 각각 뜸
  - 포스트 등록시 한 번에 이미지 최대 3개 업로드 가능 
- 포스트 상세 페이지 
- pre 태그를 활용하여 게시글 작성시에 개행이 그대로 출력되도록 함 

- 상품 상세 페이지 
  - 포스트 좋아요 / 댓글 작성 기능 API활용
  - 댓글 작성시 댓글 리스트 재렌더링으로 새로고침없이 작성한 댓글이 바로 렌더링 

- 프로필 페이지
  - 유저 프로필, 해당 유저가 등록한 포스트 / 상품 등을 보여주는 페이지
  - 포스트 목록을 앨범형/리스트형으로 볼 수 있는 토글 버튼
  - 포스트 목록에 무한 스크롤 구현
  - 팔로우한 유저/ 팔로잉중인 유저 리스트 무한 스크롤 구현
  - 사용자의 프로필은 프로필수정/상품등록 버튼, 다른 유저의 프로필은 팔로우,채팅,공유 버튼(채팅, 공유 미구현
- 접근성
  - 이미지 alt(대체텍스트) 추가
  - 접근성 텍스트 h1~h3태그 추가
- 라우터 
  - context의 usertoken 유무에 따라 페이지 라우팅되도록 구현

- 기타 프로젝트 주도
  - 프로젝트 메인 주제를 정하고 핵심 기능 제안
  - 정기/비정기 회의 주도
  - 역할 분담 주도
- 발표
<br>

## 🐢 김은총

**🖥️ 화면 구현**
- 채팅 리스트 페이지
- 채팅방 페이지
  - 채팅방 나가기 모달 연결
- 로딩중 컴포넌트
- 404 페이지
- splash 스크린
- 공통 Button 컴포넌트
  - 재사용성을 고려하여 모든 페이지에서 사용 가능하도록 제작
  
**🛠️ 기능 개발**
- 유저 검색 기능
  - 검색어를 타이핑 하면 별도의 버튼 클릭 없이 바로 input value와 같은 검색어 리스트 출력
  - 안정성을 위해 검색어 api 요청 텀을 200ms로 제한
  - 검색 리스트 유저 프로필에 응원 중인 팀 로고 배치
- 검색어 하이라이트 기능
  - 검색어와 겹치는 닉네임 단어에 컬러 하이라이트
- splash 스크린
  - 3초간 애니메이션이 작동한 후 Login Modal 페이지로 이동
- 전체 디자인 담당
  - 시그니처 컬러, 스플래쉬 스크린, 메인로고, 파비콘, Error404 이미지, etc
  
**기타**
- README 작성
  - 서비스 소개 등 이미지 제작
  - 전체 구조 기획 / 작성
<br>

## 김하연

**🖥️ 화면 구현**
- form, select, comment, modal(더보기, 세팅 모달 및 오버레이), container 컴포넌트
- 로그인, 회원가입, 게시글 , 댓글 페이지

**🛠️ 기능 개발**
- 기본 테마와 응원 중인 팀이 있는 사용자를 위한 10가지 테마 전환 로직
  - 컬러와 팀 변동에 상관없이 동작하도록, CSS 변수로 관리
  - 이미지 : 하나의 SVG 코드로 모든 테마 지원
- 회원가입 / 로그인 / 로그아웃
  - 유효성 검사
    - HTML, JavaScript로 가능한 검증은 입력값이 변할 때마다 시행
    - API로만 가능한 검증(이메일 중복 등)은 포커스가 떠났을 때 시행 및 피드백
    - 유효성에 따른 실시간 버튼 활성화/비활성화 기능
    - 양식이 올바르지 않을 시, 실시간 텍스트 피드백 (회원가입)
  - 편의성을 위해, 비밀번호 보기/숨기기 기능 제공
  - 회원가입 성공 시 자동 로그인 기능
- 검색, 댓글 페이지 무한 스크롤
  - 로딩 시간을 줄이기 위해, 한번에 렌더링하는 리스트 개수를 제한하고, 스크롤이 바닥에 닿으면, 추가 렌더링
- 캐러셀
  - Swiper 라이브러리를 활용한 페이지네이션 캐러셀 구현
- 기타
  - 댓글 삭제 / 신고, context API 구조 세팅

**사용성 및 접근성**
- 모달창
  - Tab을 누를 시, 포커스가 모달창을 벗어나지 않도록 구현
- 커스텀 셀렉트 박스
  - 키보드 사용 시 포커스가 셀렉트 박스 내에서 이동하도록 구현
  - 위아래 방향키, Tab, shift + Tab, 스페이스, 엔터를 이용한 포커스 이동, 열기/닫기, 선택 기능 제공
- 폼(form)
  - textarea 실시간 글자수/최대 글자수 피드백 및 리사이징

**기타**
- 지식 공유
  - API 사용법, 상태 끌어올리기, setTimeout/clearTimeout 활용법 등<br>
    프로젝트를 진행하며 필요할 때마다 팀 내, 팀 외 지식 공유
<br>

## 🐈 최예지

**🖥️ 화면 구현**
- 모든 페이지에서 재사용되는 공통 컴포넌트 제작
  - 하단 탭 메뉴바
- 상품 등록(수정) 페이지
- 검색 결과 페이지

**🛠️ 기능 개발**
- 하단 탭 메뉴 바
  - 하단 탭 메뉴 클릭 시 해당 페이지로 이동
  - 선택된 메뉴 아이콘만 색칠(활성화) 되도록 구현

- 회원 정보 수정 기능
  - 기존 마이 프로필 이미지와 정보 불러오기
  - 프로필 이미지 삭제(초기화) 기능
  - 수정 페이지에서 이미지 미수정 시 기존 마이 프로필 이미지 유지

- 상품 등록 기능
  - 업로드한 상품 이미지 미리보기 및 삭제
  - 각 입력값에 대한 유효성 관리 =>
    - 이미지 등록 실패 경고창 
    - 상품 가격의 천 단위 콤마 생성 및 숫자만 입력 받도록 제한 
      - API 연결 => 콤마를 삭제한 숫자 형태로 변경해서 전송되도록 함
    - 상품 가격의 최대 금액(자릿수) 지정
    - 상품명의 유효 글자수 지정 (2~25글자)
    - 악의적인 입력을 방지하기 위해 상품명에 공백 연속 사용 제한
- 유효한 값이 모두 입력 되었을 때만 저장 버튼 활성화
- 상품 소개란 줄바꿈 처리로 가독성 개선
- API 연결을 통해 등록된 상품 정보 전송

**기타**
  - notion 문서 작성 -> 회의록 정리
<br>

## 👍 공통

- README 작성
- 이미지
  - 레티나 디스플레이에 대응하기 위해, 원본 이미지의 2배 사이즈 이미지 사용
- 커밋 메시지 컨벤션, 코드 컨벤션, 네이밍 컨벤션, 폴더 구조 컨벤션 설립
<br>
<br>

## 3. 프로젝트 기간

2023년 6월 2일 ~ 2023년 6월 27일
![개발기간](https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/c9376685-de57-4fd7-a78e-5e5436b6918a)
<br>
- 기획 회의 (서비스 컨셉, 컨벤션 수립, 역할 분배, 일정 구상) : 6월 2일 ~ 6월 3일
- 로고, UI 디자인 : 6월 2일 ~ 6월 5일
- 공통 UI 컴포넌트 개발 : 6월 3일 ~ 6월 8일
- 페이지 구현 : 6월 8일 ~ 6월 14일
- 기능 개발 : 6월 15일 ~ 6월 24일
- 버그 수정 : 6월 25일 ~ 6월 27일
- 배포 : 6월 26일 ~ 6월 27일
<br>
<br>

## 4. 개발 환경

<table>
  <tr align = "center">
    <th colspan="2"> 프론트엔드 </th>
    <th> 백엔드 </th>
    <th> 배포 </th>
    <th colspan="2"> 디자인 </th>
  </tr>
  <tr align = "center">
    <td> <img src="https://github.com/echo-6/final-8-Off-field-baseball/assets/58187854/504d9b13-1494-4648-821f-187df12410c9" height="50px"><br>React</td>
    <td> <img src="https://github.com/echo-6/final-8-Off-field-baseball/assets/58187854/85dee32a-eca6-403d-8b0e-521ff2270249" height="50px"><br>styled-components</td>
    <td> 제공된 API </td>
    <td> <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/0dc932cd-c71f-4c61-8804-4892d2065fd0" height="50px"><br>netlify </td>
    <td> <img src="https://github.com/echo-6/final-8-Off-field-baseball/assets/58187854/2125a01e-7cc3-4106-abdc-014044ed87e9" height="50px"><br>Figma</td>
    <td> <img src="https://i.namu.wiki/i/NGpXZfh1nhfo8DCNUydodk5az5YbbCMKs-7ugVuSF-p1gxjnycbN4okab4kVeDiJetcbQ_vipVynVqA7hItbgv__a_Q4cipAtbboSRwCQOuPF1vztDKZkMNCVXDBPLebJOAQIk-COQGK2nHtCyNQqw.svg" height="50px"><br>Adobe Illustrator</td>
  </tr>
</table>
<br>

### 4-1. 기타 환경

- OS : <img src="https://img.shields.io/badge/windows-0078D6?style=flat&logo=windows&logoColor=white"/> <img src="https://img.shields.io/badge/macos-000000?style=flat&logo=macos&logoColor=white"/>
- IDE : <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=flat&logo=visualstudiocode&logoColor=white"/>
- 협업 툴 : <img src="https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/notion-000000?style=flat&logo=notion&logoColor=white"/> <img src="https://img.shields.io/badge/figma-F24E1E?style=flat&logo=figma&logoColor=white"/> <img src="https://img.shields.io/badge/discord-5865F2?style=flat&logo=discord&logoColor=white"/>
- 포매터 : <img src="https://img.shields.io/badge/prettier-F7B93E?style=flat&logo=prettier&logoColor=white"/>
<br>
<br>

## 5. 프로젝트 구조

<img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/8a841dbb-63f4-471b-9924-d17f5c3ba2f2" width="800px"/>
<br>
<br>

<p align="right"><a href="#top">TOP 🔼</a></p>

## 6. Git Branch 전략

✅ **GitHub Flow 전략 채택**

![깃헙플로우](https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/de13426a-ddf8-4020-8879-815599e0ed07)
<br>
- 프로젝트의 규모와 기간을 고려했을 때, 브랜치 관리에 드는 리소스를 줄이고<br>
  최소 기능을 빠르게 구현하는데 집중하기 위하여 GitHub Flow를 채택하였습니다.
<br>

## 7. 협업 방식 & 프로젝트 관리
### 📍 순조로운 프로젝트를 위한 원칙
**💛 나누면서 성장하기**
```
- 동료에게 도움 요청하는 것을 어려워하지 않기
- 팀원이 도움을 요청했을 때, VSCode 라이브 셰어 기능을 활용하여 다 함께 해결하기
- 코딩하면서 마주친 문제들에 대해 고민했던 부분, 느꼈던 부분을 디스코드 스레드에 수시로 공유하기
```
**🔥 코드만큼 감정 챙기기**
```
- 불만이 있으면 참지 말고 바로 말하기 
- 서로의 의견 경청하고 존중하기
- 채팅방과 디엠을 적극적으로 활용하여 소통하기
```
**🤔 서로 신뢰주기**
 ```
- 회의에 참석하지 못하는 경우가 생기면 꼭 보고하기
```

### 🌳 프로젝트 진행
- 정기 회의 및 코드 리뷰
  - 월/목 AM 9시 정기회의와 주 3회 코드리뷰를 가지면서 작업 진행 상황 공유
  - 회의록 : [Notion](https://www.notion.so/75e771e2f0074516986d9e8a93106bbc?pvs=4)
<br>

- Discord GitHub 봇을 사용하여 실시간 PR 상황 공유 ⬇️
<img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/1e6aa54f-a707-4616-ab6b-7b435e935f00" width="400px"/>
<br>
<br>

- Notion Project 템플릿을 사용하여 할 일 & 일정 관리
<img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/2ac3ca1d-e854-49a4-a568-dfb38a86159d" width="600px"/>
<br>
<br>


## 8. 컨벤션

- 시맨틱 마크업
  - 의미있는 변수명 사용
  - css : kebab-case
  - js : camelCase
  - 변수 : var 사용 금지

- Prettier 설정
```
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
};
```

- 커밋 컨벤션 (Udacity의 컨벤션 참고)

```
- Feat: 새로운 기능 추가
- Fix: 버그 수정
- Docs: 리드미 등 문서 수정, 라이브러리 설치
- Style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- Refactor: 코드 리팩토링
- Test: 테스트 코드, 리팩토링 테스트 코드 추가
- Chore: 빌드 업무 수정, 패키지 매니저 수정
- Rename: 파일명 혹은 폴더명 수정, 위치 옮기기
- Remove: 파일 삭제
```
<br>
<br>

## 9. 서비스 미리보기
<table width="100%">
<tr>
    <th colspan="3">홈</th>
</tr>
<tr align="center">
    <td valign="top" width="30%">
    스플래시
    </td>
    <td valign="top" width="30%">
    회원가입
    </td>
    <td valign="top" width="30%">
    프로필설정
    </td>
</tr>
<tr align="center">
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/a1da77f8-ec66-4ad6-8be0-f5b0c9a230fc" width="300px">
    </td>
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/ae7a207a-d90b-4b8a-92bc-045ae0ae8493" width="300px">
    </td>
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/c648699a-dd87-49dd-9176-daeafc819e63" width="300px">
    </td>
</tr>

<tr>
    <th colspan="3">피드 / 채팅</th>
</tr>
<tr align="center">
    <td valign="top" width="30%">
    홈피드, 검색기능
    </td>
    <td valign="top" width="30%">
    신고하기
    </td>
    <td valign="top" width="30%">
    채팅
    </td>
 </tr>
<tr align="center">
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/5654a29b-5474-432f-9031-929499ed078c" width="300px">
    </td>
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/9c0571de-c091-4ef6-9c97-15028e577ae9" width="300px">
    </td>
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/f5d3f312-8015-452a-9761-4c1880400d5b" width="300px">
    </td>
 </tr>

 <tr>
    <th colspan="3">게시글</th>
</tr>
<tr align="center">
    <td valign="top" width="30%">
    게시글 상세페이지(좋아요, 댓글)
    </td>
    <td valign="top" width="30%">
    게시물 작성
    </td>
    <td valign="top" width="30%">
    게시물 삭제
    </td>
 </tr>
<tr align="center">
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/df449c04-02c6-4440-b262-2e799997d9d5" width="300px">
    </td>
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/452f127a-27c8-4728-b38a-d92b0fd4fdc2" width="300px">
    </td>
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/95bf953e-3d73-44ea-a0ae-199185c05d40" width="300px">
    </td>
 </tr>

<tr>
    <th colspan="3">프로필</th>
</tr>
<tr align="center">
    <td valign="top" width="30%">
    마이프로필
    </td>
    <td valign="top" width="30%">
    유어프로필
    </td>
    <td valign="top" width="30%">
    리스트형/앨범형
    </td>
 </tr>
<tr align="center">
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/431d1f38-1410-4684-a3d8-52b32de436ab" width="300px">
    </td>
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/1002a3d5-0880-475c-972c-b42c412ce661" width="300px">
    </td>
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/354cd9cc-85d5-4d03-bd99-deac96136ef1" width="300px">
    </td>
 </tr>
 <tr align="center">
    <td colspan="2" valign="top" width="50%">
    프로필 수정
    </td>
    <td valign="top" width="30%">
    팔로워 / 팔로잉
    </td>
 </tr>
<tr align="center">
    <td colspan="2" valign="top" width="60%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/91395e8f-ea09-420f-92bb-66748ca5ee58" width="300px">
    </td>
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/2e234c92-4483-4711-9242-f1d63f799185" width="300px">
    </td> 
</tr>

<tr>
    <th colspan="3">판매 상품</th>
</tr>
<tr align="center">
    <td valign="top" width="30%">
    상품 등록
    </td>
    <td valign="top" width="30%">
    상품 수정
    </td>
    <td valign="top" width="30%">
    상품 삭제
    </td>
 </tr>
<tr align="center">
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/b9e44515-ab97-47c8-980e-1bda02c82287" width="300px">
    </td>
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/30360a52-a1d9-4e83-bdf8-89f612b204a4" width="300px">
    </td>
    <td valign="top" width="30%">
      <img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/a94378c8-98a1-4108-ad0d-4f87130c8bcd" width="300px">
    </td>
 </tr>
</table>
<br>


## 10. 핵심 코드 설명

### 👨‍👧‍👦 마이 팀 테마 변경 코드
```
✔️ API 명세에서 자기소개 정보를 담당하는 intro 키의 값으로 자기소개와 응원하는 팀 정보를 $로 구분하여 서버에 전달
```
<br>

<img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/116331221/190bd427-bdb4-4886-9190-9a48f60fde47" width="
340px">

```json
{
  "user": {
    "username": "test",
    "email": "test@test.test",
    "password": "test123!",
    "accountname": "testman123",
    "intro": "자기소개입니다.$hanhwa",
    "image": "",
  }
} 
```
<br>
<hr>
  
```
✔️ 구단별 시그니처 컬러 및 서브컬러를 global.css에 변수로 저장
```
<img src="https://github.com/FRONTENDSCHOOL5/final-08-Off-field-baseball/assets/58187854/baa5593e-de96-468c-b30a-7b2998e014f6" width="350px">
<br>

```jsx
// 로그인한 유저의 팀 정보 불러오기
// const res = await fetch ...
const json = await res.json();
const team = json.profile.intro.split('$')[1];
// 팀 정보 로컬스토리지에 저장 / context에 저장됨
localStorage.setItem('myTeam', team);

// context에 저장된 myTeam 사용하기
const { myTeam } = useContext(UserContext);

// 팀 컬러 적용
background: ${(props) =>
        'var(--primary-color-' + (props.myTeam || 'default') + ')'};

// 아이콘 적용 
<svg>
        <path //생략
          fill={
            hearted
              ? myTeam === 'kt'
                ? 'var(--tertiary-color-kt)'
                : 'var(--primary-color-' + (myTeam || 'default') + ')'
              : ''
          }/>
</svg>
```
<br>
<br>

## 11. 회고 및 소감

- 팀별로 게시판을 만들면 좋겠다는 의견이 있었는데 구현하지 못해서 아쉽습니다. 
- 이미지 최적화, 코드 리팩토링 등 개선될 부분들이 많은데 제대로 진행하지 못해서 아쉽습니다.
- 수료 후에도 프로젝트를 계속 유지하여 최적화, 기능 추가 등 꾸준히 지속할 것입니다.
<br>
<br>

<p align="right"><a href="#top">TOP 🔼</a></p>

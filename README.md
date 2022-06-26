![header](https://capsule-render.vercel.app/api?type=transparent&fontColor=295CC2&text=HUHS%20Reservation%20System&fontSize=60&height=300&desc=React%20Study&descAlignY=70)

# Overview

한양대학교 중앙동아리 HUHS 내 스터디들은 동아리방을 예약해서 스터디를 진행하는 경우가 많습니다. 동아리 규모도 크고 스터디의 종류도 많은 데 비해 동아리방 예약 체계가 잘 잡혀있지 않아서 여러 문제들이 있었습니다. 카카오톡으로 예약을 하는 경우, 아래 사진과 같이 이전 예약이 누락되거나 동아리원에게 공지가 되지 않아 시간대가 겹치는 문제가 종종 발생했습니다. 이를 해결하고자 동아리방 예약 일정을 한눈에 확인할 수 있는 웹 서비스를 개발하게 되었습니다. 사용자는 캘린더를 기반으로 동아리방 사용 예약/수정/삭제, 다른 일정 확인을 할 수 있습니다.

HRS는 직관적인 UI를 통해 동아리방 예약 상태를 알아볼 수 있는 정보를 제공합니다. 이로 인해 다수의 사용자들간의 혼선을 막고 관리자 입장에서 체계적인 운영이 가능하도록 도움을 줄 수 있습니다.

<img src="https://user-images.githubusercontent.com/60772480/175800655-4cd39786-37f3-4431-9c60-d23739078875.jpg" style="height: 450px" />
<img src="https://user-images.githubusercontent.com/60772480/175800678-eb544505-205e-42de-b84e-9ec8cd033ffc.jpg" />

<br />

# 👨‍💻 Contributers

<br />

<table >
  <tr height="130px">
    <td align="center" width="130px">
      <a href="https://github.com/KimGaeun0806"><img src="https://avatars.githubusercontent.com/u/80266418?v=4" style="border-radius:50%"/></a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/KIMMIKSIK"><img src="https://avatars.githubusercontent.com/u/98815511?v=4" style="border-radius:50%" /></a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/wjdgml3834"><img src="https://avatars.githubusercontent.com/u/88475978?v=4" style="border-radius:50%"/></a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/ordidxzero"><img src="https://avatars.githubusercontent.com/u/60772480?v=4" style="border-radius:50%"/></a>
    </td>
  </tr>
  <tr height="50px">
    <td align="center" width="130px">
      <a href="https://github.com/KimGaeun0806">김가은</a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/KIMMIKSIK">김민식</a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/wjdgml3834">김정희</a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/ordidxzero">허유준</a>
    </td>
  </tr>
</table>

# 🚀 배포 링크

https://huhs-reservation.netlify.app

<br />

# 🗓 개발 기간

첫 커밋부터 1차 배포까지의 기간을 의미합니다.

## Frontend

2022.05.23 ~ 2022.06.23

## Backend

2022.05.12 ~ 2022.05.23

# 🛠 개발 환경

## 기술 스택

### Frontend

<table>
  <tr height="130px">
    <td align="center" width="130px">
      <img src="https://cdn.svgporn.com/logos/react.svg"/></a>
    </td>
    <td align="center" width="130px">
      <img src="https://cdn.svgporn.com/logos/prettier.svg"/></a>
    </td>
    <td align="center" width="130px">
      <img src="https://cdn.svgporn.com/logos/eslint.svg"/></a>
    </td>
    <td align="center" width="130px">
      <img src="https://cdn.svgporn.com/logos/axios.svg"/></a>
    </td>
  </tr>
</table>

### Backend

<table>
  <tr height="130px">
    <td align="center" width="130px">
      <img src="https://cdn.svgporn.com/logos/koa.svg"/></a>
    </td>
    <td align="center" width="130px">
      <img src="https://cdn.svgporn.com/logos/mongodb.svg"/></a>
    </td>
    <td align="center" width="130px">
      <img src="https://cdn.svgporn.com/logos/typescript-icon.svg"/></a>
    </td>
    <td align="center" width="130px">
      <img src="https://cdn.svgporn.com/logos/webpack.svg"/></a>
    </td>
  </tr>
</table>

- `react` : (^18.1.0)
- `prop-types`
- `dayjs`
- `styled-components`
- `react-icons`
- `styled-reset`
- `axios`

# 📁 프로젝트 구조

```
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   └── robots.txt
└── src
    ├── App.js
    ├── assets
    │   └── images
    │       └── plus.svg
    ├── client.js
    ├── components
    │   ├── AddScheduleButton.jsx
    │   ├── Calendar.js
    │   ├── Component.jsx
    │   ├── InputForm
    │   │   ├── CreateContext.jsx
    │   │   ├── FormBody.jsx
    │   │   ├── InformationBox.jsx
    │   │   ├── PurposeBox.jsx
    │   │   └── TimeSetBox.jsx
    │   ├── InputStudentNumber.jsx
    │   ├── ScheduleList.jsx
    │   ├── ScheduleListItem.jsx
    │   └── Week.js
    ├── constants
    │   └── index.js
    ├── index.js
    ├── pages
    │   └── index.jsx
    └── styles
        ├── GlobalStyle.js
        ├── fonts
        │   ├── NanumPenScript-Regular.ttf
        │   ├── NotoSansKR-Black.otf
        │   ├── NotoSansKR-Bold.otf
        │   ├── NotoSansKR-Light.otf
        │   ├── NotoSansKR-Medium.otf
        │   ├── NotoSansKR-Regular.otf
        │   └── NotoSansKR-Thin.otf
        └── index.css
```

# 🏃‍♀️ 프로젝트 실행방법

```bash
git clone https://github.com/HUHS-ReactStudy/huhs-reservation-frontend.git
cd huhs-reservation-frontend
npm i
npm run start
```

# 🤖 기능

### 1) 메인 화면

|                                                         캘린더 기능                                                          |                                                                 동아리방 신청 예약화면                                                                 |                                                       학번 인증 기능                                                       |
| :--------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![달력넘기기](https://user-images.githubusercontent.com/88475978/175766378-41393f1b-7bf5-410b-881a-1ec71622cd51.gif) | ![동아리방-신청현황-보여주기](https://user-images.githubusercontent.com/88475978/175766706-37cc5860-c09b-43dc-b84e-d38222d14dcc.gif) | ![학번인증](https://user-images.githubusercontent.com/88475978/175766735-6c8867ae-5ed2-483f-9732-4ee5ffc7aa3e.gif) |

### 2) 일정 조율 화면

|                                                         일정 생성                                                          |                                                         일정 편집                                                          |                                                         일정 삭제                                                          |
| :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![일정등록](https://user-images.githubusercontent.com/88475978/175767007-51abf779-e67d-49aa-8322-98b915c3dd56.gif) | ![일정편집](https://user-images.githubusercontent.com/88475978/175766730-87bdfe3c-f713-43fa-a7e7-3efafa0cdca5.gif) | ![일정-삭제](https://user-images.githubusercontent.com/88475978/175766717-c514a1e9-92a4-4f30-ae49-2d289ee625bf.gif) |

# 🙋‍♀️ 느낀점

- 김민식 : 협동 작업을 통해 배운 내용을 기록하고 관리하는 것과 같은 좋은 습관을 팀원들로부터 많이 배울 수 있었습니다. 그간 모르고 사용했던 git의 원리를 이해하고 사용할 수 있게 되었고 작업을 진행하면서 수 차례 의사소통의 중요성을 느끼며 통일성을 갖춘 프로젝트를 만들어 나가는 것이 굉장히 중요하다는 것을 느낄 수 있었습니다. react의 다양한 기능을 사용하기 위해 노력한 점이 가장 잘한 부분인 것 같고 commit과 pr 정리가 다소 부족했던 것 같아 다음 프로젝트에는 이 점을 개선할 수 있도록 노력하겠습니다.

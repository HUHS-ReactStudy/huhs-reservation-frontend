![header](https://capsule-render.vercel.app/api?type=transparent&fontColor=295CC2&text=HUHS%20Reservation%20System&fontSize=60&height=300&desc=React%20Study&descAlignY=70)

#  Overview
한양대학교 중앙동아리 HUHS 내 스터디들은 동아리방을 예약해서 스터디를 진행하는 경우가 많습니다. 동아리 규모도 크고 스터디의 종류도 많은 데 비해 동아리방 예약 체계가 잘 잡혀있지 않아서 여러 문제들이 있었습니다. 카카오톡으로 예약을 하는 경우, 아래 사진과 같이 이전 예약이 누락되거나 동아리원에게 공지가 되지 않아 시간대가 겹치는 문제가 종종 발생했습니다. 이를 해결하고자 동아리방 예약 일정을 한눈에 확인할 수 있는 웹 서비스를 개발하게 되었습니다. 사용자는 캘린더를 기반으로 동아리방 사용 예약/수정/삭제, 다른 일정 확인을 할 수 있습니다.

HRS는 직관적인 UI를 통해 동아리방 예약 상태를 알아볼 수 있는 정보를 제공합니다. 이로 인해 다수의 사용자들간의 혼선을 막고 관리자 입장에서 체계적인 운영이 가능하도록 도움을 줄 수 있습니다.

<br />

# 👨‍💻 Contributers

<br />

<table align="center">
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

# 배포 링크

https://huhs-reservation.netlify.app

<br />

# 개발 환경

## 기술 스택

### Frontend
<table align="center">
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
<table align="center">
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
│   ├── index.html
│   └── robots.txt
└── src
    ├── App.js
    ├── assets
    │   └── images
    │       └── plus.svg
    ├── client.js
    ├── components
    │   ├── AddScheduleButton.jsx
    │   ├── Calendar.js
    │   ├── Component.jsx
    │   ├── InputForm
    │   │   ├── CreateContext.jsx
    │   │   ├── FormBody.jsx
    │   │   ├── InformationBox.jsx
    │   │   ├── PurposeBox.jsx
    │   │   └── TimeSetBox.jsx
    │   ├── InputStudentNumber.jsx
    │   ├── ScheduleList.jsx
    │   ├── ScheduleListItem.jsx
    │   └── Week.js
    ├── constants
    │   └── index.js
    ├── index.js
    ├── pages
    │   └── index.jsx
    └── styles
        ├── GlobalStyle.js
        ├── fonts
        │   ├── NanumPenScript-Regular.ttf
        │   ├── NotoSansKR-Black.otf
        │   ├── NotoSansKR-Bold.otf
        │   ├── NotoSansKR-Light.otf
        │   ├── NotoSansKR-Medium.otf
        │   ├── NotoSansKR-Regular.otf
        │   └── NotoSansKR-Thin.otf
        └── index.css
```

# 기능

# 느낀점
..

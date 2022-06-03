import styled from 'styled-components';
import React from 'react';
import PurposeBox from './PurposeBox';
import TimeSetBox from './TimeSetBox';
import InformationBox from './InformationBox';
// 일정폼을 외부의 전체 창을 의미합니다.
const BackgroundBody = styled.div`
  height: 100vh;
`;
// 회색배경의 일정폼 몸체를 의미합니다.
const MainBody = styled.main`
  margin: auto;
  background: #dbdbdb;
  height: 844px;
  width: 390px;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > header {
    margin-top: 26px;
  }
  & > div {
    margin-top: 32px;
  }
`;
// 취소, 일정등록, 저장을 담고 있는 header입니다.
const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 16px;
  gap: 27px;
  width: 390px;
  height: 52px;
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 15px;
  }
`;

const FormBody = function formBody() {
  return (
    <BackgroundBody>
      <MainBody>
        <HeaderBox>
          <a href="#">취소</a>
          <div className="main-title">일정등록</div>
          <a href="#">저장</a>
        </HeaderBox>
        <PurposeBox />
        <TimeSetBox />
        <InformationBox />
      </MainBody>
    </BackgroundBody>
  );
};

export default FormBody;

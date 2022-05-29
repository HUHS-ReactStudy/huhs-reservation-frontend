/* eslint-disable */
import styled from 'styled-components';
import FirstContentBox from './firstContentBox';
import SecondContentBox from './secondContentBox';
import ThirdContentBox from './thirdContentBox';

const MainBody = styled.div`
  margin: auto;
  // position: relative;
  // left: 0px;
  background: linear-gradient(
    180deg,
    rgba(159, 195, 228, 0.8) 0%,
    rgba(55, 118, 166, 0.2) 54.17%,
    #3776a6 100%
  );
  height: 900px;
  width: 423px;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentTitleBox = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-top: 20px;
  gap: 27px;
  width: 390px;
  height: 52px;
  left: 2px;
  top: 26px;
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  & div {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
  }
  & .main-title {
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
`;

const Schedule = () => {
  return (
    <MainBody>
      <ContentTitleBox>
        <a href="#" className="cancel">
          취소
        </a>
        <div className="main-title">일정등록</div>
        <a href="#">저장</a>
      </ContentTitleBox>
      <FirstContentBox />
      <SecondContentBox />
      <ThirdContentBox />
    </MainBody>
  );
};

export default Schedule;

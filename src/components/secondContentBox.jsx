/* eslint-disable */
import styled from 'styled-components';

const TotalBox = styled.div`
  margin-top: 40px;
`;

const GroupBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  width: 380px;
  height: 30px;
  background: #ffffff;
  justify-content: space-between;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  & span {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
  }
  & + & {
    margin-top: 0px;
  }
  &.first {
    border-radius: 10px 10px 0px 0px;
    border-bottom: 2px solid rgba(115, 119, 123, 0.3);
  }
  &.second {
    border-radius: 0px 0px 10px 10px;
  }
`;

const StartEndDate = styled.span`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #73777b;
`;

const SecondContentBox = () => {
  return (
    <TotalBox>
      <GroupBox className="first">
        <span>시작</span>
        <StartEndDate>2022년 5월 16일(월) 오후 05:30</StartEndDate>
      </GroupBox>
      <GroupBox className="second">
        <span>종료</span>
        <StartEndDate>2022년 5월 16일(월) 오후 07:30</StartEndDate>
      </GroupBox>
    </TotalBox>
  );
};

export default SecondContentBox;

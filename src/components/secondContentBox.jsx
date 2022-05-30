import styled from 'styled-components';
import { memo } from 'react';

const TotalBox = styled.div`
  margin-top: 40px;
`;

const GroupBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 380px;
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

const StartEndDate = styled.input`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #73777b;
  outline: none;
  border: none;
  cursor: pointer;
`;

const SecondContentBox = memo(function SecondContentBox() {
  return (
    <TotalBox>
      <GroupBox className="first">
        <span>시작</span>
        <StartEndDate type="datetime-local" placeholder="2022년 5월 16일(월) 오후 05:30" />
      </GroupBox>
      <GroupBox className="second">
        <span>종료</span>
        <StartEndDate type="datetime-local" placeholder="2022년 5월 16일(월) 오후 07:30" />
      </GroupBox>
    </TotalBox>
  );
});

export default SecondContentBox;

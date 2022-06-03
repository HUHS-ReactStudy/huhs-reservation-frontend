import styled from 'styled-components';
import React from 'react';
import PurposeBox from './PurposeBox';
import TimeSetBox from './TimeSetBox';
import InformationBox from './InformationBox';
import EditContext from './CreateContext';
import { useContext } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
// 일정폼 외부의 하얀 배경의 전체 창을 의미합니다.
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
// 취소, 일정등록, 저장 등을 담고 있는 header입니다.
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
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  button {
    font-weight: 400;
    font-size: 15px;
  }
`;
// context의 state값이 일정편집일 때 나타날 일정삭제 버튼입니다.
const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 358px;
  height: 50px;
  background: #ffffff;
  color: #f55353;
  font-weight: 700;
  font-size: 15px;
  margin-top: 25px;
  border-radius: 10px;
  .trash-icon {
    font-size: 19px;
    margin-right: 8.5px;
  }
`;

const FormBody = function formBody() {
  const { state } = useContext(EditContext);
  return (
    <BackgroundBody>
      <MainBody>
        <HeaderBox>
          <button>취소</button>
          <div className="main-title">{state}</div>
          <button href="#">저장</button>
        </HeaderBox>
        <PurposeBox />
        <TimeSetBox />
        <InformationBox />
        {state === '일정편집' ? (
          <CancelButton>
            <FaRegTrashAlt className="trash-icon" />
            일정 삭제
          </CancelButton>
        ) : undefined}
      </MainBody>
    </BackgroundBody>
  );
};

export default FormBody;

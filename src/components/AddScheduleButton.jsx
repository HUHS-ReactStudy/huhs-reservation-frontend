import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '../assets/images/plus.svg';
import { useContext } from 'react';
import EditContext from './InputForm/CreateContext';

// 새로운 일정 등록을 생성할 수 있는 버튼에 해당하는 컴포넌트입니다.
const AddScheduleButton = () => {
  const {
    actions: { setTitle, setHeight },
  } = useContext(EditContext);

  return (
    <AddButton
      type="button"
      onClick={() => {
        setTitle('일정등록');
        setHeight('100vh');
      }}
    >
      <PlusIcon width="28" height="28" />
    </AddButton>
  );
};

const AddButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #f9d771;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: -20px;
  transform: translateX(302px);
`;

export default AddScheduleButton;

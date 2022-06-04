import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '../assets/images/plus.svg';

const AddScheduleButton = () => {
  return (
    <AddButton type="button">
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
`;
export default AddScheduleButton;

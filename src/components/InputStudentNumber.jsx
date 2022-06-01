import React from 'react';
import styled from 'styled-components';

const InputStudentNumber = () => {
  return (
    <Container>
      <UserInputContainer>
        <UserInput type="number" autoFocus placeholder="학번을 입력하세요" />
      </UserInputContainer>
      <ButtonContainer>
        <CancelButton type="button">취소</CancelButton>
        <ConfirmButton type="submit">확인</ConfirmButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.form`
  width: 320px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const UserInputContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 41px;
`;

const UserInput = styled.input`
  border: 0;
  border-bottom: 1px solid #73777b;
  font-weight: 500;
  font-size: 20px;
  width: 162px;
  height: 20px;
  text-align: center;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #dbdbdb;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const ButtonContainer = styled.section`
  display: flex;
  border-top: 1px solid #e5e5e5;
`;

const CancelButton = styled.button`
  width: 160px;
  height: 61px;
  border-right: 1px solid #e5e5e5;
  font-weight: 700;
`;

const ConfirmButton = styled.button`
  width: 160px;
  height: 61px;
  color: #0b4e84;
  font-weight: 700;
`;

export default InputStudentNumber;

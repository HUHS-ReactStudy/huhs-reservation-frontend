import React from 'react';
import styled from 'styled-components';

// 학번입력창 모달 관련 컴포넌트입니다.
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

// 학번입력란 전체를 감싸고 있는 컨테이너입니다.
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

// 학번 입력하는 Input을 감싸주는 컨테이너입니다.
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
  /* 하단의 코드 같은 경우는 input의 타입을 number로 했을때 
  숫자를 조정하는 화살표들이 생기는 것을 없애주는 코드입니다. */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

// 취소와 확인 버튼 두개를 감싸주는 컨테이너입니다.
const ButtonContainer = styled.section`
  display: flex;
  border-top: 1px solid #e5e5e5;
`;

// 취소 버튼 관련 CSS 입니다.
const CancelButton = styled.button`
  width: 160px;
  height: 61px;
  border-right: 1px solid #e5e5e5;
  font-weight: 700;
`;

// 확인 버튼 관련 CSS 입니다.
const ConfirmButton = styled.button`
  width: 160px;
  height: 61px;
  color: #0b4e84;
  font-weight: 700;
`;

export default InputStudentNumber;

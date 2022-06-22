import React, { useCallback } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import EditContext from './InputForm/CreateContext';
import client from '../client';

// 학번입력창 모달 관련 컴포넌트입니다.
const InputStudentNumber = ({ NowYear, NowMonth, NowDate, activateModal }) => {
  const {
    state: { userReservationId, tokenId },
    actions: { setTitle, setHeight, setTokenId },
  } = useContext(EditContext);

  const [userInput, setUserInput] = useState({
    studentNumber: '',
  });

  const [errorMessage, setErrorMessage] = useState(false);

  const onChangeInput = useCallback(
    e => {
      const nextUserInput = {
        ...userInput,
        [e.target.name]: e.target.value,
      };
      setUserInput(nextUserInput);
    },
    [userInput],
  );

  const handleSubmit = e => {
    e.preventDefault();
    if (userInput.studentNumber == '') {
      setErrorMessage(true);
      e.target.reset();
    } else {
      setErrorMessage(false);
      e.target.reset();
    }
  };

  const checkStudentNumber = async () => {
    try {
      const res = await client.post('/api/v1/reservations/auth', {
        reservationId: userReservationId,
        studentId: userInput.studentNumber,
      });
      const newTokenId = {
        ...tokenId,
        token: res.data.data,
        id: userReservationId,
      };
      setTokenId(newTokenId);
      setTitle('일정편집');
      setHeight('100vh');
    } catch (e) {
      setErrorMessage(true);
      console.log(e);
    }
  };

  return (
    <Background>
      <Container onSubmit={handleSubmit}>
        <UserInputContainer>
          <UserInput
            name="studentNumber"
            type="number"
            onChange={onChangeInput}
            autoFocus
            placeholder="학번을 입력하세요"
            className={errorMessage ? 'activateErrorColor' : ''}
          />
        </UserInputContainer>
        <ButtonContainer>
          <CancelButton type="button" onClick={activateModal}>
            취소
          </CancelButton>
          <ConfirmButton type="submit" onClick={checkStudentNumber}>
            확인
          </ConfirmButton>
        </ButtonContainer>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 학번입력란 전체를 감싸고 있는 컨테이너입니다.
const Container = styled.form`
  width: 320px;
  height: 200px;
  background-color: #ffffff;
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

  &.activateErrorColor {
    border-bottom: 1px solid #f55353;
  }

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

InputStudentNumber.propTypes = {
  NowYear: PropTypes.string,
  NowMonth: PropTypes.string,
  NowDate: PropTypes.string,
  activateModal: PropTypes.func,
};

export default InputStudentNumber;

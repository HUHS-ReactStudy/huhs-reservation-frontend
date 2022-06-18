import styled from 'styled-components';
import React from 'react';
import PurposeBox from './PurposeBox';
import TimeSetBox from './TimeSetBox';
import InformationBox from './InformationBox';
import EditContext from './CreateContext';
import { useContext, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import client from '../../client';
// 일정폼 외부의 하얀 배경의 전체 창을 의미합니다.
const BackgroundBody = styled.div`
  position: fixed;
  bottom: 1px;
  height: ${props => props.height};
  background: white;
  width: 390px;
  transition: 0.8s;
  overflow: scroll;
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
// PurposeBox, TimeSetBox, InformationBox에 Reset props을 전달하여 창을 내렸다 다시 올리면 내용이 초기화 되도록 하였습니다.
const FormBody = () => {
  const [colorSet] = useState([
    { color: '#F8DC81', id: 1 },
    { color: '#89D6A2', id: 2 },
    { color: '#668BC2', id: 3 },
    { color: '#B67DDF', id: 4 },
  ]);
  const [colors, setColors] = useState('#F8DC81');
  const {
    state: { title, adHeight, purpose, timeSet, information, tokenId },
    actions: { setHeight, setPurpose, setTimeSet, setInformation, setTokenId },
  } = useContext(EditContext);
  // axios body에 넣어줄 입력 데이터
  const allData = {
    name: information.name,
    studentId: information.number,
    department: information.major,
    purpose: purpose,
    year: parseInt(timeSet.start.substr(0, 4)),
    month: parseInt(timeSet.start.substr(5, 2)),
    day: parseInt(timeSet.start.substr(8, 2)),
    startTime: timeSet.start.substr(11, 5),
    endTime: timeSet.end.substr(11, 5),
    color: colors,
    description: information.detail,
  };
  // post를 이용한 일정등록
  const scheduleReg = () => {
    const fetchData = async function fetch() {
      const response = await client.post(`/api/v1/reservations`, allData);
      const data = response.data;
      console.log(data);
      const plusReservationId = data.reservationId;
      console.log(plusReservationId);
    };
    fetchData();
  };
  // put을 이용한 일정 수정(학번 확인 모달 창으로부터 토큰을 넘겨받음)-tokenId라는 걸 받으면 id, token 2개를 사용할 수 있음.
  const scheduleAdj = tokenId => {
    const fetchData = async function fetch() {
      const response = await client.put(`/api/v1/reservations${tokenId.id}`, allData, {
        headers: {
          Authorization: `Bearer ${tokenId.token}`,
        },
      });
      const data = response.data;
      console.log(data);
    };
    fetchData();
  };
  // delete를 이용한 일정 삭제(토큰과 id를 넘겨받음)-tokenId라는 걸 받으면 id, token 2개를 사용할 수 있음.
  const scheduleDel = tokenId => {
    const fetchData = async function fetch() {
      const response = await client.delete(`/api/v1/reservations${tokenId.id}`, allData, {
        headers: {
          Authorization: `Bearer ${tokenId.token}`,
        },
      });
      const data = response.data;
      console.log(data);
    };
    fetchData();
  };

  return (
    <BackgroundBody height={adHeight}>
      <MainBody>
        <HeaderBox>
          <button
            onClick={() => {
              setColors('#F8DC81');
              setHeight('0vh');
              setPurpose('');
              setTimeSet({ start: '', end: '' });
              setInformation({
                name: '',
                number: '',
                major: '',
                detail: '',
              });
              setTokenId({ token: '', id: '' });
            }}
          >
            취소
          </button>
          <div className="main-title">{title}</div>
          <button
            href="#"
            type="button"
            onClick={
              title === '일정등록'
                ? scheduleReg
                : () => {
                    scheduleAdj(tokenId);
                  }
            }
          >
            저장
          </button>
        </HeaderBox>
        <PurposeBox colorSet={colorSet} colors={colors} setColors={setColors} />
        <TimeSetBox />
        <InformationBox />
        {title === '일정편집' ? (
          <CancelButton
            onClick={() => {
              scheduleDel(tokenId);
            }}
          >
            <FaRegTrashAlt className="trash-icon" />
            일정 삭제
          </CancelButton>
        ) : undefined}
      </MainBody>
    </BackgroundBody>
  );
};

export default FormBody;

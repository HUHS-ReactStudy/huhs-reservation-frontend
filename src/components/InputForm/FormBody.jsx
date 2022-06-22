import styled from 'styled-components';
import React from 'react';
import PurposeBox from './PurposeBox';
import TimeSetBox from './TimeSetBox';
import InformationBox from './InformationBox';
import EditContext from './CreateContext';
import { useContext, useState, useRef } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import client from '../../client';
// 일정폼 외부의 하얀 배경의 전체 창을 의미합니다.
const BackgroundBody = styled.div`
  position: fixed;
  bottom: 1px;
  height: ${props => props.height};
  width: 100vw;
  background: white;
  transition: 0.8s;
  overflow: scroll;
`;
// 회색배경의 일정폼 몸체를 의미합니다.
const MainBody = styled.main`
  margin: auto;
  background: #dbdbdb;
  height: 100vh;
  width: 100vw;
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
  width: 358px;
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
const WarningBody = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  display: ${props => props.display};
  align-items: center;
  justify-content: center;
`;
const WarningModal = styled.div`
  width: 300px;
  height: 150px;
  background: white;
  box-shadow: 0px 4px 21px 3px rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 15px;
  opacity: 1;
  & div {
    color: ${props => (props.post === '성공' ? 'black' : 'red')};
    margin-bottom: 30px;
  }
  & button {
    font-size: 20px;
    border: 1px solid black;
    width: 100px;
    height: 30px;
  }
`;

let beforeInformation = '';
// PurposeBox, TimeSetBox, InformationBox를 포함하는 회색 배경의 폼 전체 창 component입니다.
const FormBody = () => {
  const [resultPost, setResultPost] = useState({ display: 'none', post: '성공' });
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
  // put, delete api 요청시 headers에 들어갈 내용입니다.
  const header = {
    Authorization: `Bearer ${tokenId.token}`,
  };
  // put, delete api 요청시 들어갈 URL입니다.
  const url = `/api/v1/reservations${tokenId.id}`;
  // 신청자 정보 등록중 이미 예약이 되었거나 다른 에러가 발생시 호출되는 함수(useRef함께 사용)
  const postRef = useRef('');
  const postResultCheck = err => {
    postRef.current = err;
  };

  // post를 이용한 일정등록
  const scheduleReg = async () => {
    try {
      const response = await client.post(`/api/v1/reservations`, allData);
      const apiData = response.data;
      console.log(apiData);
      const plusReservationId = apiData.data.reservationId;
      console.log(plusReservationId);
      setResultPost({ display: 'flex', post: '성공' });
      postResultCheck('예약이 완료되었습니다!');
    } catch (e) {
      setResultPost({ display: 'flex', post: '실패' });
      postResultCheck(e.response.data.message);
    }
  };

  // put을 이용한 일정 수정(학번 확인 모달 창으로부터 토큰을 넘겨받음)-tokenId라는 걸 받으면 id, token 2개를 사용할 수 있음.

  const scheduleAdj = async () => {
    const response = await client.put(url, allData, {
      headers: header,
    });
    const apiData = response.data;
    console.log(apiData);
  };

  // delete를 이용한 일정 삭제(토큰과 id를 넘겨받음)-tokenId라는 걸 받으면 id, token 2개를 사용할 수 있음.

  const scheduleDel = async () => {
    const response = await client.delete(url, {
      headers: header,
    });
    const apiData = response.data;
    console.log(apiData);
  };

  // 일정 수정 혹은 삭제를 하려는 신청자의 전 작성 기록을 불러와 다시 보여주는 함수입니다.~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~useCallback
  const manInformation = data => {
    setColors(data.color);
    setPurpose(data.purpose);
    // input datetime-local type의 값이 "yyyy-mm-ddThh:mm"형태로 전달이 되어야해서 이렇게 정리하였습니다.
    // 라이브러리를 사용해도 되지만 이 방법이 더 간단하다고 생각했습니다.
    const monthDay = [
      data.month < 10 ? '0' + data.month : data.month,
      data.day < 10 ? '0' + data.day : data.day,
    ];
    setTimeSet({
      start: `${data.year}-${monthDay[0]}-${monthDay[1]}T${data.startTime}`,
      end: `${data.year}-${monthDay[0]}-${monthDay[1]}T${data.endTime}`,
    });
    setInformation({
      name: data.user.name,
      number: data.user.studentId,
      major: data.user.department,
      detail: data.description,
    });
  };
  // 일정 편집창이 나타나면서 api get요청으로 서버에서 정보를 불러오기 위한 내용입니다. export하여 외부에서 사용할 수 있도록 만들었습니다.(모달창의 확인버튼의 onClick에 등록될 예정입니다.)
  // 모달 확인 버튼으로부터 받아온 신청자의 날짜, 월, 일 정보를 day인수로 받습니다.
  beforeInformation = day => {
    const fetchData = async function fetch() {
      const response = await client.get(
        `/api/v1/reservations/daily?year=${2022}&month=${6}&day=${1}`,
      );
      const apiData = response.data;
      console.log(apiData);
      // 이부분은 지울 부분
      manInformation(apiData.data[0]);
      // apiData.data.forEach(item => {
      //   item.reservationId === tokenId.id && manInformation(apiData);
      // });
    };
    fetchData();
  };

  return (
    <BackgroundBody height={adHeight}>
      <WarningBody display={resultPost.display}>
        <WarningModal post={resultPost.post}>
          <div>{postRef.current}</div>
          <button
            onClick={() => {
              setResultPost({ display: 'none', post: '성공' });
            }}
          >
            확인
          </button>
        </WarningModal>
      </WarningBody>
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
export { beforeInformation };

import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ScheduleListItem from './ScheduleListItem';
import PropTypes from 'prop-types';
import client from '../client';
import EditContext from './InputForm/CreateContext';

// 동아리방 신청 일정들 전체를 담아주는 컴포넌트입니다.
const ScheduleList = ({ NowYear, NowMonth, NowDate, NowDay, activateModal }) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const NowdayConvert = week[NowDay];
  const {
    state: { adHeight },
  } = useContext(EditContext);

  const [scheduleDatas, setScheduleDatas] = useState([
    {
      purpose: '',
      reservationId: '',
      color: '',
      startTime: '',
      endTime: '',
    },
  ]);

  const dataRequest = async () => {
    try {
      const res = await client.get('/api/v1/reservations/daily', {
        headers: {
          'Content-type': 'application/json',
        },
        params: {
          year: NowYear,
          month: `${NowMonth.replace(/(^0+)/, '')}`,
          day: NowDate,
        },
      });
      setScheduleDatas(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    dataRequest();
  }, [NowYear, `${NowMonth.replace(/(^0+)/, '')}`, NowDate, adHeight]);

  return (
    <Container>
      <TextContainer>
        <Date>
          {NowMonth}.{NowDate} {NowdayConvert}
        </Date>
        <Text> 동아리방 신청 현황</Text>
      </TextContainer>
      <ItemContainer>
        {scheduleDatas
          .sort((a, b) => {
            return a.startTime > b.startTime ? 1 : -1;
          })
          .map(scheduleData => {
            return (
              <ScheduleListItem
                key={scheduleData.reservationId}
                activateModal={activateModal}
                scheduleData={scheduleData}
              />
            );
          })}
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  overflow-y: auto;
`;

const TextContainer = styled.header`
  display: flex;
  margin: 13px 0px 0px 18px;
`;

const Date = styled.h2`
  font-size: 13px;
  font-weight: bold;
  margin-right: 6px;
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 500;
`;

const ItemContainer = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
`;

ScheduleList.propTypes = {
  NowYear: PropTypes.string,
  NowMonth: PropTypes.string,
  NowDate: PropTypes.string,
  NowDay: PropTypes.number,
  activateModal: PropTypes.func,
};

export default ScheduleList;

import React, { useState } from 'react';
import styled from 'styled-components';
import ScheduleListItem from './ScheduleListItem';

// 동아리방 신청 일정들 전체를 담아주는 컴포넌트입니다.
const ScheduleList = () => {
  const [scheduleDatas] = useState([
    {
      id: 1,
      title: '노션 스터디',
      color: '#B67DDF',
      reservationTime: '오후 05:30 ~ 오후 07:30',
    },
    {
      id: 2,
      title: '리액트 스터디',
      color: '#F8DC81',
      reservationTime: '오후 07:30 ~ 오후 10:00',
    },
  ]);
  return (
    <Container>
      <TextContainer>
        <Date>05.16 월</Date>
        <Text> 동아리방 신청 현황</Text>
      </TextContainer>
      <ItemContainer>
        {scheduleDatas.map(scheduleData => {
          return <ScheduleListItem key={scheduleData.id} scheduleData={scheduleData} />;
        })}
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

export default ScheduleList;

import React, { useState } from 'react';
import ScheduleListItem from './ScheduleListItem';

const ScheduleList = () => {
  const [scheduleDatas] = useState([
    {
      id: 1,
      title: '노션 스터디',
      reservationTime: '오후 05:30 ~ 오후 07:30',
    },
    {
      id: 2,
      title: '리액트 스터디',
      reservationTime: '오후 07:30 ~ 오후 10:00',
    },
  ]);
  return (
    <div>
      {scheduleDatas.map(scheduleData => {
        return <ScheduleListItem key={scheduleData.id} scheduleData={scheduleData} />;
      })}
    </div>
  );
};

export default ScheduleList;

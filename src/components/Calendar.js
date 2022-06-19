import styled from 'styled-components';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import Week from './Week';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';

const Container = styled.div`
  background: linear-gradient(
    180deg,
    rgba(159, 195, 228, 0.8) 0%,
    rgba(55, 118, 166, 0.2) 54.17%,
    #3776a6 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const OuterLayout = styled.div`
  margin: auto;
  background-color: #fff;
  width: 365px;
  height: 761px;
  border-radius: 10px;
`;

const CalendarBox = styled.div``;

const ScheduleBox = styled.div`
  display: flex;
  margin: 9px 0px 0px 0px;
  background-color: rgba(228, 228, 228, 0.3);
  width: 100%;
  height: 272px;
  border-radius: 0px 0px 10px 10px;
`;

const Header = styled.div`
  height: 59px;
  padding: 15px 17px 0px 12px;
  display: flex;
  justify-content: space-between;
`;

const Month = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0px 5px 0px 5px;
`;

const MonthDiv = styled.div`
  display: flex;
`;
const HUHS = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #0b4e84;
`;

const DayOfWeekBox = styled.div`
  display: flex;
  font-size: 11px;
  justify-content: space-between;
  padding: 9px 0px 9px 0px;
  margin: 0px 11px 0px 11px;
  border-bottom: 3px solid #e4e4e4;
`;

const DayOfWeek = styled.p`
  color: #73777b;
  width: 40px;
  display: flex;
  justify-content: center;
`;

const CalendarDate = styled.div``;

const RightIcon = styled(GoTriangleRight)`
  color: gray;
  cursor: pointer;
`;

const LeftIcon = styled(GoTriangleLeft)`
  color: gray;
  cursor: pointer;
`;

const DayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const nowContext = React.createContext();

const Calendar = () => {
  const [now, setNow] = useState(dayjs()); // 클릭한 날짜

  const NowYearAndMonth = now.format(`YYYY년 MM월`); // 이번달
  const NowStartDay = now.startOf('M').format('d'); // 이번달 첫날 요일

  const leftOnclick = () => setNow(now.subtract(1, 'month'));
  const rightOnclick = () => setNow(now.add(1, 'month'));

  return (
    <Container>
      <OuterLayout>
        <CalendarBox>
          <Header>
            <MonthDiv>
              <LeftIcon onClick={leftOnclick} />
              <Month>{NowYearAndMonth}</Month>
              <RightIcon onClick={rightOnclick} />
            </MonthDiv>

            <HUHS>HUHS</HUHS>
          </Header>

          <DayOfWeekBox>
            {DayName.map(day => (
              <DayOfWeek key={day}>{day}</DayOfWeek>
            ))}
          </DayOfWeekBox>

          <CalendarDate>
            <nowContext.Provider value={{ now, setNow }}>
              <Week start={1 - NowStartDay} />
              <Week start={1 - NowStartDay + 7} />
              <Week start={1 - NowStartDay + 14} />
              <Week start={1 - NowStartDay + 21} />
              <Week start={1 - NowStartDay + 28} />
              <Week start={1 - NowStartDay + 35} />
            </nowContext.Provider>
          </CalendarDate>
        </CalendarBox>
        <ScheduleBox />
      </OuterLayout>
    </Container>
  );
};

export default Calendar;

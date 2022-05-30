import styled from 'styled-components';
import React from 'react';
import dayjs from 'dayjs';

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
  background-color: #fff;
  width: 365px;
  height: 761px;
  border-radius: 10px;
`;

const CalendarBox = styled.div``;

const ScheduleBox = styled.div``;

const Header = styled.div`
  height: 59px;
  padding: 15px 17px 0px 12px;
  display: flex;
  justify-content: space-between;
`;

const Month = styled.p`
  font-size: 16px;
  font-weight: 500;
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
  margin: 0px 10px 0px 10px;
  padding: 9px;
  border-bottom: 3px solid #e4e4e4;
`;

const DayOfWeek = styled.p`
  color: #73777b;
`;

const CalendarDate = styled.div``;

const WeekBox = styled.div`
  margin: 0px 10px 0px 10px;
  padding: 7px 11px 0px 11px;
  border-bottom: 3px solid #e4e4e4;
  height: 64.8px;
  justify-content: space-between;
  display: flex;
`;

const WeekDate = styled.p``;

// eslint-disable-next-line react/prop-types
const Week = ({ start }) => {
  const NumStart = parseInt(start);

  const NowStart = dayjs().startOf('M').format('D'); // 이번달 첫날
  const NowEnd = dayjs().endOf('M').format('D'); // 이번달 마지막날

  const NowYear = dayjs().format('YYYY'); // 올해
  const NowMonth = dayjs().format('MM'); // 이번달

  const LastMonthEnd = dayjs(`${NowYear}-${NowMonth - 1}`)
    .endOf('M')
    .format('D'); // 저번달 마지막날

  const giveDate = num => {
    if (num < NowStart) {
      return parseInt(LastMonthEnd) + num;
    } else if (num > NowEnd) {
      return num - NowEnd;
    } else return num;
    // test code
  };

  return (
    <WeekBox>
      <WeekDate>{giveDate(NumStart)}</WeekDate>
      <WeekDate>{giveDate(NumStart + 1)}</WeekDate>
      <WeekDate>{giveDate(NumStart + 2)}</WeekDate>
      <WeekDate>{giveDate(NumStart + 3)}</WeekDate>
      <WeekDate>{giveDate(NumStart + 4)}</WeekDate>
      <WeekDate>{giveDate(NumStart + 5)}</WeekDate>
      <WeekDate>{giveDate(NumStart + 6)}</WeekDate>
    </WeekBox>
  );
};

const Calendar = () => {
  const NowYearAndMonth = dayjs().format(`YYYY년 MM월`); // 이번달
  const NowStartDay = dayjs().startOf('M').format('d'); // 이번달 첫날 요일

  return (
    <Container>
      <OuterLayout>
        <CalendarBox>
          <Header>
            <Month>{NowYearAndMonth}</Month>
            <HUHS>HUHS</HUHS>
          </Header>

          <DayOfWeekBox>
            <DayOfWeek>SUN</DayOfWeek>
            <DayOfWeek>MON</DayOfWeek>
            <DayOfWeek>TUE</DayOfWeek>
            <DayOfWeek>WED</DayOfWeek>
            <DayOfWeek>THU</DayOfWeek>
            <DayOfWeek>FRI</DayOfWeek>
            <DayOfWeek>SAT</DayOfWeek>
          </DayOfWeekBox>

          <CalendarDate>
            <Week start={1 - NowStartDay} />
            <Week start={1 - NowStartDay + 7} />
            <Week start={1 - NowStartDay + 14} />
            <Week start={1 - NowStartDay + 21} />
            <Week start={1 - NowStartDay + 28} />
            <Week start={1 - NowStartDay + 35} />
          </CalendarDate>
        </CalendarBox>

        <ScheduleBox></ScheduleBox>
      </OuterLayout>
    </Container>
  );
};

export default Calendar;

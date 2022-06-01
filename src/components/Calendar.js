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

const WeekBox = styled.div`
  margin: 0px 10px 0px 10px;
  padding: 0px 9px 0px 9px;
  border-bottom: 3px solid #e4e4e4;
  height: 64.8px;
  justify-content: space-between;
  display: flex;
  position: relative;
`;

const WeekDate = styled.p`
  background-color: ${props =>
    props.now === parseInt(dayjs().format(`DD`)) ? 'rgba(159, 195, 228, 0.45)' : '#fff'};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
  margin-top: 3px;
  font-size: 12px;
  font-weight: 700;
  color: ${props => (props.day === 0 ? '#F55353' : props.day === 6 ? '#668BC2' : '#73777b')};
  opacity: ${props => props.opacity && 0.4};
`;

const DayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// eslint-disable-next-line react/prop-types
const Week = ({ start }) => {
  const NumStart = parseInt(start);

  const NowStart = dayjs().startOf('M').format('D'); // 이번달 첫날
  const NowEnd = dayjs().endOf('M').format('D'); // 이번달 마지막날

  const NowYear = dayjs().format('YYYY'); // 올해
  const NowMonth = dayjs().format('MM'); // 이번달

  const getLastMonth = NowMonth => (NowMonth === 1 ? 12 : NowMonth - 1);

  const LastMonthEnd = dayjs(`${NowYear}-${getLastMonth(NowMonth)}`)
    .endOf('M')
    .format('D'); // 저번달 마지막날

  return (
    <WeekBox>
      {DayName.map((_, i) => {
        if (NumStart + i < NowStart) {
          return (
            <WeekDate day={i} opacity="true" now={NumStart + i} key={i}>
              {parseInt(LastMonthEnd) + NumStart + i}
            </WeekDate>
          );
        } else if (NumStart + i > NowEnd) {
          return (
            <WeekDate day={i} opacity="true" now={NumStart + i} key={i}>
              {NumStart + i - NowEnd}
            </WeekDate>
          );
        } else
          return (
            <WeekDate day={i} now={NumStart + i} key={i}>
              {NumStart + i}
            </WeekDate>
          );
      })}
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
            {DayName.map(day => (
              <DayOfWeek key={day}>{day}</DayOfWeek>
            ))}
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
        <ScheduleBox />
      </OuterLayout>
    </Container>
  );
};

export default Calendar;

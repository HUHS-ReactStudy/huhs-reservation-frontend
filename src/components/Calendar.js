import styled from 'styled-components';
import React from 'react';

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

const Month = styled.div``;

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

const Calendar = () => {
  return (
    <Container>
      <OuterLayout>
        <CalendarBox>
          <Header>
            <Month></Month>
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
        </CalendarBox>

        <ScheduleBox></ScheduleBox>
      </OuterLayout>
    </Container>
  );
};

export default Calendar;

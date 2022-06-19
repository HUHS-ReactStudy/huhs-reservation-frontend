import styled from 'styled-components';
import React, { useContext } from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { nowContext } from './Calendar';

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
  background-color: ${props => (props.today == props.now ? 'rgba(159, 195, 228, 0.45)' : '#fff')};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
  margin-top: 3px;
  font-size: 12px;
  font-weight: 700;
  color: ${props => (props.key === 0 ? '#F55353' : props.key === 6 ? '#668BC2' : '#73777b')};
  opacity: ${props => props.opacity && 0.4};
  cursor: pointer;
`;

const Week = ({ start }) => {
  const { now, setNow } = useContext(nowContext);

  const DayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const NowStart = now.startOf('M').format('D'); // 이번달 첫날
  const NowEnd = now.endOf('M').format('D'); // 이번달 마지막날

  const NowYear = now.format('YYYY'); // 올해
  const NowMonth = now.format('MM'); // 이번달

  const getLastMonth = NowMonth => (NowMonth === 1 ? 12 : NowMonth - 1);

  const LastMonthEnd = dayjs(`${NowYear}-${getLastMonth(NowMonth)}`)
    .endOf('M')
    .format('D'); // 저번달 마지막날

  const dateOnclick = date => {
    setNow(now.set('date', date));
  };

  return (
    <WeekBox>
      {DayName.map((_, i) => {
        if (start + i < NowStart) {
          return (
            <WeekDate
              opacity="true"
              today={start + i}
              key={i}
              now={now.format(`DD`)}
              onClick={() => dateOnclick(start + i)}
            >
              {parseInt(LastMonthEnd) + start + i}
            </WeekDate>
          );
        } else if (start + i > NowEnd) {
          return (
            <WeekDate
              opacity="true"
              today={start + i}
              key={i}
              now={now.format(`DD`)}
              onClick={() => dateOnclick(start + i)}
            >
              {start + i - NowEnd}
            </WeekDate>
          );
        } else
          return (
            <WeekDate
              today={start + i}
              key={i}
              now={now.format(`DD`)}
              onClick={() => dateOnclick(start + i)}
            >
              {start + i}
            </WeekDate>
          );
      })}
    </WeekBox>
  );
};

Week.propTypes = {
  start: PropTypes.number,
};

export default Week;

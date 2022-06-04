import React from 'react';
import styled from 'styled-components';
import { FaRegBell } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ScheduleListItem = ({ scheduleData }) => {
  const { title, reservationTime, color } = scheduleData;
  return (
    <Container>
      <TitleContainer>
        <Title color={color}>{title}</Title>
      </TitleContainer>
      <ReservationTimeContainer>
        <IconBell>
          <FaRegBell />
        </IconBell>
        <ReservationTime>{reservationTime}</ReservationTime>
      </ReservationTimeContainer>
    </Container>
  );
};

const Container = styled.article`
  width: 332px;
  height: 66px;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px 8px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 13px;
  ::before {
    display: inline-block;
    content: '';
    width: 3px;
    height: 20px;
    background-color: ${props => props.color};
    margin-right: 4px;
    transform: translate(0%, 20%);
  }
`;

const IconBell = styled.i`
  margin-right: 5px;
  font-size: 9px;
  display: flex;
  align-items: center;
`;

const ReservationTimeContainer = styled.div`
  display: flex;
  margin-top: 7px;
  color: #73777b;
  font-size: 12px;
  font-weight: 700;
`;

const ReservationTime = styled.p``;

ScheduleListItem.propTypes = {
  scheduleData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    reservationTime: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
};

export default ScheduleListItem;

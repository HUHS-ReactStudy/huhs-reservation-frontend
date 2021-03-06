import React from 'react';
import styled from 'styled-components';
import { FaRegBell } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import EditContext from './InputForm/CreateContext';

// 동아리방 사용 신청이 완료되면 생기는 개별 아이템에 해당하는 컴포넌트입니다.
const ScheduleListItem = ({ scheduleData, activateModal }) => {
  const { purpose, color, startTime, endTime, reservationId } = scheduleData;

  const {
    actions: { setUserReservationId },
  } = useContext(EditContext);

  const sendReservationId = e => {
    e.target.id = reservationId;
    setUserReservationId(reservationId);
    activateModal();
  };

  return (
    <Container onClick={sendReservationId}>
      <TitleContainer>
        <Title color={color}>{purpose}</Title>
      </TitleContainer>
      <ReservationTimeContainer>
        <IconBell>
          <FaRegBell />
        </IconBell>
        <ReservationTime>
          {startTime}~{endTime}
        </ReservationTime>
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
  background-color: #ffffff;
  cursor: pointer;
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
  font-size: 12px;
  display: flex;
  align-items: center;
`;

const ReservationTimeContainer = styled.div`
  display: flex;
  margin-top: 10px;
  color: #73777b;
  font-size: 12px;
  font-weight: 700;
`;

const ReservationTime = styled.p``;

ScheduleListItem.propTypes = {
  scheduleData: PropTypes.shape({
    purpose: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    reservationId: PropTypes.string.isRequired,
  }),
  activateModal: PropTypes.func,
};

export default ScheduleListItem;

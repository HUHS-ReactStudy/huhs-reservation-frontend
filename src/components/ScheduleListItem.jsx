import React from 'react';
import PropTypes from 'prop-types';

const ScheduleListItem = ({ scheduleData }) => {
  const { title, reservationTime } = scheduleData;
  return (
    <div>
      <div>{title}</div>
      <div>{reservationTime}</div>
    </div>
  );
};

ScheduleListItem.propTypes = {
  scheduleData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    reservationTime: PropTypes.string.isRequired,
  }),
};

export default ScheduleListItem;

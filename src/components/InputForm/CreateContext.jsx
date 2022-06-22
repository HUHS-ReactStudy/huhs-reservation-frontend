import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const EditContext = createContext({
  state: {
    title: '일정등록',
    adHeight: '0vh',
    purpose: '',
    timeSet: '',
    information: '',
    userReservationId: '',
    tokenId: { token: '', id: '' },
  },
  actions: {
    setTitle: () => {},
    setHeight: () => {},
    setPurpose: () => {},
    setTimeSet: () => {},
    setInformation: () => {},
    setUserReservationId: () => {},
    setTokenId: () => {},
  },
});

const EditProvider = ({ children }) => {
  const [title, setTitle] = useState('일정등록');
  const [adHeight, setHeight] = useState('0vh');
  const [purpose, setPurpose] = useState('');
  const [timeSet, setTimeSet] = useState({ start: '', end: '' });
  const [information, setInformation] = useState({ name: '', number: '', major: '', detail: '' });
  const [tokenId, setTokenId] = useState({ token: '', id: '' });
  const [userReservationId, setUserReservationId] = useState('');
  const value = {
    state: { title, adHeight, userReservationId, purpose, timeSet, information, tokenId },
    actions: {
      setTitle,
      setHeight,
      setUserReservationId,
      setPurpose,
      setTimeSet,
      setInformation,
      setTokenId,
    },
  };
  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};
EditProvider.propTypes = {
  children: PropTypes.element,
};

export { EditProvider };

export default EditContext;

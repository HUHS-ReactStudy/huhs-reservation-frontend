import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const EditContext = createContext({
  state: {
    title: '일정등록',
    adHeight: '0vh',
    userReservationId: '',
    tokenId: { token: '', id: '' },
  },
  actions: {
    setTitle: () => {},
    setHeight: () => {},
    setUserReservationId: () => {},
    setTokenId: () => {},
  },
});

const EditProvider = function edit({ children }) {
  const [title, setTitle] = useState('일정등록');
  const [adHeight, setHeight] = useState('0vh');
  const [userReservationId, setUserReservationId] = useState('');
  const [tokenId, setTokenId] = useState({
    token: '',
    id: '',
  });
  const value = {
    state: { title, adHeight, userReservationId, tokenId },
    actions: { setTitle, setHeight, setUserReservationId, setTokenId },
  };

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};

EditProvider.propTypes = {
  children: PropTypes.element,
};

export { EditProvider };

export default EditContext;

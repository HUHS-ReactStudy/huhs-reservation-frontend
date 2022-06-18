import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const EditContext = createContext({
  state: {
    title: '일정등록',
    adHeight: '0vh',
    purpose: '',
    timeSet: '',
    information: '',
  },
  actions: {
    setTitle: () => {},
    setHeight: () => {},
    setPurpose: () => {},
    setTimeSet: () => {},
    setInformation: () => {},
  },
});

const EditProvider = ({ children }) => {
  const [title, setTitle] = useState('일정등록');
  const [adHeight, setHeight] = useState('0vh');
  const [purpose, setPurpose] = useState('');
  const [timeSet, setTimeSet] = useState({ start: '', end: '' });
  const [information, setInformation] = useState({ name: '', number: '', major: '', detail: '' });
  const [tokenId, setTokenId] = useState({ token: '', id: '' });
  const value = {
    state: { title, adHeight, purpose, timeSet, information, tokenId },
    actions: { setTitle, setHeight, setPurpose, setTimeSet, setInformation, setTokenId },
  };

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};

EditProvider.propTypes = {
  children: PropTypes.element,
};

export { EditProvider };

export default EditContext;

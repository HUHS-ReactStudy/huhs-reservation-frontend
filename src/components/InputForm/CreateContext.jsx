import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const EditContext = createContext({
  state: { title: '일정등록', adHeight: '0vh' },
  actions: { setTitle: () => {}, setHeight: () => {} },
});

const EditProvider = function edit({ children }) {
  const [title, setTitle] = useState('일정등록');
  const [adHeight, setHeight] = useState('0vh');
  const value = {
    state: { title, adHeight },
    actions: { setTitle, setHeight },
  };

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};

EditProvider.propTypes = {
  children: PropTypes.element,
};

export { EditProvider };

export default EditContext;

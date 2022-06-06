import React, { createContext, useState } from 'react';

const EditContext = createContext({
  state: { title: '일정등록', adHeight: '0vh' },
  actions: { setTitle: () => {}, setHeight: () => {} },
});

const EditProvider = function edit(props) {
  const [title, setTitle] = useState('일정등록');
  const [adHeight, setHeight] = useState('0vh');
  const value = {
    state: { title, adHeight },
    actions: { setTitle, setHeight },
  };
  // eslint-disable-next-line react/prop-types
  return <EditContext.Provider value={value}>{props.children}</EditContext.Provider>;
};

export { EditProvider };

export default EditContext;

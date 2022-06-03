import React, { createContext, useState } from 'react';

const EditContext = createContext('일정등록');

const EditProvider = function edit(props) {
  const [state, setState] = useState('일정등록');
  const value = {
    state: state,
    actions: setState,
  };
  // eslint-disable-next-line react/prop-types
  return <EditContext.Provider value={value}>{props.children}</EditContext.Provider>;
};

export { EditProvider };

export default EditContext;

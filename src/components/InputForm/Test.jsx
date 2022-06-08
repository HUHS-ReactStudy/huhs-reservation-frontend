import React, { useContext } from 'react';
import EditContext from './CreateContext';

const Test = function text() {
  const {
    actions: { setTitle, setHeight },
  } = useContext(EditContext);
  return (
    <>
      <button
        onClick={() => {
          setTitle('일정편집');
          setHeight('100vh');
        }}
      >
        일정편집 test
      </button>
      <button
        onClick={() => {
          setTitle('일정등록');
          setHeight('100vh');
        }}
      >
        일정등록 test
      </button>
    </>
  );
};

export default Test;

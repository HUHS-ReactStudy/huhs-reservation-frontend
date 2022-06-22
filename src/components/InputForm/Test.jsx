import React, { useContext } from 'react';
import EditContext from './CreateContext';
import { beforeInformation } from './FormBody';

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
      <button
        onClick={() => {
          setTitle('일정편집');
          setHeight('100vh');
          beforeInformation();
        }}
      >
        수정사항 test
      </button>
    </>
  );
};

export default Test;

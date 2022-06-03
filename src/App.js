import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import FormBody from './components/InputForm/FormBody';
// import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Calendar /> */}
      <FormBody />
    </div>
  );
}
export default App;

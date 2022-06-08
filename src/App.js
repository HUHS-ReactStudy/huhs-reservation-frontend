import React from 'react';
import Calendar from './components/Calendar';
import { EditProvider } from './components/InputForm/CreateContext';
import FormBody from './components/InputForm/FormBody';
import GlobalStyle from './styles/GlobalStyle';
import Test from './components/InputForm/Test';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <EditProvider>
        <>
          <Test />
          <Calendar />
          <FormBody />
        </>
      </EditProvider>
    </div>
  );
}
export default App;

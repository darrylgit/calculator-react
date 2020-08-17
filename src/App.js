import React from 'react';

import Calculator from './components/Calculator/calculator.component';
import { CalcProvider } from './contexts/CalcContext';

import './App.scss';

const App = () => {
  return (
    <CalcProvider>
      <Calculator />
    </CalcProvider>
  );
};

export default App;

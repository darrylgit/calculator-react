import React, { useState } from 'react';

import Display from '../Display/display.component';
import Keypad from '../Keypad/keypad.component';

import { CalculatorContainer } from './calculator.styles';
import CalcContext from '../../contexts/calcContext';

const Calculator = () => {
  const [values, setValues] = useState([]);
  const pushValue = value => setValues([...values, value]);

  return (
    <CalculatorContainer>
      <CalcContext.Provider
        value={{
          values,
          pushValue
        }}
      >
        <Display />
        <Keypad />
      </CalcContext.Provider>
    </CalculatorContainer>
  );
};

export default Calculator;

import React, { useState } from 'react';

import Display from '../Display/display.component';
import Keypad from '../Keypad/keypad.component';

import { CalculatorContainer } from './calculator.styles';
import CalcContext from '../../contexts/calcContext';
import inputValueHandler from '../../logic/inputValueHandler/inputValueHandler';

const Calculator = () => {
  const [values, setValues] = useState([]);
  const pushValue = inputValue => {
    console.log('called');
    return setValues(inputValueHandler(values, inputValue));
  };

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

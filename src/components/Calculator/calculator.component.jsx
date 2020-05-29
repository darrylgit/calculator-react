import React from 'react';

import Display from '../Display/display.component';
import Keypad from '../Keypad/keypad.component';

import { CalculatorContainer } from './calculator.styles';

const Calculator = () => {
  return (
    <CalculatorContainer>
      <Display />
      <Keypad />
    </CalculatorContainer>
  );
};

export default Calculator;

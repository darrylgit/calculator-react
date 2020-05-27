import React from 'react';

import Display from '../Display/display.component';
import KeyPad from '../KeyPad/keypad.component';

import { CalculatorContainer } from './calculator.styles';

const Calculator = () => {
  return (
    <CalculatorContainer>
      <Display />
      <KeyPad />
    </CalculatorContainer>
  );
};

export default Calculator;

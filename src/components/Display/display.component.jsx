import React, { useContext, useState } from 'react';

import { DisplayContainer } from './display.styles';
import CalcContext from '../../contexts/CalcContext';

import { OPENPAR, MULTIPLY } from '../../constants';

import hasTerminalCalculation from '../../utils/hasTerminalCalculation';
import equals from '../../logic/equals/equals';
import unclosedPars from '../../utils/unclosedPars';
import isOperator from '../../utils/isOperator';

// The equals function returns an array with two elements: the calculated value and the terminal calculation.
// We only want to display the calculated value, i.e index 0.
// Also, we hide multiplication signs that precede opening parentheses, i.e. "8 x (" becomes "8("
const displayParser = arr => {
  return arr
    .filter(el => !Array.isArray(el))
    .filter((el, i, arr) => !(el === MULTIPLY && arr[i + 1] === OPENPAR))
    .join('');
};

// If there is no terminal calculation (i.e. the user has not hit enter recently), display all user input:
const displayUserInput = arr => {
  if (!hasTerminalCalculation(arr) && arr.length > 1) {
    return displayParser(arr);
  }

  return '';
};

const displayOutput = arr => {
  // If the user has just hit equals, return early and just display the calculated value
  if (hasTerminalCalculation(arr) || arr.length <= 1) {
    return displayParser(arr);
  }

  // Truncate incoming array by 1 element
  const arrForMain = arr.slice(0, -1);

  // Calculate that value and display it
  return displayParser(equals(arrForMain));
};

// Thus, return a boolean denoting if the current values array is calculable:
const canCalculate = arr => {
  if (!arr.length) {
    return true;
  }

  // If the user has just hit equals or just begun a calculation, return early and just display the calculated value
  if (hasTerminalCalculation(arr) || arr.length === 1) {
    return true;
  }

  // Before the user hits equals, the we continually runs calculations one step behind the user
  // Reason being: if these calculations ran in step with user input, the equals button would be highly redundant
  // Therefore, we truncate the incoming array by one index
  const displayOutputArray = arr.slice(0, -1);

  // We don't want to run a calculation if there are unclosed parentheses, or if the current last value is a dangling operator
  return (
    displayOutputArray.length &&
    !unclosedPars(displayOutputArray) &&
    !isOperator(displayOutputArray.slice(-1))
  );
};

const Display = () => {
  const { inputsArray } = useContext(CalcContext);
  const [calculatedValue, runCalculation] = useState('');

  if (
    canCalculate(inputsArray) &&
    displayOutput(inputsArray) !== calculatedValue
  ) {
    runCalculation(displayOutput(inputsArray));
  }

  return (
    <DisplayContainer>
      <div className='outputs'>
        <div className='sub'>{displayUserInput(inputsArray)}</div>
        <div className='main'>{calculatedValue}</div>
      </div>
    </DisplayContainer>
  );
};

export default Display;

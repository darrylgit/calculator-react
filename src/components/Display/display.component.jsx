import React, { useContext, useState } from 'react';

import { DisplayContainer } from './display.styles';
import CalcContext from '../../contexts/calcContext';

import { OPENPAR, MULTIPLY } from '../../constants';

import hasTerminalCalculation from '../../utils/hasTerminalCalculation';
import equals from '../../logic/equals/equals';
import unclosedPars from '../../utils/unclosedPars';
import isOperator from '../../utils/isOperator';

// Hide terminal calculation
// Hide multiplication signs that come before an opening parenthesis
const displayParser = arr => {
  return arr
    .filter(el => !Array.isArray(el))
    .filter((el, i, arr) => !(el === MULTIPLY && arr[i + 1] === OPENPAR))
    .join('');
};

const displaySub = arr => {
  if (!hasTerminalCalculation(arr) && arr.length > 1) {
    return displayParser(arr);
  }

  return '';
};

const displayMain = arr => {
  // If the user has just hit equals, return early and just display the calculated value
  if (hasTerminalCalculation(arr) || arr.length <= 1) {
    return displayParser(arr);
  }

  // Truncate incoming array by 1 element
  const arrForMain = arr.slice(0, -1);

  return displayParser(equals(arrForMain));
};

const canCalculate = arr => {
  if (!arr.length) {
    return true;
  }

  // If the user has just hit equals or just begun a calculation, return early and just display the calculated value
  if (hasTerminalCalculation(arr) || arr.length === 1) {
    return true;
  }

  // Truncate incoming array by 1 element
  const arrForMain = arr.slice(0, -1);

  return (
    arrForMain.length &&
    !unclosedPars(arrForMain) &&
    !isOperator(arrForMain.slice(-1))
  );
};

const Display = () => {
  const { values } = useContext(CalcContext);
  const [calculatedValue, runCalculation] = useState('');

  if (canCalculate(values) && displayMain(values) !== calculatedValue) {
    runCalculation(displayMain(values));
  }

  return (
    <DisplayContainer>
      <div className='outputs'>
        <div className='sub'>{displaySub(values)}</div>
        <div className='main'>{calculatedValue}</div>
      </div>
    </DisplayContainer>
  );
};

export default Display;

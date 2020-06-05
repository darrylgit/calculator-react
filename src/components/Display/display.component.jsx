import React, { useContext } from 'react';

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

const displayPreview = arr => {
  if (!hasTerminalCalculation(arr) && arr.length > 1) {
    return displayParser(arr);
  }

  return '';
};

const displayMain = arr => {
  if (hasTerminalCalculation(arr) || arr.length === 1) {
    return displayParser(arr);
  }

  // Truncate incoming array by 1 element
  const arrForMain = arr.slice(0, -1);

  // Make sure new array is fit for calucation
  if (
    arrForMain.length &&
    !unclosedPars(arrForMain) &&
    !isOperator(arrForMain.slice(-1))
  ) {
    return displayParser(equals(arr.slice(0, -1)));
  } else {
    return arrForMain || '';
  }
};

const Display = () => {
  const { values } = useContext(CalcContext);
  return (
    <DisplayContainer>
      <div className='outputs'>
        <div className='preview'>{displayPreview(values)}</div>
        <div className='main'>{displayMain(values)}</div>
      </div>
    </DisplayContainer>
  );
};

export default Display;

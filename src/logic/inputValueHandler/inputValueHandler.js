import {
  CLEAR,
  BACKSPACE,
  PARENTHESES,
  DECIMAL,
  NEGATIVE,
  EQUALS
} from '../../constants';

import isOperator from '../../utils/isOperator';
import isNumber from '../../utils/isNumber';
import hasTerminalCalculation from '../../utils/hasTerminalCalculation';

import numberHandler from './inputValueHandler.number';
import operatorHandler from './inputValueHandler.operator';
import backspaceHandler from './inputValueHandler.backspace';
import parenthesesHandler from './inputValueHandler.parentheses';
import negativeHandler from './inputValueHandler.negative';
import decimalHandler from './inputValueHandler.decimal';
import equals from '../equals/equals';

export default (currentValues, inputValue) => {
  if (inputValue === undefined) {
    console.error('ERR: No input value specified');
  }

  // console.log(currentValues);
  // console.log(inputValue);

  // Handle equals
  if (inputValue === EQUALS) {
    // Check for terminal calculation
    if (hasTerminalCalculation(currentValues)) {
      currentValues = [currentValues[0], ...currentValues[1]];
    }

    return equals(currentValues);
  }

  // If user starts new calculation, remove the current terminal calculation (an array) if there is one
  let values = currentValues.filter(el => !Array.isArray(el));

  // Handle numbers
  if (isNumber(inputValue)) {
    return numberHandler(values, inputValue);
  }

  // Handle opeators
  if (isOperator(inputValue)) {
    return operatorHandler(values, inputValue);
  }

  // Handle everything else
  switch (inputValue) {
    case CLEAR:
      return [];
    case BACKSPACE:
      return backspaceHandler(values);
    case PARENTHESES:
      return parenthesesHandler(values);
    case NEGATIVE:
      return negativeHandler(values);
    case DECIMAL:
      return decimalHandler(values);
    default:
      return [...values, inputValue];
  }
};

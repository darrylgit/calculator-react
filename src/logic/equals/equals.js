import { OPENPAR, CLOSEPAR } from '../../constants';

import doArithmetic from './doArithmetic';
import isOperator from '../../utils/isOperator';
import getTerminalCalculation from './getTerminalCalculation';
import unclosedPars from '../../utils/unclosedPars';

const equals = values => {
  //return early if there are unclosed parentheses or last value is an operator
  if (unclosedPars(values)) {
    return values;
  }

  // Drop dangling operator
  if (isOperator(...values.slice(-1))) {
    values = values.slice(0, -1);
  }

  // Before handling anything else, get terminal calculation. Refer to getTerminalCalculation.test.js for examples
  const terminalCalculation = getTerminalCalculation(values);

  // If parentheses exist, handle them first
  while (values.includes(CLOSEPAR)) {
    // The first closing parenthesis we encounter corresponds to the innnermost layer of parentheses
    const indexOfFirstClosePar = values.indexOf(CLOSEPAR);

    // That matching opening parenthesis is simply the last opening parenthesis that comes
    // before that closing parenthesis
    const indexOfMatchingOpenPar = values
      .slice(0, indexOfFirstClosePar)
      .lastIndexOf(OPENPAR);

    // Do whatever arithmetic needs to be done between those parentheses
    const evaluatedBlock = doArithmetic(
      values.slice(indexOfMatchingOpenPar + 1, indexOfFirstClosePar)
    );

    // Replace that parentheses block with that calculated value
    values = [
      ...values.slice(0, indexOfMatchingOpenPar),
      evaluatedBlock,
      ...values.slice(indexOfFirstClosePar + 1)
    ];
  }

  // Trim to 9 decimal places
  const calculatedValue = parseFloat(doArithmetic(values)[0])
    .toPrecision(9)
    .toString();

  // Some mumbo-jumbo to trim off trailing zeroes
  let trimmedValue = parseFloat(calculatedValue);

  if (trimmedValue >= 1000000000) {
    trimmedValue = trimmedValue.toExponential();
  } else {
    trimmedValue = trimmedValue.toString();
  }

  // Return both the caluclated value (index 0) and the terminal calculation (index 1)
  // Refer to getTerminalCalculation.js and its spec file for examples / explanations
  return terminalCalculation
    ? [trimmedValue, terminalCalculation]
    : [trimmedValue];
};

export default equals;

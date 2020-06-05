import operations from '../../utils/operations';
import isOperator from '../../utils/isOperator';
import isNumber from '../../utils/isNumber';
import {
  MULTIPLY,
  DIVIDE,
  SUBTRACT,
  ADD,
  OPENPAR,
  CLOSEPAR
} from '../../constants';

import unclosedPars from '../../utils/unclosedPars';

const equals = values => {
  //return early if there are unclosed parentheses
  if (unclosedPars(values)) {
    return values;
  }

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

  return doArithmetic(values);
};

const doArithmetic = arr => {
  // The while loop is necessary because the operation changes the length of the array and messes with the forEach loop
  while (arr.includes(MULTIPLY) || arr.includes(DIVIDE)) {
    arr.forEach((val, i) => {
      if (isOperator(val)) {
        operations.multiplyAndDivide(arr, i);
      }
    });
  }

  while (arr.includes(ADD) || arr.includes(SUBTRACT)) {
    arr.forEach((val, i) => {
      if (isOperator(val)) {
        operations.addAndSubtract(arr, i);
      }
    });
  }

  return arr;
};

/*
      If the user calculates the input, we need to determine the "terminal
      calculation" of that input. Having done so, should the user press '=' again
      immediately after performing a calculation, the calculator will display the
      previously calculated value evaluated by this terminal calculation. For
      example:

      '100 - 2 + 6'   ------> terminal calcuation is '+ 6'
      '='             ------> output is 104
      '='             ------> output is 110
      '='             ------> output is 116
      etc.

      */
const getTerminalCalculation = values => {
  /* "normal" case with no parentheses involved. The last two indices are
        returned */
  if (isNumber(values.slice(-1)[0])) {
    terminalCalculation = values.slice(-2);

    //otherwise, if a closing parenthesis is involved:
  } else if (values.slice(-1)[0] === CLOSEPAR) {
    // There might be layers of nested parentheses between this closing parenthesis and its
    // matching opening parenthesis, so we have to get clever

    (function findCorrespondingOpenPar() {
      for (i = values.length - 2; i > -1; i--) {
        if (values[i] === ' )') {
          localParCount--;
        } else if (values[i] === '( ') {
          localParCount++;
        }

        if (localParCount > 0) {
          start = i;
          console.log(start);
          return true;
        }
      }
    })();

    if (/&/.test(values[start - 1])) {
      terminalCalculation = values.slice(start - 1);
    } else {
      terminalCalculation = [];
    }
  }
};

export default equals;

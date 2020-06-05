import isOperator from '../../utils/isOperator';
import isNumber from '../../utils/isNumber';
import { CLOSEPAR } from '../../constants';
import unclosedPars from '../../utils/unclosedPars';

// If the user calculates the input, we need to determine the "terminal
// calculation" of that input. Having done so, should the user press '=' again
// immediately after performing a calculation, the calculator will display the
// previously calculated value evaluated by this terminal calculation. For
// example:

// '100 - 2 + 6'   ------> terminal calcuation is '+ 6'
// '='             ------> output is 104
// '='             ------> output is 110
// '='             ------> output is 116
// etc.

const getTerminalCalculation = values => {
  //return early if there are unclosed parentheses or if the values array is too short
  if (unclosedPars(values) || values.length < 2) {
    return null;
  }

  // "normal" case with no parentheses involved. The last two indices are returned
  if (isNumber(values.slice(-1)[0])) {
    return values.slice(-2);

    //otherwise, if a closing parenthesis is involved:
  } else if (values.slice(-1)[0] === CLOSEPAR) {
    // There might be layers of nested parentheses between this closing parenthesis and its
    // matching opening parenthesis, so we have to get clever
    let startingIndex = -1;
    while (unclosedPars(values.slice(startingIndex))) {
      startingIndex--;
    }

    // Check that the immediate preceding index is an operator
    if (isOperator(values.slice(startingIndex - 1)[0])) {
      return values.slice(startingIndex - 1);
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export default getTerminalCalculation;

import operations from '../../utils/operations';
import isOperator from '../../utils/isOperator';
import {
  MULTIPLY,
  DIVIDE,
  SUBTRACT,
  ADD,
  OPENPAR,
  CLOSEPAR
} from '../../constants';

const equals = values => {
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

export default equals;

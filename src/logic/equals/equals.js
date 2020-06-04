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
  while (values.includes(CLOSEPAR)) {
    const indexOfFirstClosePar = values.indexOf(CLOSEPAR);
    const indexOfMatchingOpenPar = values
      .slice(0, indexOfFirstClosePar)
      .lastIndexOf(OPENPAR);

    const evaluatedBlock = doArithmetic(
      values.slice(indexOfMatchingOpenPar, indexOfFirstClosePar)
    );

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

  return arr.filter(el => el !== OPENPAR && el !== CLOSEPAR);
};

export default equals;

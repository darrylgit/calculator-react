import operations from '../../utils/operations';
import isOperator from '../../utils/isOperator';
import { MULTIPLY, DIVIDE, SUBTRACT, ADD } from '../../constants';

const equals = values => {
  while (values.includes(MULTIPLY) || values.includes(DIVIDE)) {
    values.forEach((val, i) => {
      if (isOperator(val)) {
        operations.multiplyAndDivide(values, i);
      }
    });
  }

  while (values.includes(ADD) || values.includes(SUBTRACT)) {
    values.forEach((val, i) => {
      if (isOperator(val)) {
        operations.addAndSubtract(values, i);
      }
    });
  }

  return values;
};

export default equals;

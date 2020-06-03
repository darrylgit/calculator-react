import operations from '../../utils/operations';
import isOperator from '../../utils/isOperator';

const equals = values => {
  values.forEach((val, i) => {
    if (isOperator(val)) {
      operations.multiplyAndDivide(values, i);
    }
  });

  values.forEach((val, i) => {
    if (isOperator(val)) {
      operations.addAndSubtract(values, i);
    }
  });

  return values;
};

export default equals;

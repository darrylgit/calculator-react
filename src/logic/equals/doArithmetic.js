import { MULTIPLY, DIVIDE, ADD, SUBTRACT } from '../../constants';
import isOperator from '../../utils/isOperator';

const operations = {
  mainOperations: {
    /*math performed on indices in front of and behind the index.current (operator) index,
    then clear operator and reagent*/
    add: function (arr, index) {
      const sum = parseFloat(arr[index - 1]) + parseFloat(arr[index + 1]);
      arr[index - 1] = sum.toString();
      arr.splice(index, 2);
    },

    subtract: function (arr, index) {
      const difference = arr[index - 1] - arr[index + 1];
      arr[index - 1] = difference.toString();
      arr.splice(index, 2);
    },

    multiply: function (arr, index) {
      const product = arr[index - 1] * arr[index + 1];
      arr[index - 1] = product.toString();
      arr.splice(index, 2);
    },

    divide: function (arr, index) {
      const quotient = arr[index - 1] / arr[index + 1];
      arr[index - 1] = quotient.toString();
      arr.splice(index, 2);
    }
  },

  multiplyAndDivide: function (arr, index) {
    if (arr[index] === MULTIPLY) {
      this.mainOperations.multiply(arr, index);
    } else if (arr[index] === DIVIDE) {
      this.mainOperations.divide(arr, index);
    }
  },

  addAndSubtract: function (arr, index) {
    if (arr[index] === SUBTRACT) {
      this.mainOperations.subtract(arr, index);
    } else if (arr[index] === ADD) {
      this.mainOperations.add(arr, index);
    }
  }
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

export default doArithmetic;

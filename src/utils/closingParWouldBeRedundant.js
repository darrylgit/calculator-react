import { OPENPAR } from '../constants';

const closingParWouldBeRedundant = inputArr => {
  let arr = [...inputArr];

  // Detect if immediately preceding opening parenthesis is immediately preceded by another opening parenthesis
  const precedingOpenParIndex = arr.reverse().indexOf(OPENPAR);

  return arr[precedingOpenParIndex + 1] === OPENPAR;
};

export default closingParWouldBeRedundant;

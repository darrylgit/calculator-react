// See test file for clarification
const numberStringRegex = /-*\d+\.{0,1}\d*/;

const isNumber = val => {
  if (typeof val === 'number') {
    return true;
  }

  const regexMatch = val.match(numberStringRegex);

  if (!regexMatch || regexMatch.length !== 1) {
    return false;
  }

  return val.match(numberStringRegex)[0] === val;
};

export default isNumber;

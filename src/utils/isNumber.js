const isNumber = val => {
  const parsedVal = parseFloat(val);

  // The second bit screens NaN:
  return typeof parsedVal === 'number' && parsedVal === parsedVal;
};

export default isNumber;

const isNumber = val => {
  const parsedVal = parseFloat(val);

  // The second bit screens NaN:
  // eslint-disable-next-line
  return typeof parsedVal === 'number' && parsedVal === parsedVal;
};

export default isNumber;

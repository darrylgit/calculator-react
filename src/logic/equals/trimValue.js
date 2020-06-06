const trimValue = val => {
  // Cut down to 9 significant figures
  const calculatedValue = parseFloat(val[0]).toPrecision(9).toString();

  // Trim off trailing zeroes
  let trimmedValue = parseFloat(calculatedValue);

  // Implement exponential notation
  return trimmedValue >= 1000000000
    ? trimmedValue.toExponential()
    : trimmedValue.toString();
};

export default trimValue;

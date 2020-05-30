const isNatural = val => {
  const naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return naturalNumbers.includes(val);
};

export default (currentValues, newValue) => {
  console.log(newValue);
  let values = [...currentValues];
  let last;

  if (isNatural(newValue)) {
    let lastValue = values.pop();
    lastValue *= 10;
    lastValue += newValue;
    values.push(lastValue);

    return values;
  }

  return [...values, newValue];
};

const isNatural = val => {
  const naturalNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return naturalNumbers.includes(val);
};

// export default (currentValues, newValue) => {

//   let values = [...currentValues];

//   if (isNatural(newValue)) {
//     let lastValue = values.pop();
//     lastValue *= 10;
//     lastValue += newValue;
//     values.push(lastValue);

//     return values;
//   }

//   return [...values, newValue];
// };

export default (currentValues, newValue) => {
  let values = [...currentValues];

  if (isNatural(newValue)) {
    let lastValue = values.pop() || 0;
    lastValue *= 10;
    lastValue += newValue;
    values.push(lastValue);

    return values;
  }

  return [...values, newValue];
};

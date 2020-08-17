// Returns true if arr is in format [value, sub-array]
const hasTerminalCalculation = arr => {
  return (
    arr.length === 2 &&
    !Array.isArray(arr[0]) &&
    Array.isArray(arr[1]) &&
    arr[1].length > 0
  );
};

export default hasTerminalCalculation;

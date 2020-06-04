import { OPENPAR, CLOSEPAR } from '../constants';

// Returns the number of unclosed pars
const unclosedPars = arr => {
  const openParCount = arr.reduce(
    (acc, val) => (val === OPENPAR ? acc + 1 : acc),
    0
  );
  const closeParCount = arr.reduce(
    (acc, val) => (val === CLOSEPAR ? acc + 1 : acc),
    0
  );

  return openParCount - closeParCount;
};

export default unclosedPars;

import React, { useContext } from 'react';

import { DisplayContainer } from './display.styles';
import CalcContext from '../../contexts/calcContext';

import { OPENPAR, MULTIPLY } from '../../constants';

// Hide multiplication signs that come before an opening parenthesis
const displayParser = arr => {
  return arr
    .filter((el, i, arr) => !(el === MULTIPLY && arr[i + 1] === OPENPAR))
    .join('');
};

const Display = () => {
  const { values } = useContext(CalcContext);
  return (
    <DisplayContainer>
      <div className='outputs'>
        <div className='preview'></div>
        <div className='main'>{displayParser(values) || ' '}</div>
      </div>
    </DisplayContainer>
  );
};

export default Display;

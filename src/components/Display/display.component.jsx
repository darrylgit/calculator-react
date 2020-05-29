import React, { useContext } from 'react';

import { DisplayContainer } from './display.styles';
import CalcContext from '../../contexts/calcContext';

const Display = () => {
  const { values } = useContext(CalcContext);
  return (
    <DisplayContainer>
      <div className='outputs'>
        <div className='preview'></div>
        <div className='main'>{values.join('') || ' '}</div>
      </div>
    </DisplayContainer>
  );
};

export default Display;

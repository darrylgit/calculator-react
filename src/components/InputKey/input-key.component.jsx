import React, { useContext } from 'react';

import KeyContainer from './input-key.styles.js';
import CalcContext from '../../contexts/calcContext';

const Key = ({ label, type, value }) => {
  const { pushValue } = useContext(CalcContext);

  return (
    <KeyContainer
      type={type}
      label={label}
      value={value}
      onClick={() => pushValue(value)}
    >
      {label}
    </KeyContainer>
  );
};

export default Key;

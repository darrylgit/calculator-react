import React, { useContext } from 'react';

import KeyContainer from './input-key.styles.js';
import CalcContext from '../../contexts/CalcContext';

const InputKey = ({ label, type, value }) => {
  const { pushNewInput } = useContext(CalcContext);

  return (
    <KeyContainer
      type={type}
      name={label}
      label={label}
      value={value}
      onClick={() => pushNewInput(value)}
    >
      {label}
    </KeyContainer>
  );
};

export default InputKey;

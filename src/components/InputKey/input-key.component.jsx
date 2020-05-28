import React from 'react';

import KeyContainer from './input-key.styles.js';

const Key = ({ label, type, id }) => {
  return (
    <KeyContainer type={type} label={label} id={id}>
      {label}
    </KeyContainer>
  );
};

export default Key;

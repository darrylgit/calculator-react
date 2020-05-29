import React from 'react';

import KeyContainer from './input-key.styles.js';

const Key = ({ label, type, value }) => {
  return (
    <KeyContainer type={type} label={label} value={value}>
      {label}
    </KeyContainer>
  );
};

export default Key;

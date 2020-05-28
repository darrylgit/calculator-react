import React from 'react';

import KeyContainer from './input-key.styles.js';

const Key = ({ label, type }) => {
  return <KeyContainer type={type}>{label}</KeyContainer>;
};

export default Key;

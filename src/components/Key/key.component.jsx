import React from 'react';

import { KeyOuter, KeyInner, KeySuper } from './key.styles.js';

const Key = ({ label }) => {
  return (
    <KeySuper>
      <KeyOuter>
        <KeyInner>{label}</KeyInner>
      </KeyOuter>
    </KeySuper>
  );
};

export default Key;

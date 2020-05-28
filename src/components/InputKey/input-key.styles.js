import React from 'react';
import styled from 'styled-components';

// All this work to get some circles:

export const KeyOuter = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

export const KeyInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #bbb;
  border-radius: 50%;
  -webkit-transform: scale(1);
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  cursor pointer;
`;

export const KeySuper = styled.div`
  min-width: 21%;
`;

export default ({ children }) => {
  return (
    <KeySuper>
      <KeyOuter>
        <KeyInner>{children}</KeyInner>
      </KeyOuter>
    </KeySuper>
  );
};

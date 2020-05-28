import React from 'react';
import styled, { css } from 'styled-components';

const clearKeyStyles = css`
  color: #ff3545;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: #ff3545;
    color: #fff;
  }
`;

const utilKeyStyles = css`
  color: #727272;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: #727272;
    color: #fff;
  }
`;

const numKeyStyles = css`
  color: #6fa7c6;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: #6fa7c6;
    color: white;
  }
`;

const operatorKeyStyles = css`
  color: #ff8a35;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: #ff8a35;
    color: #fff;
  }
`;

const equalsKeyStyles = css`
  color: white;
  background-color: #35aaff;

  &:hover {
    color: rgba(255, 255, 255, 0);
    background-color: #006097;
  }
`;

const getKeyStyles = ({ type }) => {
  const keyStylesHash = {
    clear: clearKeyStyles,
    util: utilKeyStyles,
    num: numKeyStyles,
    operator: operatorKeyStyles,
    equals: equalsKeyStyles
  };

  return keyStylesHash[type] || '';
};

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
  border-radius: 50%;
  -webkit-transform: scale(1);
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  cursor pointer;

  ${getKeyStyles}
`;

export const KeyWrapper = styled.div`
  min-width: 21%;
`;

export default ({ children, ...props }) => {
  return (
    <KeyWrapper>
      <KeyOuter>
        <KeyInner {...props}>{children}</KeyInner>
      </KeyOuter>
    </KeyWrapper>
  );
};

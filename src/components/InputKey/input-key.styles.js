import React from 'react';
import styled, { css } from 'styled-components';

import {
  BACKSPACE,
  PARENTHESES,
  DECIMAL,
  NEGATIVE,
  DIVIDE,
  MULTIPLY,
  ADD,
  SUBTRACT,
  EQUALS,
  CLEAR
} from '../../constants';

// Render styles conditionally for each type of input key
const clearKeyStyles = css`
  font-size: 5rem;
  color: #ff3545;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: #ff3545;
    color: #fff;
  }
`;

const utilKeyStyles = value => {
  const fontSizesHash = {
    [DECIMAL]: '5rem',
    [NEGATIVE]: '3rem',
    [PARENTHESES]: '4rem',
    [BACKSPACE]: '3.5rem'
  };

  const styles = css`
    font-size: ${fontSizesHash[value]};
    color: #727272;
    background-color: rgba(255, 255, 255, 0);

    &:hover {
      background-color: #727272;
      color: #fff;
    }
  `;

  return styles;
};

const numKeyStyles = css`
  font-size: 5rem;
  color: #6fa7c6;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: #6fa7c6;
    color: white;
  }
`;

const operatorKeyStyles = css`
  font-size: 5rem;
  color: #ff8a35;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: #ff8a35;
    color: #fff;
  }
`;

const equalsKeyStyles = css`
  font-size: 5rem;
  color: white;
  background-color: #35aaff;

  &:hover {
    color: white;
    background-color: #006097;
  }
`;

const getKeyStyles = ({ type, value }) => {
  const keyStylesHash = {
    clear: clearKeyStyles,
    util: utilKeyStyles(value),
    num: numKeyStyles,
    operator: operatorKeyStyles,
    equals: equalsKeyStyles
  };

  return keyStylesHash[type] || '';
};

const mobileLandscapeOrder = ({ value }) => {
  console.log(value);
  switch (value) {
    case CLEAR:
      return 0;
    case DIVIDE:
      return 1;
    case MULTIPLY:
      return 2;
    case SUBTRACT:
      return 3;
    case ADD:
      return 4;
    case '6':
      return 5;
    case '7':
      return 6;
    case '8':
      return 7;
    case '9':
      return 8;
    case PARENTHESES:
      return 9;
    case '2':
      return 10;
    case '3':
      return 11;
    case '4':
      return 12;
    case '5':
      return 13;
    case DECIMAL:
      return 14;
    case BACKSPACE:
      return 15;
    case '0':
      return 16;
    case '1':
      return 17;
    case NEGATIVE:
      return 18;
    case EQUALS:
      return 19;
    default:
      return 20;
  }
};

// General button styles
// All this work to get some circles:

export const KeyOuter = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;

  // Mobile landscape mode
  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) {
    padding-top: 5rem;
  }
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
  user-select: none;
  -moz-user-select: none;
  cursor pointer;

  ${getKeyStyles}

  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) {
    border-radius: 1rem;
  }
`;

export const KeyWrapper = styled.div`
  min-width: 21%;

  // Mobile landscape mode
  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) {
    order: ${mobileLandscapeOrder};
    min-width: 17%;
  }
`;

export default ({ children, ...props }) => {
  return (
    <KeyWrapper {...props}>
      <KeyOuter>
        <KeyInner {...props}>{children}</KeyInner>
      </KeyOuter>
    </KeyWrapper>
  );
};

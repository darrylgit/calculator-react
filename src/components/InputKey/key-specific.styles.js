import { css, keyframes } from 'styled-components';

import {
  BACKSPACE,
  PARENTHESES,
  DECIMAL,
  NEGATIVE,
  CLEAR,
  DIVIDE,
  MULTIPLY,
  SUBTRACT,
  ADD,
  EQUALS
} from '../../constants';

const clearColor = '#ff3545';
const utilColor = '#727272';
const numColor = '#6fa7c6';
const operatorColor = '#ff8a35;';
const equalsColor = '#35aaff';
const equalsColorHover = '#006097';
// Render styles conditionally for each type of input key

const mobileTapKeyframes = color => {
  return keyframes`
    from {
      background-color: ${color};
      color: '#fff';
    }

    to {
      color: ${color};
      background-color: #fff;
    }
  `;
};

const mobileTap = color => {
  return css`
    &:hover,
    &:active {
      animation-name: ${mobileTapKeyframes(color)};
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-delay: 0.5s;
    }
  `;
};

export const clearKeyStyles = css`
  font-size: 5rem;
  color: ${clearColor};
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: ${clearColor};
    color: #fff;
  }

  @media screen and (hover: none) {
    ${mobileTap(clearColor)}
  }
`;

export const utilKeyStyles = value => {
  const fontSizesHash = {
    [DECIMAL]: '5rem',
    [NEGATIVE]: '3rem',
    [PARENTHESES]: '4rem',
    [BACKSPACE]: '3.5rem'
  };

  const styles = css`
    font-size: ${fontSizesHash[value]};
    color: ${utilColor};
    background-color: rgba(255, 255, 255, 0);

    &:hover {
      background-color: ${utilColor};
      color: #fff;
    }

    @media screen and (hover: none) {
      ${mobileTap(utilColor)}
    }
  `;

  return styles;
};

export const numKeyStyles = css`
  font-size: 5rem;
  color: ${numColor};
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: ${numColor};
    color: white;
  }

  @media screen and (hover: none) {
    ${mobileTap(numColor)}
  }
`;

export const operatorKeyStyles = css`
  font-size: 5rem;
  color: ${operatorColor};
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: ${operatorColor};
    color: #fff;
  }

  @media screen and (hover: none) {
    ${mobileTap(operatorColor)}
  }
`;

export const equalsKeyStyles = css`
  font-size: 5rem;
  color: white;
  background-color: ${equalsColor};

  &:hover {
    color: white;
    background-color: ${equalsColorHover};
  }

  @media screen and (hover: none) {
    &:hover {
      color: white;
      background-color: ${equalsColor};
    }
  }
`;

export const mobileLandscapeOrder = ({ value }) => {
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

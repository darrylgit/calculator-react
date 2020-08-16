import React from "react";
import styled from "styled-components";
import {
  clearKeyStyles,
  utilKeyStyles,
  numKeyStyles,
  operatorKeyStyles,
  equalsKeyStyles,
  mobileLandscapeOrder
} from "./key-specific.styles";

const getKeyStyles = ({ type, value }) => {
  const keyStylesHash = {
    clear: clearKeyStyles,
    util: utilKeyStyles(value),
    num: numKeyStyles,
    operator: operatorKeyStyles,
    equals: equalsKeyStyles
  };

  return keyStylesHash[type] || "";
};

// General button styles
// All this work to get some circles:

export const KeyOuter = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;

  // Mobile landscape mode
  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) and (max-height: 40em) {
    padding-top: 5rem;
  }
`;

export const KeyInner = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 0;
  width: 100%;
  height: 100%;
  font: inherit;
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

  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) and (max-height: 40em) {
    border-radius: 1rem;
  }
`;

export const KeyWrapper = styled.div`
  min-width: 21%;

  // Mobile landscape mode
  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) and (max-height: 40em) {
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

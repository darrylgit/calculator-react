import styled from 'styled-components';

export const KeypadContainer = styled.div`
  height: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  align-items: center;
  align-content: space-around;

  @media only screen and (max-width: 23em) {
    height: 68%;
  }

  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) and (max-height: 40em) {
    height: 73%;
  }
`;

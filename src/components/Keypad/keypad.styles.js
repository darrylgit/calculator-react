import styled from 'styled-components';

export const KeypadContainer = styled.div`
  height: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  align-items: center;
  align-content: space-around;

  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) {
    height: 73%;
  }
`;

import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  width: 36rem;
  height: 64rem;
  border: 2px solid #6fa7c6;
  background-color: white;
  border-radius: 20px;
  padding: 0;
  -webkit-transform: scale(1);
  overflow: hidden;
  background-repeat: no-repeat;
  padding-bottom: 0.5rem;

  @media only screen and (max-width: 26.55em) {
    height: 100%;
    width: 100%;
    margin-top: 0;
    border-radius: 0;
  }

  @media only screen and (max-height: 40em) {
    height: 100%;
  }

  // Mobile landscape mode
  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) and (max-height: 40em) {
    width: 100vw;
    border-radius: 0;
  }
`;

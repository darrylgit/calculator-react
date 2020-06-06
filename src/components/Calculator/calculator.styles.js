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
  background-image: url(../css/background.jpg);
  @include background-size(cover);
  background-repeat: no-repeat;
  padding-bottom: 0.5rem;

  @media only screen and (max-width: 26.55em) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }

  @media only screen and (max-height: 40em) {
    height: 100vh;
  }
`;

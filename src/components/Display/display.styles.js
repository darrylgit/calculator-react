import styled from 'styled-components';

export const DisplayContainer = styled.div`
  background-image: url(display-background.jpg);
  background-size: 100% 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 6.5rem;

  .outputs {
    color: #fff;

    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .main {
      font-size: 5rem;
      text-align: right;
    }

    .sub {
      font-size: 2.5rem;
      text-align: right;
    }

    @media only screen and (max-width: 20em) {
      .main {
        font-size: 4.5rem;
      }
    }
  }

  @media screen and (min-device-aspect-ratio: 1/1) and (orientation: landscape) and (hover: none) {
    background-image: linear-gradient(to left top, #35aaff 50%, #9ad2fb);
    padding-bottom: 0.5rem;
    height: 27%;
  }
`;

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
    }

    .sub {
      font-size: 2.5rem;
    }
  }
`;

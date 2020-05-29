import styled from 'styled-components';

export const DisplayContainer = styled.div`
  background-image: url(display-background.jpg);
  background-size: 100% 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .outputs {
    color: #fff;
    margin-bottom: 6.5rem;
    padding-right: 1rem;
    display: flex;
    justify-content: flex-end;

    .main {
      font-size: 5rem;
    }
  }
`;

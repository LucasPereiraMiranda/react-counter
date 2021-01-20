import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5vh;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fba;
    width: 15vh;
    height: 18vh;
    font-size: 3rem;
    color: #000;
  }

  button {
    background-color: #bbb;
    width: 15vh;
    height: 8vh;

    &:hover {
      background-color: #ccc;
    }
  }
`;

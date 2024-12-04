import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 200px;

  background-color: #282c34;
  color: #ffff;

  > p {
    span {
      font-weight: bold;
      color: #61dafb;
    }
  }
`;

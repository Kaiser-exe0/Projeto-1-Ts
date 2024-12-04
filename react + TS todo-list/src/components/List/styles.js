import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`;

export const Task = styled.div`
  width: 400px;
  padding: 15px;
  border: 1px solid;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 500ms;
  &:hover {
    transform: scale(1.09);
  }

  h4 {
    text-align: left;
    font-size: 20px;
    margin: 0;
  }

  span {
    font-weight: bold;
  }

  .actions {
    display: flex;
    gap: 10px;
  }

  button {
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #fff;
      transform: scale(1.05);
    }
  }
`;

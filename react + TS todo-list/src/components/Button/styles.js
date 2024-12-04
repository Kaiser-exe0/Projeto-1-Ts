import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  margin: auto;
  padding: 10px 15px;
  background: none;
  border: 1px solid;
  border-radius: 10px;

  transition: all 400ms;
  cursor: pointer;

  &:hover {
    border: none;
    //background-color: #00bcd4;
    background: ${(props) => (props.isTrash ? "red" : "green")};
    color: #fff;
    transform: scale(1.02);
  }
`;

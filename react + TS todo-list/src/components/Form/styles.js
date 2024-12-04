import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  width: 100%;
  max-width: 400px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    label {
      font-size: 1rem;
      font-weight: bold;
      text-align: left;
    }

    input {
      padding: 10px 15px;
      border: 1px solid #555;
      border-radius: 6px;
      font-size: 1rem;
      transition: 600ms;

      &:hover {
        transform: scale(1.05);
      }
      &:focus {
        border-color: #00bcd4;
        outline: none;
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;

  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

export const ModalScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 400px;

  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  width: 400px;
  max-width: 90%;
  padding: 20px;
  z-index: 1001;

  > h2 {
    margin-bottom: 1em;
  }
`;

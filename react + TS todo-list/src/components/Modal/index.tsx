import React from "react";
import { Container, ModalScreen } from "./styles.js";

interface Props {
  children?: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: Props) {
  return (
    <Container onClick={onClose}>
      <ModalScreen
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <h2>Modal</h2>
        {children}
      </ModalScreen>
    </Container>
  );
}

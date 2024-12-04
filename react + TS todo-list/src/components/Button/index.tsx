import { Container } from "./styles.js";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children?: ReactNode;
  isTrash?: boolean;
}

export function Button({ title, children, isTrash, ...rest }: ButtonProps) {
  return (
    <Container isTrash={isTrash} {...rest}>
      {title}
      {children}
    </Container>
  );
}

import { ReactNode } from "react";
import StyledButton from "./Button.style";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

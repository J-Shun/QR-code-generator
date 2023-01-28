import StyledInput from "./Input.style";

type InputProps = {
  id?: string;
  placeholder?: string;
};

const Input = ({ id, placeholder }: InputProps) => {
  return <StyledInput id={id} placeholder={placeholder} />;
};

export default Input;

import StyledInput from "./Input.style";

type InputProps = {
  id?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ id, placeholder, onChange }: InputProps) => {
  return <StyledInput id={id} placeholder={placeholder} onChange={onChange} />;
};

export default Input;

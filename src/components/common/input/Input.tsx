import StyledInput from "./Input.style";

type InputProps = {
  id?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Input = ({ id, placeholder, onChange, value }: InputProps) => {
  return (
    <StyledInput
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;

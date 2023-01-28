import StyledLabel from "./Label.style";

type LabelProps = {
  children?: string;
  htmlFor?: string;
  required?: boolean;
};

const Label = ({ children, htmlFor, required }: LabelProps) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {children}
      {required && <span className="required">*</span>}
    </StyledLabel>
  );
};

export default Label;

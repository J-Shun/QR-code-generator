import styled from "styled-components";

const StyledButton = styled.button.attrs(({ type }) => ({
  type: type || "button",
}))`
  width: 100%;
  font-size: 1.25rem;
  padding: 0.5rem 0;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.25s ease-in;
  border-radius: 0.625rem;
  border-color: #2c1c6b;

  &:focus {
    border-color: #2c1c6b;
  }

  &:hover {
    color: #2c1c6b;
    background-color: #2c1c6b;
    color: #fff;
  }
`;

export default StyledButton;

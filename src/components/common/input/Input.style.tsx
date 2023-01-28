import styled from "styled-components";

const StyledInput = styled.input.attrs(({ type }) => ({
  type: type || "text",
}))`
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
  font-size: 20px;
  border: none;
  border-bottom: 2px solid #9695a3;
  outline: none;
  transition: all 0.25s ease-in;

  &:focus {
    border-color: #2c1c6b;
  }
`;

export default StyledInput;

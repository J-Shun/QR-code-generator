import styled from "styled-components";

const StyledInput = styled.input.attrs(({ type }) => ({
  type: type || "text",
}))`
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid #9695a3;
  outline: none;

  &:focus {
    border-color: #000;
  }
`;

export default StyledInput;

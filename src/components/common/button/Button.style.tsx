import styled from "styled-components";

const StyledButton = styled.button.attrs(({ type }) => ({
  type: type || "button",
}))`
  width: 100%;
  font-size: 28px;
  padding: 0.5rem 0;
  background-color: #fff;
`;

export default StyledButton;

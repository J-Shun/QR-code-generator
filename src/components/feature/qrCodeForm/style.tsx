import styled from "styled-components";

const QRCodeStyledForm = styled.div`
  display: flex;
  flex-direction: column;
  color: #171736;
  background-color: #fff;
  padding: 3rem 4rem;
  border-radius: 0.625rem;
  width: 30rem;

  h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 48px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    &:last-of-type {
      margin-bottom: 4rem;
    }
  }
`;

export default QRCodeStyledForm;

import styled from "styled-components";

const QRCodeStyledForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #171736;
  background-color: #fff;
  padding: 3rem 4rem;
  border-radius: 0.625rem;

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

  .input-area {
    position: relative;
  }

  .paste-btn {
    position: absolute;
    background-color: transparent;
    border: none;
    cursor: pointer;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .paste-icon {
    font-size: 1rem;
  }
`;

export default QRCodeStyledForm;

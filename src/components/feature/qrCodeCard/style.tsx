import styled from "styled-components";

const QRCodeStyledCard = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.625rem;
  padding: 3rem 4rem;

  .scan {
    text-transform: uppercase;
    font-size: 36px;
    margin-bottom: 1.5rem;
  }

  .qr-code {
    border: 1px solid #000;
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 28px;
    margin-bottom: 1.5rem;
  }
`;

export default QRCodeStyledCard;

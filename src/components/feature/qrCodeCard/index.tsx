import { QRCodeSVG } from "qrcode.react";
import QRCodeStyledCard from "./style";

const QRCodeCard = () => {
  return (
    <QRCodeStyledCard>
      <h2 className="scan">scan me</h2>
      <QRCodeSVG
        className="qr-code"
        value={"https://uidesigndaily.com/"}
        size={200}
        bgColor={"#fff"}
        fgColor={"#000"}
        level={"L"}
        includeMargin={true}
      />
      <p className="title">GOOGLE</p>
    </QRCodeStyledCard>
  );
};

export default QRCodeCard;

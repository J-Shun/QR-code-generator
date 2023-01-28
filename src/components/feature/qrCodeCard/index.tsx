import { QRCodeSVG } from "qrcode.react";
import QRCodeStyledCard from "./style";
import { useContext } from "react";
import { DataContext } from "../../../context/dataContext";

const QRCodeCard = () => {
  const { url, title } = useContext(DataContext);
  return (
    <QRCodeStyledCard>
      <h2 className="scan">scan me</h2>
      <QRCodeSVG
        className="qr-code"
        value={url}
        size={200}
        bgColor={"#fff"}
        fgColor={"#000"}
        level={"L"}
        includeMargin={true}
      />
      <p className="title">{title}</p>
    </QRCodeStyledCard>
  );
};

export default QRCodeCard;

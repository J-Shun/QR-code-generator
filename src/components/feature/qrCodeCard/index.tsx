import { QRCodeCanvas } from "qrcode.react";
import QRCodeStyledCard from "./style";
import { useContext } from "react";
import { DataContext } from "../../../context/dataContext";
import Button from "../../common/button/Button";

const QRCodeCard = () => {
  const { url, title, setShow } = useContext(DataContext);

  const prevStep = () => {
    setShow(false);
  };

  const downloadQRCode = () => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "qrCode"
    ) as HTMLCanvasElement;
    const pngFile = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.download = title ? `${title}_QRCode` : `QRCode`;
    downloadLink.href = `${pngFile}`;
    downloadLink.click();
  };

  return (
    <QRCodeStyledCard>
      <h2 className="scan">scan me</h2>
      <QRCodeCanvas
        id="qrCode"
        className="qr-code"
        value={url}
        size={200}
        bgColor={"#fff"}
        fgColor={"#000"}
        level={"L"}
        includeMargin={true}
      />
      <p className="title">{title}</p>

      <div className="btn-group">
        <Button onClick={prevStep}>Back</Button>
        <Button onClick={downloadQRCode}>Download</Button>
      </div>
    </QRCodeStyledCard>
  );
};

export default QRCodeCard;

import { QRCodeSVG } from "qrcode.react";

const QRCodeCard = () => {
  return (
    <div>
      <QRCodeSVG
        value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
      />
    </div>
  );
};

export default QRCodeCard;

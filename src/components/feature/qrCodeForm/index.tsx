import QRCodeStyledForm from "./style";
import Label from "../../common/label/Label";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";

const QRCodeForm = () => {
  return (
    <QRCodeStyledForm>
      <h2>QR Code Generator</h2>
      <div className="input-group">
        <Label htmlFor="url" required>
          URL
        </Label>
        <Input id="url" placeholder="https://www.google.com/" />
      </div>
      <div className="input-group">
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="Google" />
      </div>
      <Button>Generate</Button>
    </QRCodeStyledForm>
  );
};

export default QRCodeForm;

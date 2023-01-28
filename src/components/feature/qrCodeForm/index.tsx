import QRCodeStyledForm from "./style";
import Label from "../../common/label/Label";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import { useContext } from "react";
import { DataContext } from "../../../context/dataContext";

const QRCodeForm = () => {
  const { url, title, changeUrl, changeTitle } = useContext(DataContext);

  const generate = () => {
    console.log(url);
    console.log(title);
  };

  return (
    <QRCodeStyledForm>
      <h2>QR Code Generator</h2>
      <div className="input-group">
        <Label htmlFor="url" required>
          URL
        </Label>
        <Input
          id="url"
          placeholder="https://www.google.com/"
          onChange={changeUrl}
        />
      </div>
      <div className="input-group">
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="Google" onChange={changeTitle} />
      </div>
      <Button onClick={generate}>Generate</Button>
    </QRCodeStyledForm>
  );
};

export default QRCodeForm;

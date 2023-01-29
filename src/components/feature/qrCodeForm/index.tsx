import QRCodeStyledForm from "./style";
import Label from "../../common/label/Label";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import { useContext } from "react";
import { DataContext } from "../../../context/dataContext";
import { MdContentPaste } from "react-icons/md";

const QRCodeForm = () => {
  const { url, title, changeUrl, changeTitle, setShow, setUrl } =
    useContext(DataContext);

  const pasteUrl = () => {
    navigator.clipboard.readText().then((copied) => {
      setUrl(copied);
    });
  };

  const generate = () => {
    if (url.length > 0) setShow((prev) => !prev);
  };

  return (
    <QRCodeStyledForm>
      <h2>QR Code Generator</h2>
      <div className="input-group">
        <Label htmlFor="url" required>
          URL
        </Label>
        <div className="input-area">
          <Input
            id="url"
            placeholder="https://www.google.com/"
            onChange={changeUrl}
            value={url}
          />
          <button type="button" className="paste-btn" onClick={pasteUrl}>
            <MdContentPaste className="paste-icon" />
          </button>
        </div>
      </div>
      <div className="input-group">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          placeholder="Google"
          onChange={changeTitle}
          value={title}
        />
      </div>
      <Button onClick={generate}>Generate</Button>
    </QRCodeStyledForm>
  );
};

export default QRCodeForm;

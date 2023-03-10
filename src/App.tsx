import Wrap from "./App.styles";
import QRCodeCard from "./components/feature/qrCodeCard";
import QRCodeForm from "./components/feature/qrCodeForm";
import { useState } from "react";
import { DataContext } from "./context/dataContext";

const App = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);

  const changeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <DataContext.Provider
      value={{ url, title, changeUrl, changeTitle, setUrl, setShow }}
    >
      <Wrap>
        {!show && <QRCodeForm />}
        {show && <QRCodeCard />}
      </Wrap>
    </DataContext.Provider>
  );
};

export default App;

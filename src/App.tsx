import Wrap from "./App.styles";
import QRCodeCard from "./components/feature/qrCodeCard";
import QRCodeForm from "./components/feature/qrCodeForm";

const App = () => {
  return (
    <Wrap>
      <QRCodeForm />
      <QRCodeCard />
    </Wrap>
  );
};

export default App;

import { createContext } from "react";

type DataContextType = {
  url: string;
  title: string;
  changeUrl: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setUrl: (value: React.SetStateAction<string>) => void;
  setShow: (value: React.SetStateAction<boolean>) => void;
};

export const DataContext = createContext<DataContextType>({
  url: "",
  title: "",
  changeUrl: () => {},
  changeTitle: () => {},
  setUrl: () => {},
  setShow: () => {},
});

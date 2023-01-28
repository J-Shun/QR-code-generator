import { createContext } from "react";

type DataContextType = {
  url: string;
  title: string;
  changeUrl: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DataContext = createContext<DataContextType>({
  url: "",
  title: "",
  changeUrl: () => {},
  changeTitle: () => {},
});

import React, { FC, useState } from "react";
import StoreContext from "./storeContext";
import { IData } from "./dataInterfaces";
import * as dataSource from "../dataSource.json";

interface IStoreWrapper {
  children: any;
}

const StoreWrapper: FC<IStoreWrapper> = ({ children }) => {
  const updateStateData = (newData: IData) => {
    console.log("UPDATING STATE DATA");
    console.log(state);
    setState({ ...state, data: newData });
  };
  const [state, setState] = useState({
    //@ts-ignore, ignore complains about
    data: dataSource.default,
    updateStateData
  });

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};

export default StoreWrapper;

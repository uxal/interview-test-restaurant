import React from "react";
import { IData } from "./dataInterfaces";

export interface IStoreContext {
  data: IData | null;
  updateStateData: any;
}

const StoreContext = React.createContext<IStoreContext>({
  /** data is the JSON data extracted from dataSource.json */
  data: null,
  updateStateData: (existingState: IStoreContext) => {}
});

export default StoreContext;

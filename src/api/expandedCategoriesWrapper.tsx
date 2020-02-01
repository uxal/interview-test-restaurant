import React, { FC, useState } from "react";
import ExpandedCategoriesContext from "./expandedCategoriesContext";

interface IExpandedCategoriesWrapper {
  children: any;
}

const ExpandedCategoriesWrapper: FC<IExpandedCategoriesWrapper> = ({
  children
}) => {
  const updateExpandedCategories = (expandedCategories: any) => {
    setState({ ...state, expandedCategories });
  };
  const [state, setState] = useState({
    // start with both categories expanded
    expandedCategories: ["pizza", "pasta"],
    updateExpandedCategories
  });

  return (
    <ExpandedCategoriesContext.Provider value={state}>
      {children}
    </ExpandedCategoriesContext.Provider>
  );
};

export default ExpandedCategoriesWrapper;

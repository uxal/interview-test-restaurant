import React from "react";

export interface IExpandedCategoriesContext {
  expandedCategories: string[];
  updateExpandedCategories: any;
}

const ExpandedCategoriesContext = React.createContext<
  IExpandedCategoriesContext
>({
  expandedCategories: [],
  updateExpandedCategories: () => {}
});

export default ExpandedCategoriesContext;

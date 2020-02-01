import React, { FC, useContext } from "react";
import StoreContext from "../../api/storeContext";
import MenuCategory from "../../components/MenuCategory";

const FoodMenu: FC<{}> = () => {
  const context = useContext(StoreContext);

  if (!context.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {context.data.menuItems.menuCategories.map(item => (
        <MenuCategory key={item.type} type={item.type} />
      ))}
    </div>
  );
};

export default FoodMenu;

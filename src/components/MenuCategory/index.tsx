import React, { FC, useContext } from "react";
import { useSpring, animated } from "react-spring";
import remove from "lodash/remove";
import Fab from "@material-ui/core/Fab";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StoreContext from "../../api/storeContext";
import ExpandedCategoriesContext from "../../api/expandedCategoriesContext";
import {
  Wrapper,
  Header,
  MenuItemsWrapper,
  ExtraItemsList,
  Title
} from "./styled";
import MenuItem from "../MenuItem";
import ExtraItem from "../ExtraItem";

export interface IMenuCategoryProps {
  type: string;
}

const MenuCategory: FC<IMenuCategoryProps> = ({ type }) => {
  // get the data store context
  const { data, updateStateData } = useContext(StoreContext);

  const { expandedCategories, updateExpandedCategories } = useContext(
    ExpandedCategoriesContext
  );

  // initialize the animation spring which will display the menu items
  const showMenuItems = expandedCategories.includes(type);
  const animationProps = useSpring({
    opacity: showMenuItems ? 1 : 0,
    maxHeight: showMenuItems ? 500 : 0,
    from: {
      opacity: showMenuItems ? 1 : 0,
      maxHeight: showMenuItems ? 500 : 0,
      overflow: "hidden"
    }
  });

  if (!data) {
    return null;
  }
  const category = data.menuItems.menuCategories.find(
    item => item.type === type
  );
  if (!category) {
    return null;
  }

  /**
   * This toggles the category menu items
   */
  const toggleMenuItems = (): void => {
    const newExpandedCategories = expandedCategories.slice();
    if (newExpandedCategories.find(item => item === category.type)) {
      remove(newExpandedCategories, item => item === category.type);
    } else {
      newExpandedCategories.push(category.type);
    }
    updateExpandedCategories(newExpandedCategories);
  };

  //find the category details
  const categoryDetails = data.foodCategories.find(
    item => item.id === category.type
  );
  if (!categoryDetails) {
    return null;
  }

  const removeCategoryExtraItem = (item: string): void => {
    // create a new state
    const newState = { ...data };
    const newStateCategory = data.menuItems.menuCategories.find(
      item => item.type === type
    );
    if (newStateCategory) {
      remove(newStateCategory.extras, extraId => extraId === item);
      updateStateData(newState);
    }
  };

  console.log("RENDERING CATEGORIES");
  console.log(expandedCategories);

  return (
    <Wrapper>
      <Header>
        <Title>
          <img src={categoryDetails.img} />
          <div>
            <h3>{categoryDetails.name}</h3>
          </div>
          <Fab onClick={toggleMenuItems} size="small">
            {showMenuItems ? <ExpandLess /> : <ExpandMore />}
          </Fab>
        </Title>
        {category.extras.length > 0 && (
          <ExtraItemsList>
            {category.extras.map(item => (
              <ExtraItem
                extraItemId={item}
                key={item}
                onRemove={() => {
                  removeCategoryExtraItem(item);
                }}
              />
            ))}
          </ExtraItemsList>
        )}
      </Header>

      <animated.div style={animationProps}>
        <MenuItemsWrapper>
          {category.items.map(item => (
            <MenuItem key={item.id} {...item} />
          ))}
        </MenuItemsWrapper>
      </animated.div>
    </Wrapper>
  );
};

export default MenuCategory;

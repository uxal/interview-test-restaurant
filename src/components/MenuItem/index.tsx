import React, { FC, useContext } from "react";
import { useHistory } from "react-router-dom";
import numeral from "numeral";
import remove from "lodash/remove";
import StoreContext from "../../api/storeContext";
import { IMenuItem } from "../../api/dataInterfaces";
import NoImage from "../../assets/imgs/no-image.png";
import { Wrapper, Header, ExtraItemsList, Title } from "../MenuCategory/styled";
import { Price } from "./styled";
import ExtraItem from "../ExtraItem";

const MenuItem: FC<IMenuItem> = ({ id, extras }) => {
  const { data, updateStateData } = useContext(StoreContext);
  const history = useHistory();

  if (!data) {
    return null;
  }

  const foodItem = data.foodItems.find(item => item.id === id);
  if (!foodItem) {
    return null;
  }

  /** change route, go to menu details */
  const goToMenuItemDetails = () => {
    history.push(`/details/${id}`);
  };

  // remove extra item
  const removeExtraItem = (item: string): void => {
    // create a new state
    const newState = { ...data };

    let menuItemToUpdate: IMenuItem | undefined;
    newState.menuItems.menuCategories.forEach(category => {
      if (!menuItemToUpdate) {
        menuItemToUpdate = category.items.find(product => product.id === id);
      }
    });

    if (menuItemToUpdate) {
      remove(menuItemToUpdate.extras, extraToRemove => extraToRemove === item);
    }

    // and now update the global state
    updateStateData(newState);
  };

  /** Next method is used to compute the total price (base product price + extras) */
  const computePrice = (): number => {
    if (!data) {
      return 0;
    }
    const foodItem = data.foodItems.find(item => item.id === id);
    if (!foodItem) {
      return 0;
    }
    let totalPrice = foodItem.price;
    if (extras.length) {
      const extraItems = data.choicesItems.filter(item =>
        extras.includes(item.id)
      );
      totalPrice = extraItems.reduce((acc, choiceItem) => {
        return acc + choiceItem.price;
      }, totalPrice);
    }
    return totalPrice;
  };

  return (
    <Wrapper>
      <Header>
        <Title onClick={goToMenuItemDetails}>
          <img src={foodItem.img || NoImage} />
          <div>
            <h3>{foodItem.name}</h3>
            {foodItem.description && <i>{foodItem.description}</i>}
          </div>
          <Price>{numeral(computePrice()).format("0.00")} RON</Price>
        </Title>
        {extras.length > 0 && (
          <ExtraItemsList>
            {extras.map(item => (
              <ExtraItem
                extraItemId={item}
                key={item}
                onRemove={e => {
                  e.preventDefault();
                  removeExtraItem(item);
                }}
              />
            ))}
          </ExtraItemsList>
        )}
      </Header>
    </Wrapper>
  );
};

export default MenuItem;

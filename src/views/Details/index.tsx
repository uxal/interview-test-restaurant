import React, { FC, useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import numeral from "numeral";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import RadioGroup from "@material-ui/core/RadioGroup";
import remove from "lodash/remove";
import { IMenuItem } from "../../api/dataInterfaces";
import StoreContext from "../../api/storeContext";
import DetailsExtraItem from "../../components/DetailsExtraItem";
import {
  Wrapper,
  Header,
  Body,
  FoodItemDescription,
  ExtraTitle,
  ExtraSubTitle,
  ExtraOptions
} from "./styled";

const Details: FC<{}> = () => {
  const { data, updateStateData } = useContext(StoreContext);
  const [invalid, setInvalid] = useState(false);
  const history = useHistory();
  /** get the menu item id using useParams react router hook */
  const { id } = useParams();
  if (!data) {
    return null;
  }

  // now extract all the details
  let menuItemData: IMenuItem | undefined;
  data.menuItems.menuCategories.forEach(menuItem => {
    if (!menuItemData) {
      menuItemData = menuItem.items.find(item => item.id === id);
    }
  });

  // now find the product details and all the extras
  const foodItem = data.foodItems.find(item => {
    if (menuItemData) {
      return item.id === menuItemData.id;
    }
    return false;
  });

  if (!foodItem) {
    return <div>No Menu Item found with this id</div>;
  }

  const crustOptions = data.choicesItems.filter(
    item => item.choiceType === "crust"
  );

  const extraToppings = data.choicesItems.filter(
    item => item.choiceType === "extraToppings"
  );

  let selectedCrustType: string | undefined;
  selectedCrustType = menuItemData?.extras.find(extraId =>
    ["crustFluffy", "crustCrispy"].includes(extraId)
  );

  const handleToppingChange = (toppingId: string, selected: boolean): void => {
    if (menuItemData) {
      if (selected) {
        menuItemData.extras.push(toppingId);
      } else {
        remove(
          menuItemData.extras,
          toppingIdToRemove => toppingIdToRemove === toppingId
        );
      }
    } else {
      return;
    }

    // update the global state
    updateGlobalState();
  };

  const handleCrustChange = (crustId: string): void => {
    if (menuItemData) {
      // remove all crust types
      remove(menuItemData.extras, extraId =>
        ["crustFluffy", "crustCrispy"].includes(extraId)
      );

      // add the new crust type
      menuItemData.extras.push(crustId);
      // and remove any previous invalid message
      setInvalid(false);
    } else {
      return;
    }

    // update the global state
    updateGlobalState();
  };

  const updateGlobalState = () => {
    const newState = { ...data };
    newState.menuItems.menuCategories.forEach(menuItem => {
      const menuItemToUpdate = menuItem.items.find(item => item.id === id);
      if (menuItemToUpdate && menuItemData) {
        menuItemToUpdate.extras = [...menuItemData.extras];
        updateStateData(newState);
      }
    });
  };

  const goToMainPage = () => {
    // first check if we have a crust selected
    if (!selectedCrustType && foodItem.category === "pizza") {
      setInvalid(true);
      return;
    }
    history.push("/");
  };

  return (
    <Wrapper>
      <Header>
        <div>
          <IconButton onClick={goToMainPage}>
            <ArrowBackIos />
          </IconButton>
        </div>
        <h3>{foodItem.name}</h3>
      </Header>
      <Body>
        {foodItem.description.length > 0 && (
          <FoodItemDescription>({foodItem.description})</FoodItemDescription>
        )}
        {foodItem.category === "pizza" && (
          <React.Fragment>
            <ExtraTitle invalid={invalid}>
              Crust <ExtraSubTitle>(Required)</ExtraSubTitle>
            </ExtraTitle>

            <ExtraOptions>
              <RadioGroup
                name="crust-type"
                value={selectedCrustType}
                onChange={(e, crustId) => {
                  handleCrustChange(crustId);
                }}
              >
                {crustOptions.map(crust => (
                  <DetailsExtraItem
                    key={crust.id}
                    id={crust.id}
                    name={crust.name}
                    type="crust"
                    price={crust.price}
                    onChange={() => {}}
                    selected={false}
                  />
                ))}
              </RadioGroup>
            </ExtraOptions>
          </React.Fragment>
        )}
        <ExtraTitle>Extra toppings</ExtraTitle>
        <ExtraOptions>
          {extraToppings.map(topping => (
            <DetailsExtraItem
              key={topping.id}
              id={topping.id}
              name={topping.name}
              type="topping"
              price={topping.price}
              onChange={selected => {
                handleToppingChange(topping.id, selected);
              }}
              selected={
                menuItemData ? menuItemData.extras.includes(topping.id) : false
              }
            />
          ))}
        </ExtraOptions>
      </Body>
    </Wrapper>
  );
};

export default Details;

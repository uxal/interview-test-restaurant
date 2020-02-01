export interface IFoodCategory {
  id: string;
  name: string;
  img: string;
}

export interface IFoodItem {
  id: string;
  name: string;
  img: string;
  description: string;
  category: string;
  price: number;
}

export interface IChoiceType {
  id: string;
  name: string;
}

/** These are the crust types, extra toppings etc */
export interface IChoiceItem {
  id: string;
  choiceType: string;
  name: string;
  img: string;
  price: number;
}

export interface IMenuItem {
  id: string;
  /** in extras we have ids of choice items */
  extras: string[];
}

export interface IMenuCategory {
  type: string;
  extras: string[];
  items: IMenuItem[];
}

interface IMenuCategories {
  menuCategories: IMenuCategory[];
}

/** The interface for the whole data json */
export interface IData {
  foodCategories: IFoodCategory[];
  foodItems: IFoodItem[];
  choicesTypes: IChoiceType[];
  choicesItems: IChoiceItem[];
  menuItems: IMenuCategories;
}

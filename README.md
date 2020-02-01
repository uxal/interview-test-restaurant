# Interview test - Build a 2 page react app for a restaurant

This small app showcases my way of working with React, I used the following technologies:

- All components are functional react components and I used React hooks

- Data layer is lifted above all components, I used Context API (you can find these in `/src/api` folder)

- I've used `styled-componets` to style each component. Each component has it's own folder and inside it I wrote the main React code, and there's a second file "styled.tsx" where I defined all the styling. Usually I add one more test file for unit testing

- To have some nicer UI components I used https://material-ui.com/

- Used `react-spring` to animate the opening/closing of categories

## The requirement

1. Create a JSON data structure based on some images I received (image not included in this repository) The result JSON file is in `/src/dataSource.json`

2. Create the 2 page app using the data from the JSON file

## Capabilities, Use manual

- The main page renders MenuItem grouped by categories. You can use the button on top right of each category to expand or close the category (check the animation!)

- Each Category has one extra option, if you click on the remove x button that item goes away. Same applies for MenuItems

- When you remove an extra item from a MenuItem, the price updates accordingly.

- Clicking on a MenuItem (e.g. "Pizza Margherita") you are moved to the second page of the app -> the Details page

- On the Details page, the Crust option is shown only if the MenuItem category is a "pizza", so for pasta you see only "Extra toppings". On this page you will find elements from material-ui -> the radio button and the checkboxes.

- Selecting or removing toppings on the Details page, updates the whole state so when you go back to the main page the prices and options will be updated accordingly.

- Validation of Crust option, initially after opening the details of a pizza if you want to go back (USING THE UI BACK BUTTON, not the browser's !) you'll see the Crust text becomes red, because it's mandatory to select the crust type.

## How to test it?

- Execute `yarn install` followed `run start`
- with docker: `docker-compose up -d`

The app runs on `http://localhost:3000/`

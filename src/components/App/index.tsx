import React from "react";
import { Wrapper, PagesWrapper } from "./styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import StoreWrapper from "../../api/storeWrapper";
import ExpandedCategoriesWrapper from "../../api/expandedCategoriesWrapper";
import Header from "../Header";
import FoodMenu from "../../views/FoodMenu";
import Details from "../../views/Details";
const App = () => {
  return (
    <Wrapper>
      <Header />
      <Router>
        <ExpandedCategoriesWrapper>
          <StoreWrapper>
            <Container maxWidth="md">
              <PagesWrapper>
                <Switch>
                  <Route path="/details/:id">
                    <Details />
                  </Route>
                  <Route path="/">
                    <FoodMenu />
                  </Route>
                </Switch>
              </PagesWrapper>
            </Container>
          </StoreWrapper>
        </ExpandedCategoriesWrapper>
      </Router>
    </Wrapper>
  );
};

export default App;

import React from "react";
import Container from "@material-ui/core/Container";
import { Wrapper, InnerWrapper } from "./styled";
import RestaurantLogo from "../../assets/imgs/restaurant-logo.png";

const Header = () => (
  <Wrapper>
    <Container maxWidth="md">
      <InnerWrapper>
        <img src={RestaurantLogo} />
        <span>Bono's Italian Restaurant</span>
      </InnerWrapper>
    </Container>
  </Wrapper>
);

export default Header;

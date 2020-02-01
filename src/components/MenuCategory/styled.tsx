import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 10px;
  border: 1px solid #e1e1e0;
  margin-bottom: 15px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;
  }

  button {
    position: absolute;
    right: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    h3 {
      margin: 2px 0;
    }

    i {
      font-size: 14px;
      color: #333;
    }
  }
`;

export const MenuItemsWrapper = styled.div`
  padding-left: 60px;
  display: flex;
  flex-direction: column;
`;

export const ExtraItemsList = styled.ul`
  margin: 5px 0 0 0;
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;

  li {
    margin-right: 10px;
  }
`;

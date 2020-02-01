import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #efefef;
  box-shadow: 0 0 1px 0 #999;
  padding: 0 10px;

  div {
    padding-right: 10px;
    border-right: 1px solid #ccc;
    display: flex;
    align-items: center;
  }

  h3 {
    margin: 0;
    padding-left: 15px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

export const FoodItemDescription = styled.div`
  font-size: 14px;
`;

export interface IExtraTitle {
  invalid?: boolean;
}

export const ExtraTitle = styled.h3<IExtraTitle>`
  cursor: default;
  display: flex;
  align-items: center;
  color: ${({ invalid }) => (invalid ? "red" : "black")};
`;

export const ExtraSubTitle = styled.span`
  font-size: 16px;
  font-weight: 300;
  margin-left: 5px;
`;

export const ExtraOptions = styled.ul`
  list-style: none;
  background: #fff;
  border: 1px solid #ddd;
  padding: 0;
  margin: 0;
`;

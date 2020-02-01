import styled from "styled-components";

export const Wrapper = styled.header`
  height: 90px;
  border-bottom: 1px solid #efefef;
  box-shadow: 0 0 1px 0 #999;
  overflow: hidden;
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 1;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 100px;
  }

  span {
    margin-left: 20px;
    font-size: 30px;
    margin-top: -15px;
    color: red;
  }
`;

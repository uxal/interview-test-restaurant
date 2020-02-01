import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #eee;
  padding: 5px 0 5px 40px;

  &:first-child {
    border-top: none;
  }
`;

export const Price = styled.div`
  margin-right: 15px;
`;

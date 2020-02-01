import styled from "styled-components";

export const Wrapper = styled.li`
  background: #f3f3f0;
  border: 1px solid #c7c7c7;
  padding: 5px;
  border-radius: 3px;
  font-size: 13px;
  display: flex;
  align-items: center;

  span {
    cursor: default;
  }

  button {
    font-size: 1.2rem;
    cursor: pointer;

    svg {
      cursor: pointer;
      font-size: 1.1rem;
      color: rgba(0, 0, 0, 0.54);
    }

    &:hover {
      svg {
        color: red;
      }
    }
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 16px;
  button {
    height: 32px;
    width: auto;
    padding: 6px 16px;
    border: 1px solid #8d8d8d;
    border-radius: 16px;
    background-color: var(--gray-900);
    color: var(--write-50);
    font-size: 14px;
    &:hover {
      background-color: var(--orange);
    }

    &.active {
      background-color: #ff6600;
    }
  }
`;

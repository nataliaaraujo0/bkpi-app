import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperCard = styled.div`
  width: 181px;
  height: 292px;
  border-radius: 8px;
  margin-top: 16px;
  background-color: var(--gray-700);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 14px;
    font-weight: 400;
    color: var(--orange);
  }
`;

export const WrapperChart = styled.div``;
export const WrapperText = styled.div``;
export const WrapperPreco = styled.div`
  background-color: blue;

  h1 {
    color: var(--write-50);
  }
  span {
    color: var(--gray-500);
  }
`;
export const WrapperDia = styled.div`
  margin-top: 16px;
  background-color: yellowgreen;
`;

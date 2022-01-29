import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px;
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
  h1 {
    color: var(--write-50);
    text-align: center;
    font-size: 14px;
  }
  span {
    color: var(--gray-500);
    font-size: 12px;
  }
`;
export const WrapperDia = styled.div`
  h1 {
    color: var(--write-50);
    text-align: center;
    font-size: 14px;
  }
  span {
    color: var(--gray-500);
    font-size: 12px;
  }

  text-align: center;
  margin-top: 16px;
`;

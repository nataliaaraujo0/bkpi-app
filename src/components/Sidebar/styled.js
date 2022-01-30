import styled from "styled-components";

export const Wrapper = styled.div`
  width: 230px;
  height: 910px;
  display: flex;
  flex-direction: column;
  background-color: var(--gray-700);
`;

export const WrapperLogo = styled.div`
  padding: 17px;
`;

export const SideItems = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  list-style: none;
  width: 100%;

  a {
    width: 198px;
    height: 36px;
    display: flex;
    align-items: center;
    color: #f2f2f2;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    margin-top: 15px;

    padding: 5px;

    &:hover {
      border-radius: 8px;
      background-color: #ff6600;
    }

    span {
      padding-left: 9px;
    }

    &.active {
      background-color: #ff6600;
    }
  }
`;

export const WrapperSeparetor = styled.div``;
export const WrapperIconSeparetor = styled.div`
  display: flex;
`;
export const WrapperConfig = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;

  div {
    height: 1px;
    width: 100%;
    background-color: #8d8d8d;
    margin-right: 20px;
  }
`;

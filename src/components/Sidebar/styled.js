import styled from "styled-components";

export const Wrapper = styled.div`
  width: 230px;
  height: 761px;
  display: flex;
  flex-direction: column;
  background-color: var(--gray-700);
`;

export const WrapperLogo = styled.div`
  padding: 17px;
`;

export const SideItems = styled.ul`
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
    margin-top: 24px;

    &:hover {
      border-radius: 8px;
      background-color: #ff6600;
    }

    span {
      padding-left: 9px;
    }
  }
`;

export const WrapperConfig = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 260px;

  a {
    display: flex;
    align-items: flex-end;
  }
`;

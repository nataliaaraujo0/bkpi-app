import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  width: 100vw;
  min-width: 100vh;
  background-color: var(--gray-900);
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 15px;

  background-color: blue;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  align-items: center;
  padding: 30px 0;
`;

import { Wrapper } from "./styled";
import { Header } from "../components/Header";

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <h1>layout</h1>
      <Header />
    </Wrapper>
  );
};

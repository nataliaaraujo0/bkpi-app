import { Wrapper, Container, Content } from "./styled";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
};
<Header />;

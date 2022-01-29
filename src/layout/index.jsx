import { Wrapper, Container, Content } from "./styled";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Wrapper>
        <Sidebar />
        <Container>
          <Content>{children}</Content>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};
<Header />;

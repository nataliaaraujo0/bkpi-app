import { Charts } from "../../components/charts";
import { Header } from "../../components/Header";
import { Produtos } from "../../components/Produtros";
import { Layout } from "../../layout";
import { Wrapper } from "./styled";

export const Home = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <Header />
          <Produtos />
          <Charts />
        </Wrapper>
      </Layout>
    </>
  );
};

import { Charts } from "../../components/charts";
import { Header } from "../../components/Header";
import { Produtos } from "../../components/Produtros";
import { Layout } from "../../layout";
import { Wrapper } from "./styled";
import Carousel from "react-elastic-carousel";
import "./style.css";

export const Home = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <Header />
          <Produtos />

          <Carousel itemsToShow={4}>
            <Charts />
            <Charts mes="Fevereiro" />
            <Charts mes="Março" />
            <Charts mes="Abril" />
            <Charts mes="Maio" />
            <Charts mes="Junho" />
            <Charts mes="Julho" />
            <Charts mes="Agosto" />
            <Charts mes="Setembro" />
            <Charts mes="Outubro" />
            <Charts mes="Novembro" />
            <Charts mes="Dezembro" />
          </Carousel>
        </Wrapper>
      </Layout>
    </>
  );
};

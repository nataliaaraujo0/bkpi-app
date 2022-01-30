import { Charts } from "../../components/charts";
import { Header } from "../../components/Header";
import { Produtos } from "../../components/Produtros";
import { Layout } from "../../layout";
import { Wrapper } from "./styled";
import Carousel from "react-elastic-carousel";
import "./style.css";

export const Dashboard = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <Header />
          <Produtos />

          <Carousel itemsToShow={5.25} showArrows={false}>
            <Charts />
            <Charts mes="Fevereiro/12" />
            <Charts mes="Março/12" />
            <Charts mes="Abril/12" />
            <Charts mes="Maio/12" />
            <Charts mes="Junho/12" />
            <Charts mes="Julho/12" />
            <Charts mes="Agosto/12" />
            <Charts mes="Setembro/12" />
            <Charts mes="Outubro/12" />
            <Charts mes="Novembro/12" />
            <Charts mes="Dezembro/12" />
          </Carousel>
        </Wrapper>
      </Layout>
    </>
  );
};

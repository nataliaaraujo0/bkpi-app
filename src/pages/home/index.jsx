import { Header } from "../../components/Header";
import { Layout } from "../../layout";
import { Wrapper } from "./styled";

export const Home = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <Header />
        </Wrapper>
      </Layout>
    </>
  );
};

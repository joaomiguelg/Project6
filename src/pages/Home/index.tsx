import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import Restaurant from "../../components/Restaurant";
import { Container } from "../../styles";

const Home = () => (
  <>
    <Header />
    <Container>
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
    </Container>
    <Footer />
  </>
);

export default Home

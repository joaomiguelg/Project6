import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import Restaurant from "../../components/Restaurant";
import { Container } from "../../styles";

export interface CardapioIten  {

  foto: string,
  preco: string,
  id: number,
  nome: string,
  descricao: string
  porcao: string

}

export type Restaurante = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: string;
  descricao: string;
  capa: string
  cardapio: CardapioIten[]

};

const Home = () => {
  const [estabelecimento, setEstabelecimento] = useState<Restaurante[]>([]);

  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fake-api-tau.vercel.app/api/efood/restaurantes"
      );
      const result: Restaurante[] = await response.json();
      setEstabelecimento(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ul>
          {estabelecimento.map((rest) => (
            <li key={rest.id}>
              <Restaurant id={rest.id} destacado={rest.destacado}capa={rest.capa} tipo={rest.tipo} titulo={rest.titulo} avaliacao={rest.avaliacao} descricao={rest.descricao} />
            </li>
          ))}
        </ul>
      </Container>
      <Footer />
    </>
  );
};


export default Home;

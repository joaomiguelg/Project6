import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import Restaurant from "../../components/Restaurant";
import { Container } from "../../styles";

import { useGetRestaurantQuery } from '../../services/api'
import Confirm from "../../components/Confirm";
 
export interface CardapioIten  {

  foto: string,
  preco: number,
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

  const { data } = useGetRestaurantQuery()
  
  if(!data) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
    
      <Header />   
      <Container>
        <ul>
          {data.map((rest) => (
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

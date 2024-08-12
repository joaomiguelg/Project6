import {
  Button,
  CardRestaurant,
  DescribeContainer,
  GeneralContainer,
  ImgContainer,
  TitleContainer,
} from "./styles";

import starIcon from "../../assets/images/starIcon.png";
import { useEffect, useState } from "react";
import { Restaurante } from "../../pages/Home";



type Props = {
  capa: string;
  tipo: string;
  titulo: string;
  avaliacao: string;
  descricao: string;
  destacado: boolean;
  id: number;
};

const Restaurant = ({
  capa,
  tipo,
  titulo,
  avaliacao,
  descricao,
  destacado,
  id

  
}: Props) => {

  const [ restaurant, setRestaurant] = useState<Restaurante>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res[1]))
  }, [])
  
  if(!restaurant) {
    return <h3>Carregando...</h3>
  }

 


  return (
    <CardRestaurant>
      <ImgContainer>
        <img src={capa} alt="Foto restaurante" />
        <div className="spans">
          {destacado && <span>Destaque da Semana</span>}
          <span>{tipo}</span>
        </div>
      </ImgContainer>
      <GeneralContainer>
        <TitleContainer>
          <h3>{titulo}</h3>
          <div>
            <a href="">
              <span>{avaliacao}</span>
              <img src={starIcon} alt="Icone de Estrela" />
            </a>
          </div>
        </TitleContainer>
        <DescribeContainer>
          <p>{descricao}</p>
          <Button type='link' to={`/restaurante/${id}`}>Saiba Mais</Button>
        </DescribeContainer>
      </GeneralContainer>
    </CardRestaurant>
  );
};

export default Restaurant;



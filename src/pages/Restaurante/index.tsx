import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import HeaderAbout from "../../components/HeaderAbout";
import Modal from "../../components/Modal";
import RestaurantHero from "../../components/RestaurantHero";
import { AboutContainer } from "../../styles";
import { Restaurante } from "../Home";
import { useEffect, useState } from "react";
import Product from "../../components/Product";



const About = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState<Restaurante>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, [id]);

  if (!restaurant) {
    return <h3> Carregando ...</h3>;
  }

  console.log(restaurant.cardapio)

  return (
    <>
      <HeaderAbout />
      <RestaurantHero capa={restaurant.capa} tipo={restaurant.tipo} titulo={restaurant.titulo} />
      <Modal />
      <AboutContainer>
        {restaurant.cardapio.map((item, id) => <ul>
          <li key={id}><Product foto={item.foto} nome={item.nome} descricao={item.descricao} /></li>
        </ul>)}
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;

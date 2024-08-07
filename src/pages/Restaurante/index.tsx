import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import HeaderAbout from "../../components/HeaderAbout";
import Modal from "../../components/Modal";
import RestaurantHero from "../../components/RestaurantHero";
import { AboutContainer } from "../../styles";
import { CardapioIten, Restaurante } from "../Home";
import { useEffect, useState } from "react";
import Product from "../../components/Product";

const About = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState<Restaurante>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<CardapioIten | null>(null);
  

  const handleClick = (product: CardapioIten) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, [id]);

  if (!restaurant) {
    return <h3> Carregando ...</h3>;
  }

  return (
    <>
      <HeaderAbout />
      <RestaurantHero
        capa={restaurant.capa}
        tipo={restaurant.tipo}
        titulo={restaurant.titulo}
      />
      <AboutContainer>
        <ul>
          {restaurant.cardapio.map((item) => (
            <li key={item.id}>
              <Product
                foto={item.foto}
                nome={item.nome}
                descricao={item.descricao}
                onProductClick={() => handleClick(item)}
              />
            </li>
          ))}
        </ul>
        {showModal && selectedProduct && (
          <Modal
            foto={selectedProduct.foto}
            nome={selectedProduct.nome}
            descricao={selectedProduct.descricao}
            porcao={selectedProduct.porcao}
            preco={selectedProduct.preco}
            onClose={handleCloseModal}
          />
        )}
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;

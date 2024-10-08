import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import HeaderAbout from "../../components/HeaderAbout";
import Modal from "../../components/Modal";
import RestaurantHero from "../../components/RestaurantHero";
import { AboutContainer } from "../../styles";
import { CardapioIten} from "../Home";
import {  useState } from "react";
import Product from "../../components/Product";
import { useGetCardapioItensQuery } from "../../services/api";

const About = () => {
  const { id } = useParams();

  
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<CardapioIten | null>(
    null
  );

  const { data: restaurant} = useGetCardapioItensQuery(id)

  const handleClick = (product: CardapioIten) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  

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
          {restaurant.cardapio.map((item: CardapioIten) => (
            <li key={item.id}>
              <Product
                onProductClick={() => handleClick(item)} iten={item}              />
            </li>
          ))}
        </ul>
        {showModal && selectedProduct && (
          <Modal
            iten={selectedProduct}
            onClose={handleCloseModal} 
          />
        )}
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;

import {
  Button,
  CardRestaurant,
  DescribeContainer,
  GeneralContainer,
  ImgContainer,
  TitleContainer,
} from "./styles";



import restaurantImg from "../../assets/images/28895a55942ffb290182da4c32ba645d.png";
import starIcon from "../../assets/images/starIcon.png";

const Restaurant = () => (
  <CardRestaurant>
    <ImgContainer>
      <img src={restaurantImg} alt="" />
      <div className="spans">
        <span>Destaque da Semana</span>
        <span>Japonesa</span>
      </div>
    </ImgContainer>
    <GeneralContainer>
      <TitleContainer>
        <h3>Hioki Sushi</h3>
        <div>
          <a href="">
            <span>4.9</span>
            <img src={starIcon} alt="Icone de Estrela" />
          </a>
        </div>
      </TitleContainer>
      <DescribeContainer>
        <p>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!
        </p>
        <Button to={'/about'}>Saiba Mais</Button>
      </DescribeContainer>
    </GeneralContainer>
  </CardRestaurant>
);

export default Restaurant;

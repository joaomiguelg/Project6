
import { useDispatch } from "react-redux";
import { Button, StyledProduct } from "./styles";
import { add, open } from "../../store/reducers/cart";
import { CardapioIten } from "../../pages/Home";

type Props = {
  iten: CardapioIten
  onProductClick: () => void
}

const Product = ({iten, onProductClick}: Props) => {

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 200) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(iten))
    dispatch(open())
  }
    
  return (
    <>
      <StyledProduct onClick={onProductClick} >
        <img src={iten.foto} alt="Imagem do Produto" />
        <h4>{iten.nome}</h4>
        <p>
          {getDescricao(iten.descricao)}
        </p>
        <Button onClick={addToCart}  >Adicionar ao Carrinho</Button>
      </StyledProduct>
    </>
  );
};

export default Product;

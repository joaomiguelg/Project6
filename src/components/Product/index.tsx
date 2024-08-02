import { Button, StyledProduct } from "./styles";

type Props = {
  foto: string
  nome: string
  descricao: string
}

const Product = ({foto, nome, descricao}: Props) => {
    
  return (
    <>
      <StyledProduct>
        <img src={foto} alt="Imagem do Produto" />
        <h4>{nome}</h4>
        <p>
          {descricao}
        </p>
        <Button>Adicionar ao Carrinho</Button>
      </StyledProduct>
    </>
  );
};

export default Product;

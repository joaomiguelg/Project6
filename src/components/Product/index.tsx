import { Button, StyledProduct } from "./styles"
import productImg from '../../assets/images/image 3.png'

const Product = () => (
    <>
    <StyledProduct>
        <img src={productImg} alt="Imagem do Produto" />
        <h4>Pizza Marguerita</h4>
        <p>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </p>
        <Button>Adicionar ao Carrinho</Button>
    </StyledProduct>
    </>
)

export default Product
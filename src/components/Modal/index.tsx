import imgProduct from '../../assets/images/image 3.png'
import { Button, StyledModal } from './styles'

const Modal = () => (
    <>
    <StyledModal>
        <span>x</span>
        <img src={imgProduct} alt="" />
        <div>
            <h2>Pizza Marguerita</h2>
            <p>
            A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
            </p>
            <p>Serve: de 2 a 3 pessoas</p>
            <Button to={''}>Adicionar ao carrinho - R$ 60,90</Button>
        </div>
    </StyledModal>
    </>
)

export default Modal
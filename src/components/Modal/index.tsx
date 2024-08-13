import { useDispatch } from "react-redux";
import { CardapioIten } from "../../pages/Home";
import { Button,  Overlay, StyledModal } from "./styles";
import { add, open } from '../../store/reducers/cart'


type Props = {
  iten: CardapioIten
  onClose: () => void;
};

const Modal = ({
  iten,
  onClose,
}: Props) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(iten))
    dispatch(open())
  }
 
  return (
    <>
      <Overlay />
      <StyledModal>
        <button onClick={onClose} className="closeButton">
          x
        </button>
        <img src={iten.foto} alt="" />
        <div>
          <h2>{iten.nome}</h2>
          <p>{iten.descricao}</p>
          <p>Serve: {iten.porcao}</p>
          <Button onClick={addToCart}  >Adicionar ao carrinho - {`R$${iten.preco}0`}</Button>
        </div>
      </StyledModal>
    </>
  );
};

export default Modal;

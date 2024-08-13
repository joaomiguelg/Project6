import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import CartIten from "../CartIten";
import { CartContainer, Overlay, StyledCart } from "./styles";
import { close } from "../../store/reducers/cart";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((ac, va) => {
      return (ac += va.preco)
    }, 0)
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <StyledCart>
        <div className="mainContainer">
          <ul>
            {items.map((item) => (
              <CartIten key={item.id} itens={item} />
            ))}
          </ul>
          <div className="priceContainer">
            <p>Valor Total:</p>
            <span>{formataPreco(getTotalPrice())}</span>
          </div>
          <button>Continuar com a Entrega</button>
        </div>
      </StyledCart>
    </CartContainer>
  );
};

export default Cart;

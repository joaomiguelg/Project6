import CartIten from "../CartIten";
import { CartContainer } from "./styles";

const Cart = () => {
  return (
    <CartContainer>
      <div className="mainContainer">
        <ul>
          <li>
            <CartIten />
          </li>
        </ul>
        <div className="priceContainer">
          <p>Valor Total:</p>
          <span>R$ 100,00</span>
        </div>
        <button>Continuar com a Entrega</button>
      </div>
    </CartContainer>
  );
};

export default Cart;

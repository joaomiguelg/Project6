import { useDispatch, useSelector } from "react-redux";
import { ConfirmContainer, Message, StyledConfirm } from "./styles";
import { close } from "../../store/reducers/cart";
import { close as closeConfirm } from "../../store/reducers/confirm";
import { RootReducer } from "../../store";
import { clear } from "../../store/reducers/cart";

type Props = {
    closePayment(): void
}

const Confirm = ({closePayment}: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.confirm);
    const orderId = useSelector((state: RootReducer) => state.orderId.orderId)
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
    dispatch(closeConfirm());
    dispatch(clear());
    closePayment()
  };


  return (
    <ConfirmContainer className={isOpen ? "is-open" : ""}>
      <StyledConfirm>
        <Message>
          <h3>Pedido realizado - {orderId} </h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <button onClick={closeCart}>Concluir</button>
        </Message>
      </StyledConfirm>
    </ConfirmContainer>
  );
};

export default Confirm;

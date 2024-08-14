import { Overlay, ShippingContainer, StyledShipping } from "../Shipping/styles";
import { Message } from "./styles";

const Confirm = () => {
  return (
    <ShippingContainer>
      <Overlay />
      <StyledShipping>
        <Message>
          <h3>Pedido realizado - ORDER_ID</h3>
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
          Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
          </p>
          <button>Concluir</button>
        </Message>
      </StyledShipping>
    </ShippingContainer>
  );
};

export default Confirm;

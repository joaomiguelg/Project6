import { Overlay, ShippingContainer, StyledShipping } from "./styles";

const Shipping = () => {
  return (
    <ShippingContainer>
      <Overlay />
      <StyledShipping>
        <h2>Entrega</h2>
        <form action="">
          <label htmlFor="name">Quem irá receber</label>
          <input type="text" id="name" />
          <label htmlFor="adress">Endereço</label>
          <input type="text" id="adress" />
          <label htmlFor="city">Cidade</label>
          <input type="text" id="city" />
          <div>
            <div className="cepNumber">
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" />
            </div>
            <div className="cepNumber">
              <label htmlFor="number">Número</label>
              <input type="text" id="number" />
            </div>
          </div>
          <label htmlFor="complemento">Complemento</label>
          <input type="text" id="complemento" />
          <div className="btns">
            <button type="submit" className="btn">
              Continuar com o pagamento
            </button>
            <button className="btn">Voltar para o Carrinho</button>
          </div>
        </form>
      </StyledShipping>
    </ShippingContainer>
  );
};

export default Shipping;

import { useFormik } from "formik";
import {  ShippingContainer, StyledShipping } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryData } from "../../store/reducers/delivery";

import { RootReducer } from "../../store";

type Props = {
    closeShipping(): void
    backToCart(): void
}



const Shipping = ({closeShipping, backToCart}: Props) => {

    const deliveryData = useSelector((state: RootReducer) => state.delivery)

    const dispatch = useDispatch()

    const form = useFormik({
        initialValues: deliveryData,
        onSubmit: (values) => {
            dispatch(setDeliveryData(values));
            closeShipping();
        }
    })

  return (
    <ShippingContainer>
      <StyledShipping>
        <h2>Entrega</h2>
        <form onSubmit={form.handleSubmit}>
          <label htmlFor="receiver">Quem irá receber</label>
          <input type="text" id="receiver" value={form.values.receiver} onChange={form.handleChange} onBlur={form.handleBlur} />
          <label htmlFor="address.description">Endereço</label>
          <input type="text" id="address.description" value={form.values.address.description} onChange={form.handleChange} onBlur={form.handleBlur} />
          <label htmlFor="address.city">Cidade</label>
          <input type="text" id="address.city" value={form.values.address.city} onChange={form.handleChange} onBlur={form.handleBlur} />
          <div>
            <div className="cepNumber">
              <label htmlFor="address.zipCode">CEP</label>
              <input type="text" id="address.zipCode" value={form.values.address.zipCode} onChange={form.handleChange} onBlur={form.handleBlur} />
            </div>
            <div className="cepNumber">
              <label htmlFor="address.number">Número</label>
              <input type="text" id="address.number" value={form.values.address.number} onChange={form.handleChange} onBlur={form.handleBlur}/>
            </div>
          </div>
          <label htmlFor="address.complement">Complemento</label>
          <input type="text" id="address.complement" value={form.values.address.complement} onChange={form.handleChange} onBlur={form.handleBlur} />
          <div className="btns">
            <button className="btn" type="submit" >
              Continuar com o pagamento
            </button>
            <button className="btn"  onClick={backToCart}>Voltar para o Carrinho</button>
          </div>
        </form>
      </StyledShipping>
    </ShippingContainer>
  );
};

export default Shipping;

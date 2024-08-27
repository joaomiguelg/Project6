import { useFormik } from "formik";
import { ShippingContainer, StyledShipping } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryData } from "../../store/reducers/delivery";
import * as Yup from "yup";

import { RootReducer } from "../../store";

type Props = {
  closeShipping(): void;
  backToCart(): void;
};

const Shipping = ({ closeShipping, backToCart }: Props) => {
  const deliveryData = useSelector((state: RootReducer) => state.delivery);

  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: deliveryData,
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      address: Yup.object({
        description: Yup.string().required("O campo é obrigatório"),
        city: Yup.string().required("O campo é obrigatório"),
        zipCode: Yup.string()
          .required("O campo é obrigatório")
          .matches(
            /^[0-9]{5}-[0-9]{3}$/,
            "O CEP deve estar no formato 12345-678"
          ),
        number: Yup.number()
          .required("O número é obrigatório")
          .positive("O número deve ser positivo")
          .integer("O número deve ser um valor inteiro"),
        complement: Yup.string().max(
          50,
          "O complemento pode ter no máximo 50 caracteres"
        ),
      }),
    }),
    onSubmit: (values) => {
      dispatch(setDeliveryData(values));
      closeShipping();
    },
  });

  return (
    <ShippingContainer>
      <StyledShipping>
        <h2>Entrega</h2>
        <form onSubmit={form.handleSubmit}>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            type="text"
            id="receiver"
            value={form.values.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.receiver && form.errors.receiver ? (
            <div className="error">{form.errors.receiver}</div>
          ) : null}
          <label htmlFor="address.description">Endereço</label>
          <input
            type="text"
            id="address.description"
            value={form.values.address.description}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.address?.description && form.errors.address?.description ? (
            <div className="error">{form.errors.address.description}</div>
          ) : null}
          <label htmlFor="address.city">Cidade</label>
          <input
            type="text"
            id="address.city"
            value={form.values.address.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.address?.city && form.errors.address?.city ? (
            <div className="error">{form.errors.address.city}</div>
          ) : null}
          <div>
            <div className="cepNumber">
              <label htmlFor="address.zipCode">CEP</label>
              <input
                type="text"
                id="address.zipCode"
                value={form.values.address.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.address?.zipCode && form.errors.address?.zipCode ? (
            <div className="error">{form.errors.address.zipCode}</div>
          ) : null}
            </div>
            <div className="cepNumber">
              <label htmlFor="address.number">Número</label>
              <input
                type="text"
                id="address.number"
                value={form.values.address.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.address?.number && form.errors.address?.number ? (
            <div className="error">{form.errors.address.number}</div>
          ) : null}
            </div>
          </div>
          <label htmlFor="address.complement">Complemento</label>
          <input
            type="text"
            id="address.complement"
            value={form.values.address.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.address?.complement && form.errors.address?.complement ? (
            <div className="error">{form.errors.address.complement}</div>
          ) : null}
          <div className="btns">
            <button className="btn" type="submit">
              Continuar com o pagamento
            </button>
            <button className="btn" onClick={backToCart}>
              Voltar para o Carrinho
            </button>
          </div>
        </form>
      </StyledShipping>
    </ShippingContainer>
  );
};

export default Shipping;

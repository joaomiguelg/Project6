import { useDispatch, useSelector } from "react-redux";
import { PaymentContainer, StyledPayment } from "./styles";
import { useFormik } from "formik";
import { setPaymentData } from "../../store/reducers/payment";
import { usePurchaseMutation } from "../../services/api";
import { PaymentType } from "../../store/reducers/types";
import { RootReducer } from "../../store";
import { clearDeliveryValues } from "../../store/reducers/delivery";
import { open } from '../../store/reducers/confirm'
import { setOrderId } from "../../store/reducers/orderId";
import * as Yup from "yup";


type Props = {
  backToEnd(): void;

};

const initialValues: PaymentType = {
  card: {
    name: "",
    number: "",
    code: 0,
    expires: {
      month: 0,
      year: 0,
    },
  },
};

const Payment = ({ backToEnd }: Props) => {
  const [purchase] = usePurchaseMutation();

  const deliveryData = useSelector((state: RootReducer) => state.delivery);
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
        card: Yup.object({
          name: Yup.string()
            .required('O nome no cartão é obrigatório'),
          number: Yup.string()
            .required('O número do cartão é obrigatório')
            .matches(/^[0-9]{16}$/, 'O número do cartão deve ter 16 dígitos'),
          code: Yup.number()
            .required('O CVV é obrigatório')
            .min(100, 'O CVV deve ter 3 dígitos')
            .max(999, 'O CVV deve ter 3 dígitos'),
          expires: Yup.object({
            month: Yup.number()
              .required('O mês de vencimento é obrigatório')
              .min(1, 'Mês inválido')
              .max(12, 'Mês inválido'),
            year: Yup.number()
              .required('O ano de vencimento é obrigatório')
              .min(new Date().getFullYear(), 'Ano inválido')
              .max(2100, 'Ano inválido'),
          }),
        }),
      }),
    onSubmit: async (values) => {
      dispatch(setPaymentData(values));
  
      try {
        const response = await purchase({
          delivery: deliveryData, // Dados de entrega
          payment: values, // Dados de pagamento
          products: items.map((item) => ({
            id: item.id,
            price: item.preco,
          })),
        });
  
        if (response.data) {
          dispatch(setOrderId(response.data.orderId));
        }
        dispatch(clearDeliveryValues());
        dispatch(open());
      } catch (error) {
        console.error("Erro ao processar o pagamento:", error);
       
      }
    },
  });


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
    <>
    <PaymentContainer>
      <StyledPayment>
        <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice())} </h3>
        <form onSubmit={form.handleSubmit}>
          <label htmlFor="card.name">Nome no Cartão</label>
          <input
            type="text"
            id="card.name"
            value={form.values.card.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
           {form.touched.card?.name && form.errors.card?.name ? (
            <div className="error">{form.errors.card.name}</div>
          ) : null}
          <div className="div1">
            <div className="div2">
              <label htmlFor="card.number">Número do Cartão</label>
              <input
                type="text"
                id="card.number"
                value={form.values.card.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.card?.number && form.errors.card?.number ? (
                <div className="error">{form.errors.card.number}</div>
              ) : null}
            </div>
            <div className="div2">
              <label htmlFor="card.code">CVV</label>
              <input
                type="text"
                id="card.code"
                value={form.values.card.code}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.card?.code && form.errors.card?.code ? (
                <div className="error">{form.errors.card.code}</div>
              ) : null}
            </div>
          </div>
          <div className="div1">
            <div className="div2">
              <label htmlFor="card.expires.month">Mes de Vencimento</label>
              <input
                type="text"
                id="card.expires.month"
                value={form.values.card.expires.month}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.card?.expires?.month && form.errors.card?.expires?.month ? (
                <div className="error">{form.errors.card.expires.month}</div>
              ) : null}
            </div>
            <div className="div2">
              <label htmlFor="card.expires.year">Ano de Vencimento</label>
              <input
                type="text"
                id="card.expires.year"
                value={form.values.card.expires.year}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.card?.expires?.year && form.errors.card?.expires?.year ? (
                <div className="error">{form.errors.card.expires.year}</div>
              ) : null}
            </div>
          </div>
          <div className="btns">
            <button type="submit">Finalizar Pagamento</button>
            <button onClick={backToEnd}>
              Voltar para a edição de endereço
            </button>
          </div>
        </form>
      </StyledPayment>
    </PaymentContainer>
    </>
    
  );
};

export default Payment;

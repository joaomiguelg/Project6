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

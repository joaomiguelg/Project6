import { Overlay } from "../Cart/styles"
import { PaymentContainer, StyledPayment } from "./styles"

const Payment = () => {
    return (
        <PaymentContainer>
            <Overlay />
            <StyledPayment>
                <h3>Pagamento - Valor a pagar 100</h3>
                <form>
                    <label htmlFor="cardName">Nome no Cartão</label>
                    <input type="text" id="cardName" />
                    <div className="div1">
                        <div className="div2">
                            <label htmlFor="cardNumber">Número do Cartão</label>
                            <input type="text" id="cardNumber" />
                        </div>
                        <div className="div2">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" id="cvv" />
                        </div>
                    </div>
                    <div className="div1">
                        <div className="div2">
                            <label htmlFor="mes">Mes de Vencimento</label>
                            <input type="text" id="mes" />
                        </div>
                        <div className="div2">
                            <label htmlFor="ano">Ano de Vencimento</label>
                            <input type="text" id="ano" />
                        </div>
                    </div>
                    <div className="btns">
                    <button>Finalizar Pagamento</button>
                    <button>Voltar para a edição de endereço</button>

                    </div>
                    
                </form>
            </StyledPayment>
        </PaymentContainer>
    )
}

export default Payment
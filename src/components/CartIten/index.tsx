import trashIcon from '../../assets/images/lixeira-de-reciclagem 1.png'
import imgProduct from '../../assets/images/28895a55942ffb290182da4c32ba645d.png'
import { StyledCartItem } from './styles'


const CartIten = () => {
    return (
        <StyledCartItem>
            <img src={imgProduct} alt="" />
            <div>
                <h4>{}</h4>
                <p>{}</p>
            </div>
            <span>
                <img src={trashIcon} alt="" />
            </span>
        </StyledCartItem>
    )
}
export default CartIten
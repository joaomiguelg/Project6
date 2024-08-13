import trashIcon from '../../assets/images/lixeira-de-reciclagem 1.png'
import { StyledCartItem } from './styles'
import { CardapioIten } from '../../pages/Home'
import { remove } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
    itens: CardapioIten
}

const CartIten = ({itens}: Props) => {

    const dispatch = useDispatch()

    const removeItem = () => {
        dispatch(remove(itens.id))
    }
    

    return (
        <StyledCartItem>
            <img src={itens.foto} alt="" />
            <div>
                <h4>{itens.nome}</h4>
                <p>{`R$${itens.preco}0`}</p>
            </div>
            <span onClick={() => removeItem()}>
                <img src={trashIcon} alt="" />
            </span>
        </StyledCartItem>
    )
}
export default CartIten
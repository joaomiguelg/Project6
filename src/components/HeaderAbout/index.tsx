import logo from '../../assets/images/logo.png'
import StyledHeaderAbout from './styles'

const HeaderAbout = () => (

    <StyledHeaderAbout>
        <h4>
            Restaurantes
        </h4>
        <img src={logo} alt="logo efood" />
        <p>0 produto no carrinho</p>
    </StyledHeaderAbout>


)

export default HeaderAbout
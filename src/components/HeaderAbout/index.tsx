import logo from '../../assets/images/logo.png'
import StyledHeaderAbout, { HeaderContainer } from './styles'

const HeaderAbout = () => (

    <StyledHeaderAbout>
        <HeaderContainer>
        <h4>
            Restaurantes
        </h4>
        <img src={logo} alt="logo efood" />
        <p>0 produto no carrinho</p>
        </HeaderContainer>
        
    </StyledHeaderAbout>


)

export default HeaderAbout
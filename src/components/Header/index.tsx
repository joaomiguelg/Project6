import { HeaderBar, Titles } from "./styles"
import logo from '../../assets/images/logo.png'

const Header = () => (
    <HeaderBar>
        <Titles>
            <img src={logo} alt="" />
            <h2>Viva experiencias gastronomicas <br /> no conforto da sua casa</h2>
        </Titles>
    </HeaderBar>
)

export default Header
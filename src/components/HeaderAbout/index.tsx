import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";
import { open } from '../../store/reducers/cart'
import { HeaderContainer, StyledHeaderAbout } from "./styles";
import { RootReducer } from "../../store";
import { Link } from "react-router-dom";

const HeaderAbout = () => {

    const dispatch = useDispatch()
    const {items}= useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }

  return (
    <StyledHeaderAbout>
      <HeaderContainer>
        <h4>Restaurantes</h4>
        <Link to={"/"}>
        <img src={logo} alt="logo efood" />
        </Link>
        <a onClick={openCart}>
        {items.length} - produto(s) no carrinho
        </a>
      </HeaderContainer>
    </StyledHeaderAbout>
  );
};

export default HeaderAbout;

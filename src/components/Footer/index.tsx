import { StyledFooter } from "./styles";
import logo from '../../assets/images/logo.png'
import facebookIcon from '../../assets/images/facebook-round-svgrepo-com 1.png'
import instaLogo from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import twitterLogo from '../../assets/images/twitter-2-svgrepo-com 1.png'

export const Footer = () => (
    <StyledFooter>
        
            <div className="container">
                <img src={logo} alt="logotipo efood" />
                <div className="icons">
                    <a href="">
                        <img src={instaLogo} alt="instagram icon" />
                    </a>
                    <a href="">
                        <img src={facebookIcon} alt="facebook icon" />
                    </a>
                    <a href="">
                        <img src={twitterLogo} alt="twitter icon" />
                    </a>
                </div>
            </div>
            <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado
            </p>
        

    </StyledFooter>
)
import { Footer } from "../../components/Footer";
import HeaderAbout from "../../components/HeaderAbout";
import Product from "../../components/Product";
import RestaurantHero from "../../components/RestaurantHero";
import { AboutContainer } from "../../styles";


const About = () => (
    <>
    <HeaderAbout />
    <RestaurantHero />
    <AboutContainer>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
    </AboutContainer>
    <Footer/>
    </>
)

export default About
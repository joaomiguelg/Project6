import imgHero from '../../assets/images/image 2.png'
import { Hero } from './styles'

const RestaurantHero = () => (
    <>
    <Hero>
        <img src={imgHero} alt="" />
        <div className="heroText">
            <h3>Italiana</h3>
            <h2>La Dolce Vita Trattoria</h2>
        </div>
    </Hero>
    
    </>
)

export default RestaurantHero
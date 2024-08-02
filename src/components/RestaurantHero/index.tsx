
import { Hero } from './styles'


export type Props = {
    capa: string,
    tipo: string,
    titulo: string
}

const RestaurantHero = ({ capa, titulo, tipo }: Props) => (
    <>
    <Hero>
        <img src={capa} alt="Capa Restaurante" />
        <div className="heroText">
            <h3>{tipo}</h3>
            <h2>{titulo}</h2>
        </div>
    </Hero>
    
    </>
)

export default RestaurantHero
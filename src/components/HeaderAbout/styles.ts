import styled from "styled-components";
import background from '../../assets/images/Vector.png'


const StyledHeaderAbout = styled.header`

background-image: url(${background}) ;
color: #E66767;

width: 100vw;
height: 186px;

display: flex;
align-items: center;
justify-content: center;

img {
    margin-left: 60px;
}

`

export const HeaderContainer = styled.div`

max-width: 1024px;
width: 80%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

`

export default StyledHeaderAbout
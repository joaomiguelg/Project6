import styled from "styled-components";
import background from '../../assets/images/Vector.png'


export const StyledHeaderAbout = styled.header`

background-image: url(${background}) ;
color: #E66767;

width: 100%;
height: 186px;

display: flex;
align-items: center;
justify-content: center;

img {
    margin-left: 60px;
}

`

export const HeaderContainer = styled.div`

max-width: 950px;
width: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

a {
    cursor: pointer;
}

`

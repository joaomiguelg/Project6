import styled from "styled-components";
import background from '../../assets/images/Vector.png'

export const HeaderBar = styled.header`

background-image: url(${background}) ;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

height: 384px;

`

export const Titles = styled.div`

display: flex;
flex-direction: column;
align-items: center; 
color: #E66767;
gap: 64px;


h2 {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: 36px;
}

`
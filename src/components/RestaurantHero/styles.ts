import styled from "styled-components";

export const Hero = styled.div`

width: 100vw;
height: 280px;

overflow: hidden;
position: relative;

-webkit-box-shadow: inset 0px 0px 162px 97px rgba(0,0,0,0.58);
-moz-box-shadow: inset 0px 0px 162px 97px rgba(0,0,0,0.58);
box-shadow: inset 0px 0px 162px 97px rgba(0,0,0,0.58);

display: flex;
align-items: center;
justify-content: center;




img {
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: -1;


}

.heroText {


color: white;

max-width: 1024px;
width: 80%;

display: flex;
flex-direction: column;
gap: 160px;


h3 {
    font-weight: lighter;
}



}


`
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledModal = styled.div`

span {
    position: absolute;
    top: 4px;
    right: 8px;

    color: white;
    
}

position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 1024px;
width: 80%;
height: 344px;
padding: 16px;

background-color: #B2000E;

display: flex;
flex-direction: row;
align-items: center;
gap: 16px;

display: none;

div {
    display: flex;
    flex-direction: column;
    gap: 24px;

    color: white;

    

    p {
    
    }
}

img {
    width: 280px;
    height: 280px;
}
`

export const Button = styled(Link)`

width: 218px;
height: 24px;

display: flex;
justify-content: center;
align-items: center;

font-size: 14px;

background-color: white;
color: #B2000E;

text-decoration: none;

`

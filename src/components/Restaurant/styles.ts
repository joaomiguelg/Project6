import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardRestaurant = styled.div`

width: 472px;
height: 398px;

border-radius: 16px;

box-shadow: 6px 6px 13px 1px rgba(0,0,0,0.68);
-webkit-box-shadow: 6px 6px 13px 1px rgba(0,0,0,0.68);
-moz-box-shadow: 6px 6px 13px 1px rgba(0,0,0,0.68);




`

export const ImgContainer = styled.div`

width: 100%;
height: 217px;
overflow: hidden;

border-top-right-radius: 16px;
border-top-left-radius: 16px;

position: relative;


.spans {
    position: absolute;

    display: flex;
    gap: 8px;
    margin: 16px 0;

    right: 16px;
    
    span {

        font-size: 12px;
        color: white;
        background-color: #B2000E;
        padding: 6px;

        border-radius: 8px;


    }
}



img {
    width: 100%;
    position: absolute;
    z-index: 0;
    
}

`

export const GeneralContainer = styled.div`

width: 100%;
padding: 8px;

display: flex;
flex-direction: column;
gap: 16px;


`

export const TitleContainer = styled.div`

display: flex;
justify-content: space-between;
align-items: center;


a {
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 8px;

    color: #B2000E;
}

h3 {
    color: #B2000E;
}

`
export const DescribeContainer = styled.div`

width: 100%;
display: flex;
flex-direction: column;
gap: 16px;

button {
    width: 82px;
    height: 24px;

    font-weight: bold;

    color: white;
    background-color: #B2000E;
    border: none;
    cursor: pointer;

    border-radius: 8px;

}

`

export const Button = styled(Link)`

text-decoration: none;
background-color: #B2000E;
border-radius:8px;
color: white;

display: flex;
justify-content: center;
align-items: center;

font-size: 14px;
width: 20%;
height: 24px;

`

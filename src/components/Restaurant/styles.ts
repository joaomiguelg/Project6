import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardRestaurant = styled.div`

width: 472px;
height: 398px;
border: 1px solid #E66767;
color: #E66767


`

export const ImgContainer = styled.div`

width: 100%;
height: 217px;
overflow: hidden;

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
        background-color: #E66767;
        padding: 6px;


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
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;

    color: #E66767
;
}

h3 {
    color: #E66767
;
}

`
export const DescribeContainer = styled.div`

width: 100%;
display: flex;
flex-direction: column;
gap: 16px;

max-height: 100%;

font-size: 14px;


button {

    width: 82px;
    height: 24px;

    font-weight: bold;

    color: white;
    background-color: #E66767
;
    border: none;
    cursor: pointer;


}

`

export const Button = styled(Link)`

text-decoration: none;
background-color: #E66767
;
color: white;

display: flex;
justify-content: center;
align-items: center;

font-size: 14px;
width: 20%;
height: 24px;

`

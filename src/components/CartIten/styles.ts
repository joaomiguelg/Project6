import styled from "styled-components";

export const StyledCartItem = styled.li`

width: 344px;
height: 100px;
background-color: #FFEBD9;
display: flex;
flex-direction: row;
gap: 8px;
padding: 8px;

img {
    width: 80px;
    height: 80px;
}

div {

    display: flex;
    flex-direction: column;
    gap: 16px;
    color: #E66767;

    h4 {
        font-size: 18px;
    }

    p {
        font-size: 14px;
    }
    
    
}

span {

    position: absolute;
    right: 20px;
    width: 16px;
    cursor: pointer;

    img {
        width: 16px;
        height: 16px;
    }
    
}


`
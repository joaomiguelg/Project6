import styled from "styled-components";

export const CartContainer = styled.aside`

background-color: #E66767;
width: 360px;
height: 100vh;
padding: 16px 8px;

position: fixed;
z-index: 1;
right: 0;

display: flex;
flex-direction: column;
align-items: center;


.mainContainer { 

    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    

    width: 100%;

    ul {
        


        margin: 0;
        padding: 0;
        list-style-type: none; 

        li {
            margin-bottom: 8px;
        }
    
    
    }



}

.priceContainer {

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 32px;

    width: 344px;

    p, span {
        font-size: 14px;
        color: white;

    }
    
}

button {
    width: 100%;
    background: #FFEBD9;
    color: #E66767;

}



`
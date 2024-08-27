import styled from "styled-components";

export const ShippingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const StyledShipping = styled.aside`

background-color: #E66767;
width: 360px;
height: 100vh;
padding: 16px 8px;

position: fixed;
z-index: 1;
right: 0;

display: flex;
flex-direction: column;
align-items: flex-start;

h2 {
    color: #FFEBD9;
    font-size: 16px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
    width: 100%;

    label {
        font-size: 14px;
        color: #FFEBD9;
    }

    input {
        height: 32px;
        width: 100%;

        background-color: #FFEBD9;
;
    }

    div {
        display: flex;
        gap: 8px;
        width: 100%;

        .cepNumber {

            display: flex;
            flex-direction: column;
        }

    }

    
}

.btns {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
}

.btn {
        height: 24px;
        color: #E66767;
        background-color: #FFEBD9;
        font-weight: 700 ;
        cursor: pointer;
    }

.error {
    color: black;
    font-size: 12px;
    
}

`
import styled from "styled-components";

export const PaymentContainer = styled.div`
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

export const StyledPayment = styled.aside`

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

h3 {
    color: #FFEBD9;
    font-size: 16px;
}



form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-top: 16px;

    label {
        font-size: 14px;
        color: #FFEBD9;
    }
    input {
        height: 32px;
        background: #FFEBD9;

    }


    .div1 {
        display: flex;
        flex-direction: row;
        gap: 16px;
        width: 100%;

    }

    .div2 {

        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;

    }

    .btns {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 16px;
    }
    button {
        height: 24px;
        color: #E66767;
        background: #FFEBD9;
        cursor: pointer;
        font-weight: 700;
    }
}

.error {
    color: black;
    font-size: 12px;
    
}
`
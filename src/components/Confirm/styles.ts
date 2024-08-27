import styled from "styled-components";


export const ConfirmContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const StyledConfirm = styled.aside`

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
`

export const Message = styled.div`

color:  #FFEBD9;
;

p {
    font-size: 14px;
    margin-top: 16px;
}

button {
    height: 24px;
    color: #E66767;
    background: #FFEBD9;
    width: 100%;
    margin-top: 16px;
    font-weight: 700;
    cursor: pointer;
}

`
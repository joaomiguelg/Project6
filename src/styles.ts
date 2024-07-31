import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    list-style: none;
    border: 0;

    font-family: Roboto, sans-serif;


}


`

export const Container = styled.main`

max-width: 1024px;
width: 100%;


margin: 80px auto;

display: flex; 
flex-wrap: wrap;

gap: 80px;


`
export const AboutContainer = styled.main`

max-width: 1024px;
width: 100%;
height: 75vh;

margin: 80px auto;

display: grid;
grid-template-columns: 33% 33% 33%;



`
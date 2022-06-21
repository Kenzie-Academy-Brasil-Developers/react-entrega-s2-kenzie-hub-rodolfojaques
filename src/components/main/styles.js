import styled from "styled-components";

export const PageMain = styled.main`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;

padding: ${({padding})=> padding}; 

width: 100vw;
max-width: 100vw;
min-height: 100vh;

`;

import styled from "styled-components";

export const ModalBase = styled.div`

width: 100%;
height: 100vh;

background-color: rgba(0,0,0,.75);

position: absolute;
top: 0;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

    header{
        color: #F8F9FA;
        background-color: #343B41;

        height: 2.6rem;
        width: 90%;

        display: flex;
        justify-content: space-around;
        align-items: center;

        border-radius: 5px;
    }

`;
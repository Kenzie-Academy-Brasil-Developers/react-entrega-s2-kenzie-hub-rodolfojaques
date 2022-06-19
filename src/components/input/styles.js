import styled from "styled-components";

export const InputForm = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: .2rem;
width: 100%;

    label{
        color: #F8F9FA;
        font-size: small;
    }

    input{
        height: 2rem;
        width: 100%;

        background-color: #343B41;
        border-style: none;
        border-radius: 5px;

        padding-left: .5rem;
        color: #F8F9FA;
        opacity: .5;

        &::placeholder{
            color: #F8F9FA;
            font-size: smaller;
        }

        &:hover{
            border: solid #F8F9FA;
        }
    }

`;
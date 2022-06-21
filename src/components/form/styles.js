import styled from "styled-components"

export const FormApp = styled.form`
border-radius: 5px;

width: 90%;
max-width: 320px;

display: flex;
flex-direction: column;
align-items: center;
padding: 2rem 1rem;
gap: 1.5rem;

background-color: #212529;

    h4{
        font-weight: bolder;
        color: #F8F9FA;
    }

    span{
        color: #868E96;
    }

    .div-input{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: .2rem;
        width: 100%;
    }

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

    select{
        height: 2rem;
        width: 100%;

        background-color: #343B41;
        border-style: none;
        border-radius: 5px;

        padding-left: .5rem;
        color: #F8F9FA;
        opacity: .5;
    }
`;
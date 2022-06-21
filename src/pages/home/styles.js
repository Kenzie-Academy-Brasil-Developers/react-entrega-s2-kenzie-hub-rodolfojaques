import styled from "styled-components";

export const DivStyle = styled.div`

color: #F8F9FA;

display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;

width: 100%;
height: 80vh;

    button{
        &:hover{
            background-color: #343B41;
            border: solid #F8F9FA;   
        }     
    }

    .div1{
        width: 90%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        gap: 1.5rem;
        
        @media(min-width: 770px){
            flex-direction: row;
            align-items: center;
        }
    }

    .div2{
        width: 90%;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    hr{
        width: 100%;
        color: #212529;
        opacity: .1;
    }

    ul{
        width: 100%;
        max-height: 40vh;
        padding: 0 .7rem;

        overflow-y: auto;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        li{
            border-radius: 5px;
            background-color: #121214;
            padding: .6rem;

            min-height: 40px;
            width: 100%;

            display: flex; 
            justify-content: space-between;
            align-items: center;
            gap: .5rem;
            
            &:hover{
                cursor: pointer;
                background-color: #343B41;
                border: solid #F8F9FA;
            }
        }

        li h4{
            font-size: .7rem;
        }

        li span{
            font-size: .6rem;
        }
    }

    form{
        @media(min-width: 770px){
            max-width: 700px;
        }
    }

`;
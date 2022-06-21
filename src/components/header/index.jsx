import { Button } from "../button";
import { HeaderMain } from "./styles";

import logo from '../../assets/Logo.png'

export function Header({nameButton = "Voltar", onclick}){

    return(
        <HeaderMain>
              <img src={logo} alt='Logo da Kenzie Hub'/>
              <Button 
              onclick={onclick}
              nameButton={nameButton}
              backcolor='#212529' 
              divSize= "20%"
              sizeX="1.5rem"
              size='3rem' />
        </HeaderMain>
    )
}
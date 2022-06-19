import { Button } from "../button";
import { HeaderMain } from "./styles";

import logo from '../../assets/Logo.png'

export function Header(){

    return(
        <HeaderMain>
              <img src={logo} alt='Logo da Kenzie Hub'/>
              <Button nameButton="Voltar" divSize="35%" backcolor='#212529' size='5rem' />
        </HeaderMain>
    )
}
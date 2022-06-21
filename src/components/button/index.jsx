import { ButtonForm } from "./styles";

export function Button({onclick, type, nameButton, backcolor="#FF577F",size = "90%", sizeX="2rem", divSize = "100%"}){

    return(
        <ButtonForm backcolor={backcolor} size={size} divSize={divSize} sizeX={sizeX}>
            <button type={type} onClick={onclick}>
                {nameButton}
            </button>
        </ButtonForm>
    )
}
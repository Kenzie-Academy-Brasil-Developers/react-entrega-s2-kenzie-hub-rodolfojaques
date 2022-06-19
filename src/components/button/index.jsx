import { ButtonForm } from "./styles";

export function Button({nameButton,backcolor="#FF577F",size = "90%", divSize = "100%"}){

    return(
        <ButtonForm backcolor={backcolor} size={size} divSize={divSize}>
            <button>
                {nameButton}
            </button>
        </ButtonForm>
    )
}
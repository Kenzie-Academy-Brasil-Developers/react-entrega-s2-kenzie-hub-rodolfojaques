import { InputForm } from "./styles";


export function Input({type="text",placeholder="...", labelTxt="label"}){

    return(
        <InputForm>
            <label>{labelTxt}</label>
            <input type={type} placeholder={placeholder}/>                  
        </InputForm>
    )
}
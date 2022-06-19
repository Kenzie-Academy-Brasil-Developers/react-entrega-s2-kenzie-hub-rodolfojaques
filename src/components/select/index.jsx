import { SelectForm } from "./styles";

export function Select({labelSelect}){

    return (
        <SelectForm>
            <label>{labelSelect}</label>
            <select name="modulo" id="modulo">
                <option value="primeiro-modulo">Primeiro módulo</option>
                <option value="segundo-modulo">Segundo módulo</option>
                <option value="terceiro-modulo">Terceiro módulo</option>                
            </select>
        </SelectForm>
    )
}
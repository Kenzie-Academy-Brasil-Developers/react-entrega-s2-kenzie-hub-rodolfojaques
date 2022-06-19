import { PageMain } from "./styles";

export function Main({children, padding = "0 0 0 0"}){

    return(
        <PageMain padding={padding}>
            {children}
        </PageMain>
    )
}
import { BtnAcceso } from "../atomos/BtnAcceso"
import { BtnRegistrarse } from "../atomos/BtnRegistrarse"
export function OpcionAoR(){
    return(
        <div className = "Opboton">
            <BtnAcceso></BtnAcceso>
            <BtnRegistrarse></BtnRegistrarse>
        </div>
    )
}
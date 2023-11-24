import { BtnAcceso } from './BtnAcceso'
import { BtnRegistrarse } from './BtnRegistrarse'
import './stylecomponents/OpcionAoR.css'
export function OpcionAoR(){
    return(
        <div className = "Opboton">
            <BtnAcceso></BtnAcceso>
            <BtnRegistrarse></BtnRegistrarse>
        </div>
    )
}
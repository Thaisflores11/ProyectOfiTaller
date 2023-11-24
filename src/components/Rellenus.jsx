import React from "react"
import { Usuario } from "./Usuario"
import { Contrasenia } from "./Contrasenia"
import { Forgcont } from "./Forgcont"
export function Rellenus(){
    return(
        <div>
        <Usuario/>
        <Contrasenia/>
        <Forgcont></Forgcont>
        </div>
    
    )
}
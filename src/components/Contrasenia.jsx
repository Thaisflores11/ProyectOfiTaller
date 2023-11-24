import React from "react"
export function Contrasenia(){
    return(
        <div className = "input-contenedor">
            <img src="../public/candado.svg" alt="" />
            <input type="password" required />
            <label htmlFor="">Contraseña</label>
        </div> 
    )
}

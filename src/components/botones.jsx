import React from 'react'
import './stylecomponents/barraNavegaciones.css'
import { navegacion } from '../assets/navegacion';
function Botones() {

  return (
    <>
      <a href="#" className="nav-link">
        <img src={navegacion[0].inicio} id="Inicio" />
      </a>
      <a href="#" className="nav-link">
        <img src={navegacion[0].menu} id="Menu" />
      </a>
      <a href="#" className="nav-link-3">
        <img src={navegacion[0].sucursales} id="Sucursales"  />
      </a>
      <a href="#" className="nav-link">
        <img src={navegacion[0].comentarios} id="Comentarios"  width="62" height="42"/>
      </a>
    </>
  )
}

export default Botones;
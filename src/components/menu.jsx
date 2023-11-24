import { useState } from 'react'
import './stylecomponents/previewPasteles.css'

import ContenedorPasteles from './contenedorPastelesPrev';


function Menu () {

  return (
    <>
    <div className="scroll-box">
        <ContenedorPasteles />
    </div>
    </>
  )
}

export default Menu;
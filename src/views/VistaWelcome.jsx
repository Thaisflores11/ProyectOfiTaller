import React from 'react'
import Logosito from '../components/logosito'
import LogoGe from '../components/logoGe'
import ButtonW from '../components/buttonW'
import './stylesviews/Welcome.css'
function VistaWelcome() {
  return (
    <>
        <Logosito />
        <div className='divo'>
            <ButtonW />
        </div>
        <secim className='secim'>
            <LogoGe />
        </secim>
      
      
    </>
  )
}

export default VistaWelcome

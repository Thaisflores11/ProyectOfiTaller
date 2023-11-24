import { useState } from 'react'
import './App.css'
import Welcomee from './views/VistaWelcome'
import Homee from './views/VistaHome'

import BarraNavegaciones from './components/barraNavegaciones'
import Ubicaciones from './components/ubicaciones'
import Menu from './components/menu'

import VistaPastel from './views/VistaPastel1'

//import Welcomee from './views/VistaWelcome'
import { Rellenus } from './components/Rellenus'
import {OpcionAoR} from  './components/OpcionAoR'
//import Welcomee from './views/VistaWelcome
import Sucursales from './views/sucursales'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Sucursales/>
  
    </>
  )
}

export default App

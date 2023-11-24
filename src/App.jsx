import { useState } from 'react'
import './App.css'
import Welcomee from './views/VistaWelcome'
import Homee from './views/VistaHome'

import BarraNavegaciones from './components/barraNavegaciones'
import Ubicaciones from './components/ubicaciones'
import Menu from './components/menu'

import VistaPastel from './views/VistaPastel1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ubicaciones />
      <Welcomee />
      
      
    </>
  )
}

export default App

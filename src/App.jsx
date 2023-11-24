import { useState } from 'react'
import './App.css'
//import Welcomee from './views/VistaWelcome'
import { Rellenus } from './components/Rellenus'
import {OpcionAoR} from  './components/OpcionAoR'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OpcionAoR/>
      <Rellenus />
    </>
  )
}

export default App

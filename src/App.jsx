import { useState } from 'react'
import './App.css'
import Welcomee from './views/VistaWelcome'
import VistaHome from './views/VistaHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcomee />
      <VistaHome/>
    </>
  )
}

export default App

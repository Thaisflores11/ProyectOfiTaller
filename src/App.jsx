import { useState } from 'react'
import './App.css'
import Welcomee from './views/VistaWelcome'
import Homee from './views/VistaHome'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homee />
    </>
  )
}

export default App

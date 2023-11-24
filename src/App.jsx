import { useState } from 'react'
import './App.css'
import Welcomee from './views/VistaWelcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcomee />
    </>
  )
}

export default App

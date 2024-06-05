import { useState } from 'react'
import './App.css'
import Cronometro from "./components/Cronometro"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cronometro />
    </>
  )
}

export default App

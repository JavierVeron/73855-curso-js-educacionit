import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Curso from './Curso'
import Logo from './Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo />
      <h1>Educación IT</h1>
      <Curso />
      <Curso />
      <Curso />
    </>
  )
}

export default App

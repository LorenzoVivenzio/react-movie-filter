import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import film from './components/filmList'
import "bootstrap/dist/css/bootstrap.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <h1 className='text-center'>Film</h1>
    </header>

  
    </>
  )
}

export default App

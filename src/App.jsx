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
      <div className="container">
        <header className='d-flex justify-content-between mt-3 mb-3'>
          <h1>Film</h1>
          <nav class="navbar ">
            <div class="container-fluid">
              <form 
              class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button 
                class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </header>



        <div className="row">
          {film.map((film, index) => {
            return (
              <div className="col-3 border mt-3 me-1">
                <h2>{film.title}</h2>
                <p>{film.genre}</p>
              </div>
            )
          }
          )}
        </div>
      </div>

    </>
  )
}

export default App

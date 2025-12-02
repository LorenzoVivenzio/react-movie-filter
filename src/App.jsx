import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import films from './components/filmList'
import "bootstrap/dist/css/bootstrap.css"

function App() {
  const [search, setSearch] = useState("")
  const [filtedArray, setFiltedArray] = useState(films)

  useEffect(() => {
    const newArray = films.filter((film) => film.genre.includes(search));
    setFiltedArray(newArray);
  }, [search])

  return (
    <>

      <header className='d-flex justify-content-evenly pt-3 pb-3 bg-primary-subtle'>
        <h1>Film</h1>
        <nav className="navbar ">
          <div className="container-fluid">

            <select
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="form-select"
              aria-label="Default select example">
              <option selected>Genere</option>
                  <option selected>Romantico</option>
                  <option selected>Thriller</option>
                  <option selected>Azione</option>
                  <option selected>Fantascienza</option>


            </select>
          </div>
        </nav>
      </header>


      <div className="container">
        <div className="row">
          {filtedArray.map((film, index) => {
            return (
              <div key={index}
                className="col-3 border mt-3 me-1">
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

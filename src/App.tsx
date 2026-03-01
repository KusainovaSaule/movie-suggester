import { useState } from 'react'
import './App.css'
import { movies } from './movies-data.ts'

const test = 'hello';
test = 'bye';

function App() {
  const [currentMovie, setCurrentMovie] = useState<null | typeof movies[0]>(null)

  const getRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * movies.length)
    setCurrentMovie(movies[randomIndex])
  }

  return (
    <div className="container">
      <h1>Что посмотреть сегодня?</h1>
      
      <button onClick={getRandomMovie} className="choose-button">
        Выбрать фильм
      </button>

      {currentMovie && (
        <div className="movie-card">
          <h2 className="movie-title">{currentMovie.title}</h2>
          <img 
            src={currentMovie.image} 
            alt={currentMovie.title}
            className="movie-image"
          />
        </div>
      )}
    </div>
  )
}

export default App
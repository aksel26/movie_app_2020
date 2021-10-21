import React, { useEffect, useState } from "react"

import PropTypes from "prop-types"
import axios from "axios"
import Movie from "../components/movie"
import "./Home.css"

function Home() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
      .then((res) => {
        setMovies(res.data.data.movies)
      })
    setIsLoading(false)
  })

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading..</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genre={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Home

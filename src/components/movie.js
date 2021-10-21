import React from "react"
import PropTypes from "prop-types"
import "./Movie.css"
import { Link } from "react-router-dom"

function Movie({ id, year, title, summary, poster, genre }) {
  return (
    // <Link to={{
    //     pathname:`/movie/${id}`,
    //     state:{
    //         year:year,
    //         title:title,
    //         summary,
    //         poster,
    //         genre
    //     }
    // }}
    // >
    <div className="movie" style={{ borderRadius: "20px" }}>
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year: year,
            title: title,
            summary,
            poster,
            genre,
          },
        }}
        style={{ textDecoration: "none" }}
      >
        <img src={poster} alt={title} title={title} />

        <div className="movies_data" style={{ color: "#333" }}>
          <h3 className="movie__title" style={{ fontWeight: "700" }}>
            {title}
          </h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie_genres"></ul>
          {genre.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
          <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
      </Link>
    </div>
  )
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie

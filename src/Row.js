import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {

    axios.get(fetchUrl)
      .then(response => {
        setMovies(response.data.results)
        return response;
      })
      .catch(err => console.log("faced this error when fetching the movies: ", err))


  }, [fetchUrl]); //run the useEffect body every time the fetchUrl array got changed [whenever we change the fetchUrl property of the Row tag in the App.js]

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
    controls: false,
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name) //search for the movie
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row__posters'>
        {
          movies.map((movie, index) => (
            <img
              key={index}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              alt={movie.name}
            />
          ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl.toString()} opts={opts} />}
      </div>
    </div>
  )
}

export default Row;
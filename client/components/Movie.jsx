import React, { Component } from 'react';
import '../styles.css';

function Movie (props) {
  return (
  <div className="movie">
    <img className="movie-poster" src = {props.poster}/>
    <h1 className="movie-title"> {props.title} </h1>
    <h2 className="movie-year"> {props.year} </h2>
    <p className="movie-description"> {props.description} </p>
  </div>
  )
}

export default Movie;
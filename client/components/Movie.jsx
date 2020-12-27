import React, { Component } from 'react';
import '../styles.css';

function Movie (props) {
  return (
  <div class="movie">
    <img class="movie-poster" src = {props.poster}/>
    <h1 class="movie-title"> {props.title} </h1>
    <h2 class="movie-year"> {props.year} </h2>
    <p class="movie-description"> {props.description} </p>
  </div>
  )
}

export default Movie;
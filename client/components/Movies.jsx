import React, { Component } from 'react';
import '../styles.css';
import Movie from './Movie.jsx'

class Movies extends Component {
  constructor(props) {
    super(props);
  }

  // component did mount
    // send request to /movies/id/api, which responds back with array of 15 movie objects. 
    // set state.movies to be this array

  // 
  render() {
    // using state.movies, create array of Movie components 

    const title = 'Jaws';
    const poster = 'https://images-na.ssl-images-amazon.com/images/I/718Hr%2BVKZ4L._AC_SL1500_.jpg';
    const description = 'In the film, a man-eating great white shark attacks beachgoers at a summer resort town, prompting police chief Martin Brody (Roy Scheider) to hunt it with the help of a marine biologist (Richard Dreyfuss) and a professional shark hunter (Robert Shaw).';
    const year = '1975';

    return (
      <div id="movies">
        <Movie title={title} poster={poster} description={description} year={year}/>
        <Movie title={title} poster={poster} description={description} year={year}/>
      </div>
    )
  }
}

export default Movies;
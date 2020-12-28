import React, { Component } from 'react';
import '../styles.css';
import Movie from './Movie.jsx'

class Movies extends Component {
  constructor(props) {
    super(props);
    // state
      // movies array
      // votes array
  }

  // component did mount. Using React Router, this is only called the first time you render Movies.
  // not called again if you refresh page or go to a different /movies/id route. 
  componentDidMount() {
    // send request to /movies/id/api, which responds back with array of 15 movie objects. 
    console.log('component did mount!');
    // const currentUrl = window.location.href + "/api";
    // console.log(currentUrl);
    fetch('/api')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log('ERROR: error occurred while getting movie data from server.'))
    // set state.movies to be this array
    // set fetched to be true
  }

  // handleSubmit
    // check that all movies received vote
    // send post request with votes array
    // gray out the submit button
    // show Everyone Finished? button

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
        <Movie title={title} poster={poster} description={description} year={year}/>
        {/* submit votes button. onclick = handleSubmit */}
      </div>
    )
  }
}

export default Movies;


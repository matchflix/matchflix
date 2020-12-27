import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import Landing from './Landing.jsx';
import Movie from './Movie.jsx';


class App extends Component {
    constructor(props) {
      super(props);
    }
    render() {
     const title = 'Jaws';
     const poster = 'https://images-na.ssl-images-amazon.com/images/I/718Hr%2BVKZ4L._AC_SL1500_.jpg';
     const description = 'In the film, a man-eating great white shark attacks beachgoers at a summer resort town, prompting police chief Martin Brody (Roy Scheider) to hunt it with the help of a marine biologist (Richard Dreyfuss) and a professional shark hunter (Robert Shaw).';
     const year = '1975';
     return(
       <div >
         <Landing />
         <Movie title={title} poster={poster} description={description} year={year}/>
       </div>
     );
    }
  }

export default App;

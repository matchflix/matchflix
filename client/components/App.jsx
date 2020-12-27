import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import Landing from './Landing.jsx';
import Movies from './Movies.jsx';
import '../styles.css';

class App extends Component {
    constructor(props) {
      super(props);
    }
    render() {
     return(
       <div >
         <h1>Matchflix</h1>
         <Landing />
         <Movies />
       </div>
     );
    }
  }

export default App;

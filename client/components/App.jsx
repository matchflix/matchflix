import React, { Component } from 'react';
import Landing from './Landing.jsx';
import Movies from './Movies.jsx';
import '../styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
    constructor(props) {
      super(props);
    }
    render() {
     return(
       <Router>
          <div id="main">
            <h1>Matchflix</h1>
              <Link to='/movies/123'>Movies</Link>
              <Switch>
                <Route exact path='/'>
                  <Landing />
                </Route>
                <Route path='/movies'>
                  <Movies />
                </Route>
              </Switch>
            </div>
       </Router>
     );
    }
  }

export default App;

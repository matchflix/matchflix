const pool = require('./model.js');
const fetch = require('node-fetch');
// declare controller object to add methods to below
const controller = {};


/*
  SESSION CONTROLLERS
*/

// add middleware to generate user ID
controller.generateSessionID = (req, res, next) => {
  try {
    // generate ID
    const ID = Math.floor(Math.random() * 100);
    // save to res.locals
    res.locals.id = ID;
    // next 
    next();
  } catch(err) {
    console.log(err)
  }
}

controller.saveInDb = (req, res, next) => {
  try {
    // write out SQL command to save session ID from res.locals and genre from req.body
    const ID = res.locals.id;
    const genre = req.body.genre;
    const userDataQuery = `INSERT INTO public.user_session (session_id, genre) VALUES ('${ID}', '${genre}');`
    pool.query(userDataQuery).then((result) => {
      next();
    })
    .catch(err => {
      console.log('Could not save data: ', err)
    })
  } catch(err) {
    console.log(err);
  }
}

// add middleware to generate URL
controller.generateURL = (req, res, next) => {
  try {
    // use the id stored in res.locals to generate a URL for users
    const URL = `http://localhost:3000/movies/${res.locals.id}`
    // store this url in res.locals
    res.locals.url = URL;
    next();
  } catch(err) {
    console.log(err);
  }
}

/*
  MOVIE CONTROLLERS

  fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));
*/

controller.getGenreIds = (req, res, next) => {
  try{
    const requestString = "https://api.themoviedb.org/3/genre/movie/list?api_key=1643f8404f9e985436f04ff6498dd761&language=en-US"
    fetch(requestString)
      .then(response => response.json())
      .then(data => {
        res.locals.genres = data.genres;
        return next();
      })
  } catch(err) {
    console.log('could not get from API: ', err)
  }
}

controller.getGenreFromDB = (req, res, next) => {

}

controller.getMovieIds = (req, res, next) => {
  try {
    const requestURL = "https://api.themoviedb.org/3/discover/movie?api_key=1643f8404f9e985436f04ff6498dd761&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18";
    fetch(requestURL)
    .then(response => response.json())
    .then(data => {
      res.locals.movies = data;
      return next();
    })
  } catch (err) {
    console.log('could not get movie from API:', err)
  }
}

controller.getMovieImages = (req, res, next) => {

}

module.exports = controller;
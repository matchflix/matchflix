const pool = require('./model.js');
const unirest = require('unirest');
// declare controller object to add methods to below
const controller = {};


/*
  SESSION CONTROLLERS
*/

// add middleware to generate user ID
controller.generateSessionID = (req, res, next) => {
  try {
    // generate a MORE UNIQUE ID
    const ID = Math.floor(Math.random() * 1000000);
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
    console.log(req.body.genreId)
    const genre = req.body;
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

controller.getGenreFromDB = (req, res, next) => {
  // query data base for the genre associated with current group's ID
}


controller.getMovieIds = (req, res, next) => {

  const api = unirest("GET", "https://unogsng.p.rapidapi.com/search");

  api.query({
    // cant get API to return the movies I want
    // can only get 3 or 4 movies
    //"genrelist": "117",
    "start_year": "2010",
    "orderby": "rating",
    "audiosubtitle_andor": "and",
    "limit": "20",
    "subtitle": "english",
    "countrylist": "78,46",
    "audio": "english",
    "country_andorunique": "unique",
    "offset": "0",
    "end_year": "2020"
  });

  api.headers({
    "x-rapidapi-key": "28101c0940mshff52c3835fd444ep17aa5cjsne499e7e090a3",
    "x-rapidapi-host": "unogsng.p.rapidapi.com",
    "useQueryString": true
  });


  api.end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log('movies fetched from API: ', res.body);
    return next();
  });
}



module.exports = controller;
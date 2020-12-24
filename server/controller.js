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

controller.getGenreFromDB = (req, res, next) => {
  // query data base for the genre associated with current group's ID
}

controller.getMovieIds = (req, res, next) => {
  try {
    // fetch movie images and movie data from External API
    fetch(`https://unogsng.p.rapidapi.com/search?start_year=1972&orderby=rating&audiosubtitle_andor=and&limit=100&subtitle=english&countrylist=78%2C46&audio=english&country_andorunique=unique&offset=0&end_year=2019`, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "28101c0940mshff52c3835fd444ep17aa5cjsne499e7e090a3",
		    "x-rapidapi-host": "unogsng.p.rapidapi.com",
	    }
    })
    .then(response => {
	    console.log(response);
    })
    .catch(err => {
	    console.error(err);
    });
  } catch(err) {
    console.log('could not get movie from API:', err)
  }
}



module.exports = controller;
const express = require('express'); 
const pool = require('./model.js');
const fetch = require('node-fetch');

// declare controller object to add methods to below
const controller = {};


/*
  SESSION CONTROLLERS
*/

// generate user ID for this group's session
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

// SQL command to save session ID from res.locals and genre from req.body in the user_session SQL table
controller.saveInDb = (req, res, next) => {
  try {
    const ID = res.locals.id;
    // Have the front send send over just the genre ID instead of the genre as a string for easier API querying
    const genre = req.body;
    const userDataQuery = `INSERT INTO public.user_session (session_id, genre) VALUES ('${ID}', '${genre}');`
    pool.query(userDataQuery)
      .then((result) => {
        next();
      })
      .catch(err => {
        console.log('Could not save data: ', err)
      })
  } catch(err) {
    console.log(err);
  }
}

// generate the URL for other user's to join this session
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
  MOVIE MIDDLEWARE
*/

// query data base for the genre ID associated with current group's ID
controller.getGenre = (req, res, next) => {
  const id = req.params.id;
  try {
    const dataQuery = `SELECT genre FROM user_session WHERE session_id=${id}`;
    pool.query(dataQuery)
    .then((response) => {
      res.locals.genreID = response;
      return next();
    })
  } catch(err) {
    console.log(err);
  };
}

// fetch movie title, synopsis, and image from the external API
controller.getMovies = (req, res, next) => {
  // only 15 movies
  const genreID = res.locals.genreID;
  fetch(`https://unogsng.p.rapidapi.com/search?newdate=2010-01-01&genrelist=${genreID}&start_year=2010&orderby=rating&limit=20&subtitle=english&countrylist=78%2C46&audio=english&end_year=2020`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "28101c0940mshff52c3835fd444ep17aa5cjsne499e7e090a3",
		"x-rapidapi-host": "unogsng.p.rapidapi.com"
	}
  })
  .then((response) => response.json())
  .then((data) => {
    const movies = {};
    data.results.forEach(el => {
      movies[el.title] = {
        year: el.year,
        image: el.img,
        description: el.synopsis,
      }
    });
    res.locals.movies = movies;
    return next();
  })
  .catch(err => {
    console.error(err);
  })
}


/*
  RESULT MIDDLEWARE
*/

// once all users finish, retrieve user data from the movie table in DB
  // conditional so that if a user goes to the result route and not all data is collected, it redirects them to a waiting room page
  // SQL query for above data

// calculate the winning movie based off retrieved data and send back to front end



module.exports = controller;
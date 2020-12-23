const pool = require('./model.js');

// declare controller object to add methods to below
const controller = {};

// add middleware to generate user ID
controller.generateSessionID = (req, res, next) => {
  try {
    // generate a MORE UNIQUE ID
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


module.exports = controller;
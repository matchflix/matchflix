const express = require('express'); 
const path = require('path');
// require in controller
const controller = require('../controller');
const router = express.Router();

/*
  This route connects to the 'unogsNG' API, 
  making a request using the genre ID.  
  Refers to DB for the genre ID associated with 
  user session. 
*/

// get request to API for movie data
router.get('/:id/api', 
  controller.getGenre,
  controller.getMovies,
  controller.addMovieData,
  (req, res) => {
    // send images back here
    res.status(200).json(res.locals.movies);
})

// post request for client to send each user's votes
router.post('/:id', 
  (req, res) => {
  console.log(req.params.id)
  // data from user input
  console.log(req.body.votes)
  res.status(200).end();
})

// serve html page for react router
router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
})

  

module.exports = router;
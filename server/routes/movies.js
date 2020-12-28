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
  (req, res) => {
    // send images back here
    res.status(200).json({ movie: 'test' });
})

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
})

// post request from client to record user data from movie page
  // we want this data to look like this:
  

module.exports = router;
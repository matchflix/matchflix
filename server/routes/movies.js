const express = require('express'); 
const router = express.Router();
// require in controller
const controller = require('../controller');


/*
  This route connects to the 'TMBD' API, 
  making a request using the genre and genre ID.  
  Refer to DB for the genre associated with 
  user session. 
*/

// recieve GET from frontend
router.get('/movies/:id', 
  // make GET to API for genre IDS
  controller.getGenreIds,
  // Fetch genre string from DB and find corresponding ID from res.locals
  //controller.getGenreFromDB,
  // Use genre ID to make API call for movie IDS
  controller.getMovieIds,
  // Make API call for config info
  // controller.getMovieImages,
  (req, res) => {
    console.log(res.locals)
    // send images back here
    res.status(200).end();
})





module.exports = router;
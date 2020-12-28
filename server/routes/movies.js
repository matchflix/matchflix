const express = require('express'); 
// require in controller
const controller = require('../controller');
const router = express.Router();



/*
  This route connects to the 'TMBD' API, 
  making a request using the genre and genre ID.  
  Refer to DB for the genre associated with 
  user session. 
*/

// recieve GET from frontend
router.get('/movies/:id', 
  controller.getGenre,
  // Use genre ID to make API call for movie IDS
  controller.getMovies,
  (req, res) => {
    // send images back here
    res.status(200).send(res.locals.movies);
})





module.exports = router;
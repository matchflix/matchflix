const express = require('express'); 
// require in controller
const controller = require('../controller');
const router = express.Router();


/*
  This route will he activated when the frontend sends
  the genre in a POST on the onClick associated with 
  the start session button
*/

router.post('/', 
  controller.generateSessionID, 
  controller.saveInDb, 
  controller.generateURL, 
  (req, res) => {
    /* 
      redirect either to a success page or the movies page
      send the url with the post response as well
    */
    res.status(200).json(res.locals.url);
});

module.exports = router;
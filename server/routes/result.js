const express = require('express'); 
// require in controller
const controller = require('../controller');
const router = express.Router();

// get request from client to fetch result
router.get('/:id',
  //controller.calculateWinner,
  controller.winningMovieData,
  (res, req) => {
    res.statusCode(200).json();
  }
)

// serve html page
router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
})

module.exports = router;
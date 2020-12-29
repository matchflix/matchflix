const express = require('express'); 
// require in controller
const controller = require('../controller');
const router = express.Router();

// get request from client to fetch result
router.get('/:id',
  //controller.calculateWinner,
  controller.winningMovieData,
  (req, res) => {
    res.status(200).json("https://lh3.googleusercontent.com/proxy/mwCmkBj-0qNXJIPHLRZKGr3JLnz0nDwsVAqvQ-372loCDY0JhnQKs1FTB9QVJARnakP4TepVY1Z6-EzeME3THFREVYxjJvOZdY6qIlOanFv8aK1faBR5WYWtKbCgefjweRqq5tSZlA");
  }
)

// serve html page
router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
})

module.exports = router;
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


const session = require('./routes/session');
const movies = require('./routes/movies');
const result = require('./routes/result');


// parse request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/assets', express.static(path.join(__dirname, '../client/assets')));

// added this because movies page calls GET http://localhost:3000/movies/dist/bundle.js
// but this gets the production bundle.js instead of the development bundle.js 
app.use('*/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
})

// route associated with our landing page and session generation
app.use('/startsession', session);

// route to serve our second page, which will display and collect movie data
app.use('/movies', movies);

//route to serve our result page once users have inputted preferences
app.use('/result', result)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


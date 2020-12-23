const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


const session = require('./routes/session')
const movies = require('./routes/movies')

// import controller
// const controller = require('./controller');

// parse request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
})

// route associated with our landing page session generation
app.use('/startsession', session);

// create route to render second page, make sure ID matches. 
app.get('/movies/:id', movies);

// in production mode, we need to serve the index.html page
// app.get('/', (req, res) => {
//   return res.sendFile(path.resolve(__dirname, '../client/index.html'));
// })

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


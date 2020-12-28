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
// TODO: added this because movies page calls GET http://localhost:3000/movies/dist/bundle.js
// but this gets the production bundle.js instead of the development bundle.js 
app.use('*/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
})

// route associated with our landing page and session generation
app.use('/startsession', session);

// // route to serve our second page, which will display and collect movie data
app.use('/movies', movies);



// app.use('/result/:id', result)
// // create route to render second page, make sure ID matches. 
// // TODO: attempt to serve back same page and use react router to display movies component. 
// // the index.html is served to client, but then GET http://localhost:3000/movies/dist/bundle.js 
// // gets the production bundle.js instead of the development bundle.js
// // app.get('/movies/:id', (req, res) => {
// //   console.log('session id: ' + req.params.id);
// //   return res.sendFile(path.join(__dirname, '../client/index.html'));
// // })

// // in production mode, we need to serve the index.html page
// // app.get('/', (req, res) => {
// //   return res.sendFile(path.resolve(__dirname, '../client/index.html'));
// // })
// app.get('/movies/*/api', (req, res) => {
//   res.status(200).json([{Jaws: "info"}])
// })



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


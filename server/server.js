const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const pool = require('./model.js');

// import controller
// const controller = require('./controller');

// parse request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// TEST
app.get('/', (req, res) => {
  const all = "SELECT * FROM session"
  pool.query(all).then((response) => {
    res.status(200).send(response.rows);
  })
  .catch((err) => {
    console.log(err);
  })
})

// in production mode, we need to serve the index.html page
// app.get('/', (req, res) => {
//   return res.sendFile(path.resolve(__dirname, '../client/index.html'));
// })

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


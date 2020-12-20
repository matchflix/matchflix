const { Pool } = require("pg");

// create a new pool here using the connection string above 
const pool = new Pool({
  user: "m-marchand",
  host: "localhost",
  port: 5432,
  database: "matchflix"
});


module.exports = pool;
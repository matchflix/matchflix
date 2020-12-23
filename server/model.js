const { Pool } = require("pg");

const PG_URI = "postgres://sbquvxov:fv91AlabJd_ele2DTjgA8czu3eilyM5l@suleiman.db.elephantsql.com:5432/sbquvxov";

// create a new pool here using the connection string above 
const pool = new Pool({
  connectionString: PG_URI,
});


module.exports = pool;
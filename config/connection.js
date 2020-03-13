const mysql = require(`mysql`);

// Setting up Heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: `localhost`,
    port: 3306,
    user: `root`,
    password: ``,
    database: `lads_db`
  });
}

connection.connect();
module.exports = connection;
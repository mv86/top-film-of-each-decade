var pg = require('pg');

var connectionString = "postgresql://localhost/films"

pg.connect(connectionString, onConnect);

function onConnect(err, client, done) {
  if (err) {
    console.error(err)
    process.exit(1);
  };

  client.end();
};
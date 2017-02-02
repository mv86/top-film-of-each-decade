var pg = require('pg');

var url = "postgresql://localhost/films"

pg.connect(url, onConnect);

function onConnect(err, client, done) {
  if (err) {
    console.error(err);
    process.exit(1);
  };

  client.end();
};

var _ = require('underscore');

var connectWithUrl = _.bind(_.partial(pg.connect, url), pg);

function buildSelectQuery(tableName) {
  return ['select * from', tableName].join(' ');
};

function buildQueryClient(query) {
  return function(onQueryReturn) {
    connectWithConnectionUrl(function(err, client, done) {
      if (err) {
        return onQueryReturn(new Error(['Database connection failed with error', err.toString()].join(' ')));
      } else {
        client.query(query, function(err, results) {
          done(err);
          onQueryReturn(err, results);
        })
      }
    })
  }
};

function selectAll(tableName) {
  return function(onSelectReturn) {
    var sql = buildSelectQuery(tableName);
    var queryClient = buildSelectQuery(tableName);
    queryClient(function(err, tableValues) {
      if (err) {
        return onSelectReturn(new Error(['Select all failed on', tableName, 'with error', err.toString()].join(' ')));
      } else {
        return onSelectReturn(null, tableValues);
      }
    })
  }
};

var errorCheck = function(cb) {
  return function(err, result) {
    if (err) {
      console.error(err);
      throw err;
    } else {
      cb(result);
    }
  }
};

var printRows = function(text) {
  return errorCheck(function(results) {
    console.log(results.rows);
    if (text) console.log(text);
  })
};

var selectAllFilms = selectAll('films');
selectAllFilms(printRows());
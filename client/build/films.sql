DROP TABLE film_scores;

CREATE TABLE film_scores(
  id INT4 PRIMARY KEY,
  title VARCHAR(255),
  imdb_id VARCHAR(255),
  current_score DECIMAL(3, 1)
);

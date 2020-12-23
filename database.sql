CREATE TABLE user_session (
  "session_id" varchar NOT NULL,
  "genre" varchar NOT NULL,
  PRIMARY KEY ( "session_id")
);

CREATE TABLE movies (
  "user_id" varchar NOT NULL,
  "session" varchar NOT NULL, 
  "movie_1" varchar,
  "movie_2" varchar,
  "movie_3" varchar,
  "movie_4" varchar,
  "movie_5" varchar,
  "movie_6" varchar,
  "movie_7" varchar,
  "movie_8" varchar,
  "movie_9" varchar,
  "movie_10" varchar,
  "movie_11" varchar,
  "movie_12" varchar,
  "movie_13" varchar,
  "movie_14" varchar,
  "movie_15" varchar,
  "movie_16" varchar,
  "movie_17" varchar,
  "movie_18" varchar,
  "movie_19" varchar,
  "movie_20" varchar,
  PRIMARY KEY ( "user_id" )
);

INSERT INTO user_session(session_id)
VALUES (1, 'horror');
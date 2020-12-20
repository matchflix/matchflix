CREATE DATABASE matchflix;

CREATE TABLE session(
  session_id SERIAL PRIMARY KEY,
  description varchar (255)
);

ALTER TABLE session
DROP COLUMN description;

INSERT INTO session(session_id, genre) 
VALUES (1, "horror")
RETURNING *;
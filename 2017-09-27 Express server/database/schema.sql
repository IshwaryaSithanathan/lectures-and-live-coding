DROP TABLE contacts;

CREATE TABLE contacts (
  contact_id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  phone_num TEXT
)

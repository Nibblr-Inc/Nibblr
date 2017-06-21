DROP DATABASE nibblr;

CREATE DATABASE nibblr;

USE nibblr;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(20) NOT NULL UNIQUE,
  password varchar(100) NOT NULL
);

CREATE TABLE rsvp (
  user_id int NOT NULL,
  event_id int NOT NULL,
  PRIMARY KEY (user_id, event_id)
);

CREATE TABLE events (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(50) NOT NULL,
  event_time datetime NOT NULL,
  location varchar(100) NOT NULL,
  google_place_id varchar(100),
  description varchar(200),
  creatorID int NOT NULL,
  address varchar(200),
  category varchar(20),
  CONSTRAINT unq_events UNIQUE (name, event_time, google_place_id),
  FOREIGN KEY (creatorID) REFERENCES users(id)
);

-- comment out drop database if you haven't created database yet
-- mysql -u root -p < schema.sql
-- or "mysql -u root -p" and then once in mysql shell "source schema.sql"

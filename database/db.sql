-- to create a new database
CREATE DATABASE nodejs2;

-- to use database
use nodejs2;

-- creating a new table
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  Skill VARCHAR(50) NOT NULL,
  Technology VARCHAR(100) NOT NULL,
  Status VARCHAR(15),
  Comments VARCHAR(500) NOT NULL
);

-- to show all tables
show tables;

-- to describe table
describe customer;

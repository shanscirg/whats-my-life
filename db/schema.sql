create database lads_db;

use lads_db;

create table questions(
    id int NOT NULL AUTO_INCREMENT,
	question varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

create table user(
id int NOT NULL auto_increment,
email varchar(40),
password varchar(40),
results varchar(40),
PRIMARY KEY (id)
);
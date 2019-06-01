Create DATABASE burgers_db;
USE burgers_db;

Create TABLE burgers
(
id int auto_increment, 
burger_name VARCHAR (255) not null,
devoured boolean default false,
primary key (id)
);
CREATE DATABASE IF NOT EXISTS products_db;

USE products_db;
DROP TABLE IF EXISTS products;
CREATE TABLE products (
	id VARCHAR(50) NOT NULL,
    name VARCHAR(20) NOT NULL,
    price DECIMAL(10,2),
    stock INT(20),
    PRIMARY KEY (id)
);
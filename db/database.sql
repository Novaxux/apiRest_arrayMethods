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

-- optional with dates and triggers
CREATE TABLE `products` (
  `id` varchar(50) NOT NULL,
  `name` varchar(25) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
)
CREATE TRIGGER `trigger_set_created_at` 
BEFORE INSERT ON `products` 
FOR EACH ROW BEGIN
  SET NEW.created_at = NOW();
END 
CREATE TRIGGER `trigger_set_updated_at` 
BEFORE UPDATE ON `products` 
FOR EACH ROW BEGIN
  SET NEW.updated_at = NOW();
END
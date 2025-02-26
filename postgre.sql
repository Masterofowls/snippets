-- PostgreSQL Full Cheatsheet

-- Basic Commands
-- Connect to a database
\c database_name;

-- List all databases
\l;

-- List all tables in the current database
\dt;

-- Describe a table structure
\d table_name;

-- Inserting Data
INSERT INTO table_name (column1, column2) VALUES (value1, value2);

-- Updating Data
UPDATE table_name SET column1 = value1 WHERE condition;

-- Deleting Data
DELETE FROM table_name WHERE condition;

-- Selecting Data
SELECT * FROM table_name; -- Select all columns
SELECT column1, column2 FROM table_name; -- Select specific columns

-- Filtering Results
SELECT * FROM table_name WHERE condition;

-- Ordering Results
SELECT * FROM table_name ORDER BY column1 ASC; -- ASC for ascending, DESC for descending

-- Grouping Results
SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name;

-- Using HAVING to filter groups
SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name HAVING COUNT(*) > 1;

-- Transactions
BEGIN; -- Start transaction
COMMIT; -- Save changes
ROLLBACK; -- Undo changes

-- Indexes
CREATE INDEX index_name ON table_name (column_name); -- Create an index
DROP INDEX index_name; -- Drop an index

-- Views
CREATE VIEW view_name AS SELECT column1, column2 FROM table_name WHERE condition; -- Create a view
DROP VIEW view_name; -- Drop a view

-- Stored Procedures
CREATE PROCEDURE procedure_name AS
BEGIN
    -- SQL statements
END; -- Create a stored procedure

-- Triggers
CREATE TRIGGER trigger_name
AFTER INSERT ON table_name
FOR EACH ROW
BEGIN
    -- SQL statements
END; -- Create a trigger

-- Constraints
CREATE TABLE table_name (
    id SERIAL PRIMARY KEY, -- Real-time ID generation
    column1 datatype NOT NULL, -- Not null constraint
    column2 datatype UNIQUE -- Unique constraint
);

-- Data Types
-- Common data types include:
-- INT, VARCHAR(n), TEXT, DATE, TIMESTAMP, BOOLEAN

-- Additional Examples
-- Case 1: Retrieve all employees with a salary greater than 50000
SELECT * FROM employees WHERE salary > 50000;

-- Case 2: Insert a new product into the products table
INSERT INTO products (name, price, category) VALUES ('New Product', 19.99, 'Category A');

-- Case 3: Update the status of an order
UPDATE orders SET status = 'Shipped' WHERE order_id = 123;

-- Case 4: Delete a customer record
DELETE FROM customers WHERE customer_id = 456;

-- Case 5: Retrieve all orders placed in the last 30 days
SELECT * FROM orders WHERE order_date >= NOW() - INTERVAL '30 days';

-- Case 6: Insert multiple records at once
INSERT INTO users (name, email) VALUES 
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com');

-- Case 7: Update multiple records based on a condition
UPDATE products SET price = price * 0.9 WHERE category = 'Category A'; -- Apply a 10% discount

-- Case 8: Delete records older than a year
DELETE FROM logs WHERE log_date < NOW() - INTERVAL '1 year';

-- Case 9: Retrieve the top 5 highest salaries
SELECT * FROM employees ORDER BY salary DESC LIMIT 5;

-- Case 10: Count the number of products in each category
SELECT category, COUNT(*) FROM products GROUP BY category;

-- Case 11: Find the average age of users
SELECT AVG(age) FROM users;

-- Case 12: Retrieve users with a specific role
SELECT * FROM users WHERE role = 'admin';

-- Case 13: Update user roles in bulk
UPDATE users SET role = 'user' WHERE role = 'guest';

-- Case 14: Delete inactive users
DELETE FROM users WHERE last_login < NOW() - INTERVAL '1 year';


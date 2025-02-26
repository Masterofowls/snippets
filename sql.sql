-- SQL Full Cheatsheet with Real-Time IDs and More Examples

-- Basic SQL Commands
-- SELECT: Retrieve data from a database
SELECT column1, column2 FROM table_name;

-- INSERT: Add new data to a database
INSERT INTO table_name (column1, column2) VALUES (value1, value2);

-- UPDATE: Modify existing data in a database
UPDATE table_name SET column1 = value1 WHERE condition;

-- DELETE: Remove data from a database
DELETE FROM table_name WHERE condition;

-- Creating a Table
CREATE TABLE table_name (
    id SERIAL PRIMARY KEY, -- Real-time ID generation
    column1 datatype,
    column2 datatype,
    column3 datatype
);

-- Altering a Table
ALTER TABLE table_name ADD column_name datatype; -- Add a new column
ALTER TABLE table_name DROP COLUMN column_name; -- Remove a column

-- Dropping a Table
DROP TABLE table_name;

-- Joins
-- INNER JOIN: Select records that have matching values in both tables
SELECT columns FROM table1 INNER JOIN table2 ON table1.column_name = table2.column_name;

-- LEFT JOIN: Select all records from the left table, and the matched records from the right table
SELECT columns FROM table1 LEFT JOIN table2 ON table1.column_name = table2.column_name;

-- RIGHT JOIN: Select all records from the right table, and the matched records from the left table
SELECT columns FROM table1 RIGHT JOIN table2 ON table1.column_name = table2.column_name;

-- FULL OUTER JOIN: Select records with a match in either left or right table records
SELECT columns FROM table1 FULL OUTER JOIN table2 ON table1.column_name = table2.column_name;

-- Cross Join: Select all possible combinations of rows from both tables
SELECT columns FROM table1 CROSS JOIN table2;

-- Self Join: Join a table to itself
SELECT a.column1, b.column2 FROM table_name a, table_name b WHERE a.common_field = b.common_field;

-- Aggregate Functions
SELECT COUNT(column_name) FROM table_name; -- Count rows
SELECT AVG(column_name) FROM table_name; -- Average value
SELECT SUM(column_name) FROM table_name; -- Sum of values
SELECT MAX(column_name) FROM table_name; -- Maximum value
SELECT MIN(column_name) FROM table_name; -- Minimum value

-- Grouping Results
SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name;

-- Filtering Results
SELECT column1, column2 FROM table_name WHERE condition;

-- Using HAVING to filter groups
SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name HAVING COUNT(*) > 1;

-- Ordering Results
SELECT column1, column2 FROM table_name ORDER BY column1 ASC; -- ASC for ascending, DESC for descending

-- Using Wildcards
SELECT * FROM table_name WHERE column_name LIKE 'A%'; -- Starts with 'A'
SELECT * FROM table_name WHERE column_name LIKE '%A'; -- Ends with 'A'
SELECT * FROM table_name WHERE column_name LIKE '%A%'; -- Contains 'A'

-- Using Subqueries
SELECT column1 FROM table_name WHERE column2 IN (SELECT column2 FROM another_table WHERE condition);
SELECT column1 FROM table_name WHERE column2 = (SELECT MAX(column2) FROM another_table); -- Subquery returning a single value

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

-- Multiple Cases Example
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

-- Real-Time ID Generation Example
-- Inserting a new record and retrieving the generated ID
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com') RETURNING id;

-- Updating a record using the real-time ID
UPDATE users SET email = 'john.doe@example.com' WHERE id = 1;

-- Deleting a record using the real-time ID
DELETE FROM users WHERE id = 1;

-- Additional Examples
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





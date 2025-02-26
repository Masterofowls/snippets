// SQL Usage with JavaScript Cheatsheet

// Connecting to a Database
const { Client } = require('pg'); // PostgreSQL client
const client = new Client({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Connection error', err.stack));

// Querying the Database
const queryDatabase = async (query) => {
  try {
    const res = await client.query(query);
    console.log(res.rows);
  } catch (err) {
    console.error('Query error', err.stack);
  }
};

// Example Usage
queryDatabase('SELECT * FROM your_table');

// Inserting Data
const insertData = async (table, data) => {
  const keys = Object.keys(data).join(', ');
  const values = Object.values(data).map(value => `'${value}'`).join(', ');
  const query = `INSERT INTO ${table} (${keys}) VALUES (${values})`;
  
  try {
    await client.query(query);
    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Insert error', err.stack);
  }
};

// Example Usage
insertData('your_table', { column1: 'value1', column2: 'value2' });

// Updating Data
const updateData = async (table, data, condition) => {
  const setClause = Object.entries(data)
    .map(([key, value]) => `${key} = '${value}'`)
    .join(', ');
  const query = `UPDATE ${table} SET ${setClause} WHERE ${condition}`;
  
  try {
    await client.query(query);
    console.log('Data updated successfully');
  } catch (err) {
    console.error('Update error', err.stack);
  }
};

// Example Usage
updateData('your_table', { column1: 'newValue' }, "column2 = 'value2'");

// Deleting Data
const deleteData = async (table, condition) => {
  const query = `DELETE FROM ${table} WHERE ${condition}`;
  
  try {
    await client.query(query);
    console.log('Data deleted successfully');
  } catch (err) {
    console.error('Delete error', err.stack);
  }
};

// Example Usage
deleteData('your_table', "column1 = 'value1'");

// Closing the Connection
const closeConnection = async () => {
  await client.end();
  console.log('Connection closed');
};

// Call closeConnection when done

// Advanced Queries
const advancedQueries = async () => {
  // Join Query
  const joinQuery = `
    SELECT a.column1, b.column2 
    FROM tableA a 
    JOIN tableB b ON a.id = b.a_id
  `;
  await queryDatabase(joinQuery);

  // Aggregate Functions
  const aggregateQuery = `
    SELECT COUNT(*), AVG(column1) 
    FROM your_table 
    GROUP BY column2
  `;
  await queryDatabase(aggregateQuery);

  // Subquery
  const subquery = `
    SELECT * 
    FROM your_table 
    WHERE column1 IN (SELECT column1 FROM another_table WHERE condition)
  `;
  await queryDatabase(subquery);
};

// Example Usage
advancedQueries();



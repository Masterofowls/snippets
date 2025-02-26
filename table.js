// Sample data
const data = [
  { name: "John", age: 28, city: "New York" },
  { name: "Jane", age: 22, city: "San Francisco" },
  { name: "Mike", age: 32, city: "Chicago" },
  { name: "Sara", age: 24, city: "Los Angeles" }
];

// Function to create table
function createTable(data) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Create table header
  const headers = Object.keys(data[0]);
  const headerRow = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    th.addEventListener("click", () => sortTable(data, header));
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // Create table body
  data.forEach((item) => {
    const row = document.createElement("tr");
    headers.forEach((header) => {
      const td = document.createElement("td");
      td.textContent = item[header];
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Function to sort table
function sortTable(data, key) {
  const sortedData = data.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
  updateTable(sortedData);
}

// Function to filter table
function filterTable(data, key, value) {
  const filteredData = data.filter((item) => item[key].includes(value));
  updateTable(filteredData);
}

// Function to update table
function updateTable(data) {
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  data.forEach((item) => {
    const row = document.createElement("tr");
    Object.keys(item).forEach((key) => {
      const td = document.createElement("td");
      td.textContent = item[key];
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
}

// Initial table creation
createTable(data);

// Example usage of filterTable
// filterTable(data, 'city', 'New York');

// Select the table element
const table = document.querySelector('table');

// Create a CSV string
let csvString = '';

// Loop through each row in the table
for (let i = 0; i < table.rows.length; i++) {
  // Get the row
  const row = table.rows[i];

  // Loop through each cell in the row
  for (let j = 0; j < row.cells.length; j++) {
    // Get the cell
    const cell = row.cells[j];

    // Get the cell value
    let value = cell.textContent;

    // Enclose date values with commas in double quotes
    if (j === 5 && value.includes(',')) {
      value = `"${value}"`;
    }

    // Add the cell value to the CSV string
    csvString += `${value},`;
  }

  // Add a new line to the CSV string
  csvString += '\n';
}

// Download the CSV string as a file
const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'table.csv';
link.click();

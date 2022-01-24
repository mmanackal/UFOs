// import the data from data.js
const tableData = data;

// Reference the HTML Table using D3
var tbody = d3.select("tbody");

// Clear existing data
function buildTable(data) {
   tbody.html("");
   

// Loop through each object in teh data
// and append a row and cells for each value in the row
data.forEach((dataRow) => {
// Append a row to the table body
 let row = tbody.append("tr");
 //Loop through each field in the dataRow and add
 // each value as a table cell (td)
 Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
 );
 
});
};

//Adding a function for a button-get datetime value from the filter
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // check to see if a date was entered and filter the
    // data using that date
  if (date) {
    // Apply 'filter' to the table data to only keep the 
    // rows where the 'datetime' value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  // Rebuild the table usingthe filtered data
  // @Note: if no date was entered, then filteredData will
  // just be the original tableData
  buildTable(filteredData);
};
// Adding code to "listen" for click
// Attach an even to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Calling the code to build table when page loads
buildTable(tableData);
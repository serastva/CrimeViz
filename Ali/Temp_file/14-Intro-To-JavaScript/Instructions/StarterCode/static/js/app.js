//PART 1
//Declare Variables
//############################################################################
// from data.js
var tableData = data;


//select tbody
let tbody = d3.select("tbody");


//############################################################################
// build a data table
function createTable(data){
 
  // clear a table
  tbody.html("");
  
  // loop through data 
  data.forEach((loopData) => {
      
    // append table row to table body
      let row = tbody.append("tr");
      
      // interate through values
      Object.values(loopData).forEach((dataValue) => {
         
        // append cells to the rows for values
          let cell = row.append("td");
          cell.text(dataValue);
      });
  })
}
//############################################################################
//this will trigger an event when a button is clicked 

function handleClick(){

   // prevent the page from refreshing
   d3.event.preventDefault();

    // select element 
    let date = d3.select("#datetime").property("value");
    let searchData = tableData;

    //check to see if a date was entered then search using the date entered
    if(date) {
      searchData = searchData.filter((row) => row.datetime === date);
    }

//create a table using the data which was searched
createTable(searchData);

}

//will attach an event to a handler function
d3.selectAll("#filter-btn").on("click", handleClick);
//create a table 
createTable(tableData);

//PART 2


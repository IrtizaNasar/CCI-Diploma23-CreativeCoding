let data;
let url = "your google drive csv link"

function preload() {
  data = loadTable('cycling_data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(400, 400);
  noLoop();
}




function draw() {
  background(20);
  
  // this makes sure there is content in the data
  if (data) {

    // get the amount of rows in the CSV
    let numRows = data.getRowCount();

    // get the columns titled 'Miles' and 'Month'
    let miles = data.getColumn('Miles');
    let months = data.getColumn('Month');
    
    // debug
    print(miles);
    
    // iterate over the number of rows
    // Start at row zero, go to the next row until we reach the last row
    for (let i = 0; i < numRows; i++) {
      
      let x = 50;
      let y = 50 + (i * 25); // i*25 will increment by 25 each time the loop runs
      let w = miles[i]*4;  
      // each time the loop iterates we'll get a new value from the csv and we use it to store it in the variable width
      let h = 15;
      
      // draw a rectangle
      // x Number: x-coordinate of the rectangle.
      // y Number: y-coordinate of the rectangle.
      // w Number: width of the rectangle.
      // h Number: height of the rectangle.  
      rect(x, y, w, h);
  
     // Check if the miles for that month are over 30
     if (miles[i] > 30) {
      // If they are, print a console statement with the month
      console.log(months[i] + " has reached the goal with " + miles[i] + " miles.");
    } 
  
    }
  }
}

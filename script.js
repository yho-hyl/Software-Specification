//Assign the x and y from textbox
let x = Number(document.getElementById("width").value);
let y = Number(document.getElementById("height").value);

//Assign start and end (Global use)
let st = false;
let ed = false;
let wl = 0;

//Create array to test if there was a change
let xTestTable = [x];
let yTestTable = [y];

// Make tbl global so the submit button can access it
let tbl = [];

//Create table
function autoTable() {
    x = Number(document.getElementById("width").value);
    y = Number(document.getElementById("height").value);

    if (xTestTable[0] != x || yTestTable[0] != y) {

        let grid = document.createElement(`table`);
        tbl = []; // Reset the global tbl array

        for (r = 0; r < y; r++) {
            let tableRow = document.createElement(`tr`);
            let rowArray = []; // Make a row array to hold the Cells
            
            for (c = 0; c < x; c++) {
                let tableColumn = new Cell(c, r); // c is x and r is y
                rowArray.push(tableColumn); // Push the actual Cell object
                tableRow.appendChild(tableColumn.table);
            }
            tbl.push(rowArray); // Push the completed row into tbl
            grid.appendChild(tableRow);
        }

        //Checks if there is a table. If there is, removes the table.
        if (document.querySelector('table') != null) {
            document.querySelector('table').remove();
        }

        //create grid
        document.body.appendChild(grid);

        //reset and reassign xyTestTable
        xTestTable = [x];
        yTestTable = [y];
    } else {
        return;
    }
}

//Run autoXY every 0.2 seconds
setInterval(autoTable, 200);

class Cell {
    x;
    y;
    isStart = false;
    isEnd = false;
    isWall = false;
    table;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.table = this.generateCellDiv(); 
    } 
    
    generateCellDiv() {
        let td = document.createElement(`td`);
        
        // Set style for each cell
        td.style.width = "25px";
        td.style.height = "25px"; 
        
        // Save the current object so the click function can edit it
        let cellObject = this;

        //Check if clicked
        td.addEventListener("click", function(){

            //start
            if (st == false && ed == false && cellObject.isWall == false) {
                st = true; 
                cellObject.isStart = true; 
                
                //Change style
                td.style.backgroundColor = "green";
                return;
            }

            if (st == true && ed == false && cellObject.isWall == false && cellObject.isStart == true) {
                st = false;
                cellObject.isStart = false;

                //change style
                td.style.backgroundColor = "transparent";
                return;
            }
            
            //end
            if (ed == false && st == true && cellObject.isStart == false && cellObject.isWall == false) {
                ed = true; 
                cellObject.isEnd = true; 

                //Change style
                td.style.backgroundColor = "red";
                return;
            }
            
            if (ed == true && st == true && cellObject.isStart == false && cellObject.isWall == false && cellObject.isEnd == true) {
                ed = false;
                cellObject.isEnd = false;

                //change style
                td.style.backgroundColor = "transparent";
                return;
            }
            
            //wall
            if (st == true && ed == true && cellObject.isStart == false && cellObject.isEnd == false && cellObject.isWall == false) {
                cellObject.isWall = true;
                wl++;

                //change style
                td.style.backgroundColor = "black";
                return;
            }
            
            if (st == true && ed == true && cellObject.isStart == false && cellObject.isEnd == false && cellObject.isWall == true) {
                cellObject.isWall = false;
                wl--;
                
                //change style
                td.style.backgroundColor = "transparent";
                return;
            }
        })
                
        return td;
    }
}

// Submit
document.getElementById("submit").addEventListener("click", function() {
    
    // Check if start and end are placed
    if (st == false || ed == false) {
        console.log("Need start and end");
        return;
    }

    let startCell;
    let endCell;

    // Loop through tbl to get start and end
    for (let r = 0; r < y; r++) {
        for (let c = 0; c < x; c++) {
            let currentCell = tbl[r][c];
            
            if (currentCell.isStart == true) {
                startCell = currentCell;
            }
            if (currentCell.isEnd == true) {
                endCell = currentCell;
            }
        }
    }

    // BFS Variables
    let goingToVisit = [startCell];
    let visited = [startCell]; 
    let reachedEnd = false;

    // BFS
    while (goingToVisit.length > 0) {
        let current = goingToVisit.shift();

        // Stop the search the moment we hit the end
        if (current == endCell) {
            reachedEnd = true;
            break;
        }

        let cx = current.x;
        let cy = current.y;
        let neighbors = [];

        // Check Up, Down, Left, Right
        if (cy > 0) neighbors.push(tbl[cy - 1][cx]);
        if (cy < y - 1) neighbors.push(tbl[cy + 1][cx]);
        if (cx > 0) neighbors.push(tbl[cy][cx - 1]);
        if (cx < x - 1) neighbors.push(tbl[cy][cx + 1]);

        for (let i = 0; i < neighbors.length; i++) {
            let next = neighbors[i];
        
            let seen = false;

            for (let v = 0; v < visited.length; v++) {
                if (visited[v] == next) {
                    seen = true;
                }
            }

            // Only add if not seen, and if it is not a wall
            if (seen == false && next.isWall == false) {
                visited.push(next);
                
                // Tell the next cell where it came from
                next.previousCell = current; 
                
                goingToVisit.push(next);
            }
        }
    }

    // Draw path 
    if (reachedEnd == true) {
        let pathLength = 0;
        
        // We look at the cell right before the end cell to start drawing backwards
        let pathItem = endCell.previousCell;
        
        // Loop backwards until we hit the start cell
        while (pathItem != startCell && pathItem != null) {
            pathItem.table.style.backgroundColor = "yellow";
            pathItem = pathItem.previousCell; // Move to the previous one in the chain
            pathLength++;
        }
        
        console.log("It would take " + pathLength + " steps.");
        console.log("Total Number of Wall: " + wl);
    } else {
        console.log("No path found");
    }
});
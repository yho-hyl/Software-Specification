
//Assign the x and y from textbox
let x = Number(document.getElementById("width").value);
let y = Number(document.getElementById("height").value);

//Create array to test if there was a change
let xTestTable = [x]
let yTestTable = [y]



//Create table
function autoTable() {
    x = Number(document.getElementById("width").value);
    y = Number(document.getElementById("height").value);

    if (xTestTable[0] != x || yTestTable[0] != y) {

        let grid = document.createElement(`table`);


        for (r = 0; r < y; r++) {
            let tableRow = document.createElement(`tr`);
            for (c = 0; c < x; c++) {
                let tableColumn = new Cell(c, r); //Will need to change this with Cell class
                tableRow.appendChild(tableColumn.table);
            }
            grid.appendChild(tableRow);

        }

        //Checks if there is a table. If there is, removes the table.
        if (document.querySelector('table') != null) {
            document.querySelector('table').remove()
        }

        //create grid
        document.body.appendChild(grid)

        //reset and reassign xyTestTable
        xTestTable = [x]
        yTestTable = [y]
    } else {
        return;
    }
}




//Run autoXY every 0.2 seconds

setInterval(autoTable, 200);

class Cell {
    x;
    y;
    isWall = false;
    isStart = false;
    isEnd = false;
    table;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        // Generate the HTML element right when the cell is created
        this.table = this.generateCellDiv(); 
    } 
    
    

    generateCellDiv() {
        let td = document.createElement(`td`);
        
        // Set style for each cell
        td.style.width = "25px";
        td.style.height = "25px"; 

        //Check if clicked
        td.addEventListener("click", function(){
            console.log(x)
        })
                
        return td;
    }
}
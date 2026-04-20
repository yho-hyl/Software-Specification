
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
    isStart = false;
    isEnd = false;
    isWall = false;
    table;


    constructor(x, y) {
        this.x = x;
        this.y = y;

        
        // Generate the HTML element right when the cell is created
        this.table = this.generateCellDiv(this.x, this.y, this.isStart ,this.isEnd, this.isWall); 
    } 
    
    

    generateCellDiv(x,y, start, end, wall) {
        let td = document.createElement(`td`);
        
        // Set style for each cell
        td.style.width = "25px";
        td.style.height = "25px"; 

        //Check if clicked
        td.addEventListener("click", function(){
            //Check if there is already a start Cell and if not assign the cell as the Start Cell
            if (this.start != true && start != true) {
                this.start = true //Make Parent Cell's start variable true
                start = true //Make the Cell's start variable true

                //Change style
                td.style.backgroundColor = "green"

            } else if (this.start == true || start == true) {
                this.start = false //Make Parent Cell's start variable false
                start = false //Make the Cell's start variable false

                //Change style
                td.style.backgroundColor = "transparent"
            }


            //Check if there is already an end Cell and if not assign the cell as the End Cell
            console.log(start)
            if (this.end != true && end != true && this.start == true) {
                this.end = true //Make Parent Cell's start variable true
                end = true //Make the Cell's start variable true

                //Change style
                td.style.backgroundColor = "red"

            } else if (this.end == true || end == true) {
                this.end = false //Make Parent Cell's start variable false
                end = false //Make the Cell's start variable false

                //Change style
                td.style.backgroundColor = "transparent"
            }

        })
                
        return td;
    }
}
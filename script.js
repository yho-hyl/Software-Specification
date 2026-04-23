
//Assign the x and y from textbox
let x = Number(document.getElementById("width").value);
let y = Number(document.getElementById("height").value);

//Assign start and end (Global use)
let st = false;
let ed = false;
let wl = 0;

//Create array to test if there was a change
let xTestTable = [x]
let yTestTable = [y]

// Submit function
document.getElementById("submit").addEventListener("click", function() {
    console.log("test");
})


//Create table
function autoTable() {
    x = Number(document.getElementById("width").value);
    y = Number(document.getElementById("height").value);

    if (xTestTable[0] != x || yTestTable[0] != y) {

        let grid = document.createElement(`table`);


        for (r = 0; r < y; r++) {
            let tableRow = document.createElement(`tr`);
            let tbl = []
            for (c = 0; c < x; c++) {
                let tableColumn = new Cell(c, r); //Will need to change this with Cell class   c is x and r is y
                tbl.push([c, r])
                tableRow.appendChild(tableColumn.table);
                console.log(tbl)
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

            //start
            if (st == false && end == false && wall == false) {
                st = true; //Make global st true
                start = true; //Make the Cell's start variable true
                
                //Change style
                td.style.backgroundColor = "green";
                return;
            }

            if (st == true && end == false && wall == false && start == true) {
                st = false;
                start = false;

                //change style
                td.style.backgroundColor = "transparent";
                return;
            }
            
            //end
            if (ed == false && st == true && start == false && wall == false) {
                ed = true; //Make global ed true
                end = true; //Make the Cell's end variable true

                //Change style
                td.style.backgroundColor = "red";
                return;
            }
            
            if (ed == true && st == true && start == false && wall == false && end == true) {
                ed = false;
                end = false;

                //change style
                td.style.backgroundColor = "transparent";
                return;
            }
            
            //wall
            if (st == true && ed == true && start == false && end == false && wall == false) {
                wall = true;
                wl++;

                //change style
                td.style.backgroundColor = "black";
                return;
            }
            
            if (st == true && ed == true && start == false && end == false && wall == true) {
                wall = false;
                wl--;
                
                //change style
                td.style.backgroundColor = "transparent";
                return;
            }

            //Check if there is already an end Cell and if not assign the cell as the End Cell
            console.log("Start: " + start);
            console.log("End: " + end);
            console.log("Wall: " + wall)
            console.log("st: " + st)
            console.log("ed: " + ed)
            console.log("")



        })
                
        return td;
    }
}

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
                let tableColumn = document.createElement(`td`); //Will need to change this with Cell class
                tableRow.appendChild(tableColumn);
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
    totalDistance = 0;
    parent;
    color;
    isWall = false;
    isStart = false;
    isEnd = false;
    children = [];
    position=0;
    constructor(position) {
        this.position = position

    } 
    
    generateCellDiv(){
        let newTD = document.createElement(`td`)
        newTD.style.width = "auto"
        newTD.style.heigth = "auto"
    }
    

}

class testtttt extends Cell {
    constructor(position, abcd) {
        super();
        this.abcd = abcd
    }

}


trialA = new testtttt(3,4)






//Assign the x and y from textbox
let x = Number(document.getElementById("width").value);
let y = Number(document.getElementById("height").value);





//Create table
function autoTable() {
    let grid = document.createElement(`table`);
    x = Number(document.getElementById("width").value);
    y = Number(document.getElementById("height").value);

    for (r = 0; r < x; r++) {
        let tableRow = document.createElement(`tr`);
        for (c = 0; c < y; c++) {
            let tableColumn = document.createElement(`td`);
            tableColumn.appendChild(tableRow);
        }
        tableRow.appendChild(grid);

    }
}




//Run autoXY every 0.2 seconds
setInterval(autoTable, 200);

class Cell {
    width_px;
    height_px;
    td;
    parent;
    color;
    isWall = false;
    children = []
    pos;
    constructor(width_px, height_px, pos, grid) {
        this.width_px
        this.height_px
        this.pos
        this.grid
    } 

    generateCellDiv(){
        let newTD = document.createElement(`td`)
        newTD.style.width = 15
        newTD.style.heigth = 15
    }
    

}








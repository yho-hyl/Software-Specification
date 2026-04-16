
//Assign the x and y from textbox
let x = Number(document.getElementById("width").value);
let y = Number(document.getElementById("length").value);

const row = document.createElement("tr");
const column = document.createElement("td");



//Gets width and legth
function autoXY() {
    x = Number(document.getElementById("width").value);
    y = Number(document.getElementById("length").value);
}

function tbl() {
    for (r=0; r < x; r++) {
        document.getElementById("grid").appendChild(row);
        for (c=0;c < y; c++) {
            document.getElementById("grid").appendChild(column);

        }
    }
}



//Run autoXY every 0.2 seconds
setInterval(autoXY, 200);
setInterval(tbl, 200);



/*
class grid {
    constructor(maxWidth, maxLength) { 
    this.maxWidth = x
    this.maxLength = y
    }
    
    tbl() {
        const column = document.createElement("td")
        const row = document.createElement("tr")
        
        for (r=0; r != x; r++) {
            document.getElementById("grid").appendChild(row);
            for (c=0;c != y; c++) {
                document.getElementById("grid").appendChild(column);

            }
        }
    }
}





*/





//Assign the x and y from textbox
let x = document.getElementById("width");
let y = document.getElementById("length");


//Gets width and legth
function autoXY() {
    x = document.getElementById("width");
    y = document.getElementById("length");
}

//Run autoXY every 0.2 seconds
setInterval(autoXY, 200)


class grid {
    constructor(maxWidth, maxLength) { 
    this.maxWidth = x
    this.maxLength = y
    }
    
    tbl() {
        const row = document.createElement("th")
        const column = document.createElement("tr")
        
        for (r=0; r != x; r++) {
            document.getElementById("grid").appendChild(row);
            for (c=0;c != y; c++) {
                document.getElementById("grid").appendChild(column);

            }
        }
    }
}








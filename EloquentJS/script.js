// Chessboard (Chapter 2)

let gridSize = 40;
let newString = "";
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                newString += "#";
            }
            else {
                newString += " ";
            }
        }
        else {
            if (j % 2 == 1) {
                newString += "#";
            }
            else {
                newString += " ";
            }
        }
    }
    newString += "\n";
}
console.log(newString);

//Minimum (Chapter 3)

function minimum(a, b) {
    let equalString = "Equal Numbers";
    if (a != b) {
        if (a < b) {
            return a;
        }
        else {
            return b;
        }
    }
    else {
        return equalString;
    }
}
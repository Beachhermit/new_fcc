"use strict";

function countNeighbours(data, row, col) {  
    //need to count edge cases!!
    function explore(data, testRow, testCol) {
        try {
            return data[testRow][testCol];
        }
        catch(err) {return 0;}
        //finally {return 0;}
    }
    
    return explore(data, row, col-1) + explore(data, row-1, col-1) + explore(data, row-1, col) + explore(data, row-1, col+1) + explore(data, row, col+1) + explore(data, row+1, col+1) + explore(data, row+1, col) + explore(data, row+1, col-1);
    
}

console.log(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 1, 2), 3, "1st example");

    console.log(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");

    console.log(countNeighbours([[1, 1, 1],
                                  [1, 1, 1],
                                  [1, 1, 1]], 0, 2), 3, "Dense corner");

    console.log(countNeighbours([[0, 0, 0],
                                  [0, 1, 0],
                                  [0, 0, 0]], 1, 1), 0, "Single");
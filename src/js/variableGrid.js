import {createGrid, createPixel, fullColor, getColor} from "./index.js";

export function getRows(){
    let rows = document.getElementById("rows");
    let numberOfRows = rows.value;
    
    return numberOfRows;
}

export function getCols(){
    let cols = document.getElementById("cols");
    let numberOfCols = cols.value;

    return numberOfCols;
}

function resetGrid(){
    let grid = document.querySelectorAll(".drawing-grid div");
    
    for(let unique of grid){
        unique.remove();
    }
}

export function submit(){
    let button = document.getElementById("submit");
    let grid = document.querySelector(".drawing-grid");
    
    button.addEventListener("click", (event)=>{
        let rows = getRows();
        let cols = getCols();
        let nbpx = rows*cols;
        
        console.log("row:" + rows, "cols:" + cols);
        grid.style.gridTemplate = `repeat(${rows}, 1fr)/repeat(${cols}, 1fr)`;
        console.log(grid.style.gridTemplate);
        
        resetGrid();
        createGrid(nbpx);
        createPixel(nbpx);
        fullColor(getColor);
    });
}
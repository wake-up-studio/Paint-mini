import {getRows} from "./variableGrid.js";
import {getCols} from "./variableGrid.js";
import {submit} from "./variableGrid.js";

export function createGrid(nbpx=600){
    let grid = document.querySelector(".drawing-grid");
    
    for(let i=0; i<nbpx; i++){
        let pixels = document.createElement("div");
        grid.appendChild(pixels);
        pixels.id = i;
    }
}

function createPicker(){
    let picker = document.getElementById("picker");
    let input = document.createElement("input");
    
    picker.appendChild(input);
    input.setAttribute("type", "color");
}

export function getColor(){
    let colorPicker = document.querySelector(".picker input");
    let color = colorPicker.value;
    return color;
}
    
export function createPixel(nbpx=600){

    for(let y=0; y<nbpx; y++){
        let pixel = document.getElementById(y);
        
        pixel.addEventListener("mousedown", (event)=>{
          pixel.style.backgroundColor = getColor();
        });
    }
}

function reset(){
    let button = document.getElementById("reset");
    
    button.addEventListener("click", (event)=>{
        let pixels = document.querySelectorAll(".drawing-grid div");
        for(let pixel of pixels){
            pixel.style.backgroundColor = "";  
        }
    });
}

function eraser(){
    let eraser = document.getElementById("eraser");
    
    eraser.addEventListener("click", (event)=>{
        let picker = document.querySelector(".picker input");
        picker.value = "#ffffff";
    });
}

export function fullColor(getColor){
    let bucket = document.getElementById("bucket");
    let pixels = document.querySelectorAll(".drawing-grid div");
    
    bucket.addEventListener("click", (event)=>{
        for(let pixel of pixels){
            pixel.style.backgroundColor = getColor();
        }
    });
}

window.addEventListener("DOMContentLoaded", (event)=>{
    createGrid();
    createPicker();
    createPixel();
    reset();
    eraser();
    fullColor(getColor);
    submit();
})
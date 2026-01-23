function createGrid(){
    let grid = document.querySelector(".drawing-grid");
    
    for(let i=0; i<600; i++){
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

function getColor(){
    let colorPicker = document.querySelector(".picker input");
    let color = colorPicker.value;
    return color;
}
    

function createPixel(){
    for(let y=0; y<600; y++){
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

window.addEventListener("DOMContentLoaded", (event)=>{
    createGrid();
    createPicker();
    createPixel();
    reset();
})
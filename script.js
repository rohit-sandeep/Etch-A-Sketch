const gridSize = 16;
const sketchContainer = document.getElementById('sketch-container');

function createGrid(size){
    for (let row = 0; row < size; row++){
        for (let col =0 ; col < size; col ++){
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.onmouseover= function(){
                square.style.backgroundColor = 'black';
            }
            sketchContainer.appendChild(square);
        }
    }
}

createGrid(gridSize);
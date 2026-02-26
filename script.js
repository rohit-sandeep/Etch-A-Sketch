
const sketchContainer = document.getElementById('sketch-container');
const btn= document.getElementById('clear-btn');


function createGrid(squaresPerSide){
    const squareSize = 600/ squaresPerSide
    for (let row = 0; row < squaresPerSide; row++){
        for (let col =0 ; col < squaresPerSide; col ++){
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            let opacity = 0;
            square.addEventListener('mouseover', () => {
                square.classList.add('hovered');
            });
            sketchContainer.appendChild(square);
        }
    }
}

btn.addEventListener('click', () => {
    let userInput= prompt("Enter the number of squares per side (max 100):");
    let newSize= parseInt(userInput);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    else{
        while(sketchContainer.firstChild){
            sketchContainer.removeChild(sketchContainer.firstChild);
        }
        createGrid(newSize);
    }
})

createGrid(16);
import confetti from "canvas-confetti";
import "./styles.scss";

import {explode} from '@ddlab/bomb';

const field = document.querySelector(".field");
const sizeOptions = document.querySelectorAll(".size-option")
const difficultyOptions = document.querySelectorAll(".difficulty-option")
const generateButton = document.querySelector("#generate-button");

let numOfMines = 0;
const grid = [];
const cellSize = 30;
let height = 0;
let width = 0;
let cells = [];


const getCoordinates = (cell, cells) => {
    for (let y = 0; y < cells.length; y++) {
        for (let x = 0; x < cells[0].length; x++) {
            if(cells[y][x] === cell) {
                return {
                    x: x,
                    y: y
                }
            }
        }
    } return 0;
}

const getSurrounding = (coords, height, width) => {
    const surroundingArr = [];
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (!(i === 0 && j === 0) &&
                coords.y + i >= 0 && coords.y + i < height && 
                coords.x + j >= 0 && coords.x + j < width) { //if not original cell and within field
                const cellCoords = {
                    x: (coords.x + j),
                    y: (coords.y + i)
                }         
                surroundingArr.push(cellCoords);
            }
        }
    }
    //console.log(surroundingArr);
    return surroundingArr;
}

const isIn = (coords, coordsList) => {
    for (let i = 0; i < coordsList.length; i++) {
        if (coordsList[i].x === coords.x && coordsList[i].y === coords.y) {
            return true;
        }
    }
    return false;
}

const generateMines = (event) => {
    const minesInput = document.querySelector("#mines");
    numOfMines = minesInput.value;
    const click = getCoordinates(event.target, cells);

    //generateMines
    for (let i = 0; i < numOfMines; i++){
        let x = Math.floor(Math.random() * grid[0].length);
        let y = Math.floor(Math.random() * grid.length);
        const clickAndSurrounding = getSurrounding(click, height, width);
        clickAndSurrounding.push(click)

        while (grid[y][x] === "x" || isIn({x:x, y:y}, clickAndSurrounding)) {
            x = Math.floor(Math.random() * grid[0].length);
            y = Math.floor(Math.random() * grid.length);
        }
        grid[y][x] = "x"
        console.log("added x"+x+" y"+y)

        const surrounding = getSurrounding({x:x,y:y}, height, width);
        surrounding.forEach((coords) => {
            if (!isNaN(grid[coords.y][coords.x])) {
                grid[coords.y][coords.x]++;
            }
        })
    }
    grid.forEach((row) => console.log(row.join(" ")))

    for (let y = 0; y < height; y++) {
        for (let x = 0;  x < width; x++) {
            cells[y][x].innerHTML = `<p>${grid[y][x]}</p>`
            cells[y][x].classList.add(`cell--${grid[y][x] === "x" ? "mine" : grid[y][x]}`)
        }
    }
    console.log("here")

    cells.forEach((row) => row.forEach((cell) => cell.removeEventListener("click", generateMines)));

    cells.forEach((row) => row.forEach((cell) => cell.addEventListener("click", onCellClick)));
    reveal(cells[click.y][click.x])
}

const onCellClick = (event) => {
    const isFlag = document.getElementById("flag")
    if (isFlag.checked) {
        if (event.target.classList.contains("cell--flag")) {
            event.target.classList.remove("cell--flag");
        } else {
            event.target.classList.add("cell--flag");
        }
    } else {
        if (!event.target.classList.contains("cell--flag")) {
            reveal(event.target);
        }
    }
}

const reveal = (cell) => {
    const cellClasses = cell.classList;
    if (cellClasses.contains("cell--unopened")) {
        cellClasses.remove("cell--unopened")
        cellClasses.add("cell--opened")

        if (cellClasses.contains("cell--mine")) {
            onMine()
        } else if (cellClasses.contains("cell--0")) {
            console.log()
            const surroundingCoords = getSurrounding(getCoordinates(cell, cells), cells.length, cells[0].length)
            surroundingCoords.forEach((coords) => reveal(cells[coords.y][coords.x]))
        }
    }
    checkWin(cells);
}

const checkWin = (cells) => {
    for (let y = 0; y < cells.length; y++) {
        for (let x = 0; x < cells[0].length; x++) {
            if (cells[y][x].classList.contains("cell--unopened") && !cells[y][x].classList.contains("cell--mine")) {
                return false;
            }
        }
    }
    confetti({
        particleCount: 200,
        spread: 90,
        angle: -40,
        origin: {x: -0.1, y: -0.1},
        gravity: 0.5
    })
    confetti({
        particleCount: 200,
        spread: 90,
        angle: 220,
        origin: {x: 1.1, y: -0.1},
        gravity: 0.5
    })
    confetti({
        particleCount: 200,
        spread: 90,
        angle: -90,
        origin: {x: 0.5, y: -0.2},
        gravity: 0.5
    })
    confetti({
        particleCount: 200,
        spread: 90,
        angle: 135,
        origin: {x: 1, y: 1},
        gravity: 0.5
    })
    confetti({
        particleCount: 200,
        spread: 90,
        angle: 45,
        origin: {x: 0, y: 1},
        gravity: 0.5
    })
    return true;
}

const onMine = () => {
    console.log("mine!")
    
    
    
    cells.forEach((row) => row.forEach((cell) => {
        console.log("here!")
        if (cell.classList.contains("cell--unopened")) {
            cell.classList.remove("cell--unopened");
            cell.classList.add("cell--unopened-end");
        }
        if (cell.classList.contains("cell--mine")) {

            explode(cell, {
                duration: 10000, // animation duration
                shouldRemoveEl: false, // toggle for element removal from DOM after explosion. default: false
                distance: 6, // shatter travel distance - multiplier of slice size. default: 2
                color: "#FF8000",
                sliceCount: 5, // slice count in one axis. default: 10
                maxSliceSize: 10, // default: 15
                shatterClass: 'asdf' // default: none
            })

            explode(cell, {
                duration: 10000, // animation duration
                shouldRemoveEl: false, // toggle for element removal from DOM after explosion. default: false
                distance: 5, // shatter travel distance - multiplier of slice size. default: 2
                color: "#FF0000",
                sliceCount: 5, // slice count in one axis. default: 10
                maxSliceSize: 10, // default: 15
                shatterClass: 'asdf' // default: none
            })
            
            console.log("explode");
        }
    }));
    

    console.log(cells)
}

const generateGrid = (event) => {
    generateButton.removeEventListener("click", generateGrid);
    const form = document.querySelector(".settings");
    const heightInput = document.querySelector("#height");
    const widthInput = document.querySelector("#width");
    form.style.display = "none";
    document.querySelector(".flag").style.display = "flex";
    console.log("generating grid")
    
    
    field.style.visibility = "visible";

    let sizeSetting = "";
    for (let i = 0; i < sizeOptions.length; i++) {
        if (sizeOptions[i].classList.contains("settings__option__selected")) {
            sizeSetting = sizeOptions[i].innerText;
            break;
        }
    }

    switch(sizeSetting) {
        case "Small":
            height = 10;
            width = 10;
            break;
        case "Medium":
            height = 15;
            width = 15;
            break;
        case "Large":
            height = 25;
            width = 25;
            break;
        case "Fit to Screen":
            height = Math.floor((screen.height-90)/(cellSize + 10));
            width = Math.floor(screen.width/(cellSize + 10));
            console.log(height + "   " + width)
            if (height * width > 900) {
                const ratio = 900/ height * width;
                height = ratio * height;
                width = ratio * width;
            }
            console.log(height + "   " + width)
            console.log(screen.height + "   " + screen.width)
            break;
        default:
            height = heightInput.value;
            width = widthInput.value;
    }

    console.log(sizeSetting);


    for (let y = 0; y < height; y++) {
        cells.push([]);
        for (let x = 0;  x < width; x++) {
    
            //new html object
            field.innerHTML += `
                <div class="cell cell--unopened">
                </div>
            `;
            cells[y].push(null);
            console.log("new cell")
        }
    }
    
    const elements = document.querySelectorAll(".cell");
    for (let y = 0; y < height; y++) {
        for (let x = 0;  x < width; x++) {
            cells[y][x] = elements[x + width * y];
        }
    }
    
    field.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    field.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    
    
    field.style.width = `${width * (cellSize + 5)}px`
    field.style.height = `${height * (cellSize + 5)}px`;
    
    
    for (let y = 0; y < height; y++) {
        grid.push([]);
        for (let x = 0;  x < width; x++) {
            grid[y].push(0);
        }
    }
    console.log("here")
    cells.forEach((row) => row.forEach((cell) => cell.addEventListener("click", generateMines)));
    
}

const onSizeOptionChange = (event) => {
    sizeOptions.forEach((option) => option.classList.remove("settings__option__selected"))
    event.currentTarget.classList.add("settings__option__selected");
}

const onDifficultyOptionChange = (event) => {
    difficultyOptions.forEach((option) => option.classList.remove("settings__option__selected"))
    event.currentTarget.classList.add("settings__option__selected");
}


generateButton.addEventListener("click", generateGrid);
sizeOptions.forEach((option) => option.addEventListener("click", onSizeOptionChange))
difficultyOptions.forEach((option) => option.addEventListener("click", onDifficultyOptionChange))

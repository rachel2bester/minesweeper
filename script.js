const field = document.querySelector(".field");




const getCoordinates = (cell, cells) => {
    for (let y = 0; y < cells.length; y++) {
        for (let x = 0; x < cells.length; x++) {
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
    //console.log(coords);

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
};

const isIn = (coords, coordsList) => {
    for (let i = 0; i < coordsList.length; i++) {
        if (coordsList[i].x === coords.x && coordsList[i].y === coords.y) {
            return true;
        }
    }
    return false;
}

const width = 20;
const height = 20;
const numOfMines = 50;
const grid = [];
const cellSize = 40;

const generateGrid = (event) => {
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


    for (let y = 0; y < width; y++) {
        for (let x = 0;  x < height; x++) {
            //new html object
            cells[y][x].innerText = grid[y][x];
            cells[y][x].classList.add(`cell--${grid[y][x] === "x" ? "mine" : grid[y][x]}`)
        }
    }

    let elements = document.querySelectorAll(".cell");
    for (let y = 0; y < width; y++) {
        for (let x = 0;  x < height; x++) {
            cells[y][x] = elements[x + width * y];
        }
    }
    console.log(document.querySelector(".cell").style.width)

    cells.forEach((row) => row.forEach((cell) => cell.addEventListener("click", onCellClick)));
    reveal(cells[click.y][click.x])
}

const onCellClick = (event) => {
    reveal(event.target)
}

const reveal = (cell) => {
    const cellClasses = cell.classList;
    if (cellClasses.contains("cell--unopened")) {
        cellClasses.remove("cell--unopened")
        cellClasses.add("cell--opened")

        if (cellClasses.contains("cell--mine")) {
            onMine()
        } else if (cellClasses.contains("cell--0")) {
            const surroundingCoords = getSurrounding(getCoordinates(cell, cells), cells.length, cells[0].length)
            surroundingCoords.forEach((coords) => reveal(cells[coords.y][coords.x]))
        }
    }
}

const onMine = () => {
    console.log("mine!")
    cells.forEach((row) => row.forEach((cell) => {
        if (cell.classList.contains("cell--unopened")) {
            cell.classList.remove("cell--unopened");
            cell.classList.add("cell--unopened-end");
        }
    }));
    console.log(cells)
}

let cells = [];

for (let y = 0; y < width; y++) {
    cells.push([]);
    for (let x = 0;  x < height; x++) {

        //new html object
        field.innerHTML += `
            <div class="cell cell--unopened">
                <div></div>
            </div>
        `;
        cells[y].push(null);
    }
}

let elements = document.querySelectorAll(".cell");
for (let y = 0; y < width; y++) {
    for (let x = 0;  x < height; x++) {
        cells[y][x] = elements[x + width * y];
    }
}
console.log(document.querySelector(".cell").style.width)

field.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
field.style.gridTemplateRows = `repeat(${height}, 1fr)`;


field.style.width = `${width * (cellSize + 5)}px`
field.style.height = `${height * (cellSize + 5)}px`;


for (let y = 0; y < width; y++) {
    grid.push([]);
    for (let x = 0;  x < height; x++) {
        grid[y].push(0);
    }
}

cells.forEach((row) => row.forEach((cell) => cell.addEventListener("click", generateGrid)));
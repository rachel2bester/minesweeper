const field = document.querySelector(".field");


//generate grid
const width = 20;
const height = 20;
const numOfMines = 50;
const grid = [];
const click ={x: 5, y: 8}
const cellSize = 40;

for (let y = 0; y < width; y++) {
    grid.push([]);
    for (let x = 0;  x < height; x++) {
        grid[y].push(0);
    }
}

grid.forEach((row) => console.log(row.join(" ")))

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
    console.log(coords);

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
    console.log(surroundingArr);
    return surroundingArr;
};

//generateMines
for (let i = 0; i < numOfMines; i++){
    let x = Math.floor(Math.random() * grid[0].length);
    let y = Math.floor(Math.random() * grid.length);
    
    while (grid[y][x] === "x") { //not click or surrounding
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

    //for each add 1
}


//for each cell
//make in html and add to field
//get html element and store in new object called cells with number and coordinates inside
//add to 




grid.forEach((row) => console.log(row.join(" ")))



const cells = [];

for (let y = 0; y < width; y++) {
    cells.push([]);
    for (let x = 0;  x < height; x++) {

        //new html object
        field.innerHTML += `
            <div class="cell cell--unopened cell--${grid[y][x] === "x" ? "mine" : grid[y][x]}"">
                <div>${grid[y][x]}</div>
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




cells.forEach((row) => row.forEach((cell) => cell.addEventListener("click", onCellClick)));
//cell.addEventListener("click", onCellClick)
//generate grid
const width = 20;
const height = 20;
const numOfMines = 20;
const grid = [];
const click ={x: 5, y: 8}

for (let y = 0; y < width; y++) {
    grid.push([]);
    for (let x = 0;  x < height; x++) {
        grid[y].push(0);
    }
}

const newMine = (grid) => {
    let x = Math.floor(Math.random() * grid[0].length);
    let y = Math.floor(Math.random() * grid.length);
    while (grid[y][x] != "x" && ) { //not 
    }
    return grid;
}

//generateMines
for (let i = 0; i < numOfMines; i++){

}

const getCell = (cells, grid, x, y) => {
    return cells[y * grid[0].length + x]
}
















let cells = document.querySelectorAll(".cell");
console.log(cells)


const onCellClick = (event) => {
    reveal(event.target)
}

const reveal = (cell) => {
    const cellClasses = cell.classList;
    if (cellClasses.contains("cell--unopened")) {
        cellClasses.remove("cell--unopened")
        cellClasses.add("cell--opened")

        if (cellClasses.contains("mine")) {
            onMine()
        } else if (cellClasses.contains("cell--0")) {
            //reveal surrounding
        }
    }
}

const getSurrounding = () => {

};

const onMine = () => {
    console.log("mine!")
    cells.forEach((cell) => {
        if (cell.classList.contains("cell--unopened")) {
            cell.classList.remove("cell--unopened");
            cell.classList.add("cell--unopened-end");
        }
    })
    console.log(cells)
}


cells.forEach((cell) => {
    cell.addEventListener("click", onCellClick);
})
const field = document.querySelector(".field");


//generate grid
const width = 20;
const height = 20;
const numOfMines = 7;
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

    //get surrounding
    //for each add 1
}


//for each cell
//make in html and add to field
//get html element and store in new object called cells with number and coordinates inside
//add to 




grid.forEach((row) => console.log(row.join(" ")))

const getCell = (cells, grid, x, y) => {
    return cells[y * grid[0].length + x]
}

const getCoordinates = (cell, cells) => {
    for (let y = 0; y < cells.length; y++) {
        for (let x = 0; x < cells.length; x++) {
            if(cells[y][x] === cell.element) {
                return {
                    x: x,
                    y: y
                }
            }
        }
    }
}

const cells = [];

for (let y = 0; y < width; y++) {
    cells.push([]);
    for (let x = 0;  x < height; x++) {

        //new html object
        field.innerHTML += `
            <div class="cell cell--opened cell--${grid[y][x] === "x" ? "mine" : grid[y][x]}"">
                <div>${grid[y][x]}</div>
            </div>
        `;

        //get html object
        let elements = document.querySelectorAll(".cell");

        const cell = {
            isMine: (grid[y][x] === "x"),
            element: elements[elements.length - 1]
        }
        cells[y].push(cell);

    }
}

console.log(document.querySelector(".cell").style.width)

field.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
field.style.gridTemplateRows = `repeat(${height}, 1fr)`;


field.style.width = `${width * (cellSize + 5)}px`
field.style.height = `${height * (cellSize + 5)}px`;


















// let cells = document.querySelectorAll(".cell");
// console.log(cells)


// const onCellClick = (event) => {
//     reveal(event.target)
// }

// const reveal = (cell) => {
//     const cellClasses = cell.classList;
//     if (cellClasses.contains("cell--unopened")) {
//         cellClasses.remove("cell--unopened")
//         cellClasses.add("cell--opened")

//         if (cellClasses.contains("mine")) {
//             onMine()
//         } else if (cellClasses.contains("cell--0")) {
//             //reveal surrounding
//         }
//     }
// }

// const getSurrounding = () => {

// };

// const onMine = () => {
//     console.log("mine!")
//     cells.forEach((cell) => {
//         if (cell.classList.contains("cell--unopened")) {
//             cell.classList.remove("cell--unopened");
//             cell.classList.add("cell--unopened-end");
//         }
//     })
//     console.log(cells)
// }


// cells.forEach((cell) => {
//     cell.addEventListener("click", onCellClick);
// })
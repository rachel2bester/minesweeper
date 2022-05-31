"use strict";

var _canvasConfetti = _interopRequireDefault(require("canvas-confetti"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var field = document.querySelector(".field");
var generateButton = document.querySelector("#generate-button");
var heightInput = document.querySelector("#height");
var widthInput = document.querySelector("#width");
var minesInput = document.querySelector("#mines");
var numOfMines = 0;
var grid = [];
var cellSize = 40;
var height = 0;
var width = 0;
var cells = [];
var config = {
  duration: 500,
  // animation duration
  color: '#FF0000',
  // background color of shatter. default: background color of target element
  distance: 2,
  // shatter travel distance - multiplier of slice size. default: 2
  sliceCount: 10,
  // slice count in one axis. default: 10
  maxSliceSize: 15,
  // default: 15
  shatterClass: 'asdf' // default: none

};

var getCoordinates = function getCoordinates(cell, cells) {
  for (var y = 0; y < cells.length; y++) {
    for (var x = 0; x < cells.length; x++) {
      if (cells[y][x] === cell) {
        return {
          x: x,
          y: y
        };
      }
    }
  }

  return 0;
};

var getSurrounding = function getSurrounding(coords, height, width) {
  var surroundingArr = []; //console.log(coords);

  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      if (!(i === 0 && j === 0) && coords.y + i >= 0 && coords.y + i < height && coords.x + j >= 0 && coords.x + j < width) {
        //if not original cell and within field
        var cellCoords = {
          x: coords.x + j,
          y: coords.y + i
        };
        surroundingArr.push(cellCoords);
      }
    }
  } //console.log(surroundingArr);


  return surroundingArr;
};

var isIn = function isIn(coords, coordsList) {
  for (var i = 0; i < coordsList.length; i++) {
    if (coordsList[i].x === coords.x && coordsList[i].y === coords.y) {
      return true;
    }
  }

  return false;
};

var generateMines = function generateMines(event) {
  var click = getCoordinates(event.target, cells); //generateMines

  for (var i = 0; i < numOfMines; i++) {
    var x = Math.floor(Math.random() * grid[0].length);
    var y = Math.floor(Math.random() * grid.length);
    var clickAndSurrounding = getSurrounding(click, height, width);
    clickAndSurrounding.push(click);

    while (grid[y][x] === "x" || isIn({
      x: x,
      y: y
    }, clickAndSurrounding)) {
      x = Math.floor(Math.random() * grid[0].length);
      y = Math.floor(Math.random() * grid.length);
    }

    grid[y][x] = "x";
    console.log("added x" + x + " y" + y);
    var surrounding = getSurrounding({
      x: x,
      y: y
    }, height, width);
    surrounding.forEach(function (coords) {
      if (!isNaN(grid[coords.y][coords.x])) {
        grid[coords.y][coords.x]++;
      }
    });
  }

  grid.forEach(function (row) {
    return console.log(row.join(" "));
  });

  for (var _y = 0; _y < width; _y++) {
    for (var _x = 0; _x < height; _x++) {
      cells[_y][_x].innerText = grid[_y][_x];

      cells[_y][_x].classList.add("cell--".concat(grid[_y][_x] === "x" ? "mine" : grid[_y][_x]));
    }
  }

  console.log("here");
  cells.forEach(function (row) {
    return row.forEach(function (cell) {
      return cell.removeEventListener("click", generateMines);
    });
  });
  cells.forEach(function (row) {
    return row.forEach(function (cell) {
      return cell.addEventListener("click", onCellClick);
    });
  });
  reveal(cells[click.y][click.x]);
};

var onCellClick = function onCellClick(event) {
  reveal(event.target);
};

var reveal = function reveal(cell) {
  var cellClasses = cell.classList;

  if (cellClasses.contains("cell--unopened")) {
    cellClasses.remove("cell--unopened");
    cellClasses.add("cell--opened");

    if (cellClasses.contains("cell--mine")) {
      onMine();
    } else if (cellClasses.contains("cell--0")) {
      var surroundingCoords = getSurrounding(getCoordinates(cell, cells), cells.length, cells[0].length);
      surroundingCoords.forEach(function (coords) {
        return reveal(cells[coords.y][coords.x]);
      });
    }
  }
};

var onMine = function onMine() {
  console.log("mine!");
  cells.forEach(function (row) {
    return row.forEach(function (cell) {
      if (cell.classList.contains("cell--unopened")) {
        cell.classList.remove("cell--unopened");
        cell.classList.add("cell--unopened-end");
      }

      if (cell.classList.contains("cell--mine")) {
        var cellBoundsCell = cell.getBoundingClientRect();
        console.log(cellBoundsCell);
        (0, _canvasConfetti["default"])({
          particleCount: 300,
          spread: 360,
          origin: {
            x: (cellBoundsCell.x + width) / screen.availWidth,
            y: (cellBoundsCell.y + height) / screen.availHeight
          },
          colors: ["#FF0000", "#FF6600", "#FFFF00", "#FF4400", "#FF0000"],
          decay: 0.999,
          startVelocity: 0.2,
          gravity: 0,
          scalar: 2,
          ticks: 900
        });
      }
    });
  });
  console.log(cells);
};

var generateGrid = function generateGrid(event) {
  generateButton.removeEventListener("click", generateGrid);
  console.log("generating grid");
  height = heightInput.value;
  width = widthInput.value;
  numOfMines = minesInput.value;
  field.style.visibility = "visible";

  for (var y = 0; y < width; y++) {
    cells.push([]);

    for (var x = 0; x < height; x++) {
      //new html object
      field.innerHTML += "\n                <div class=\"cell cell--unopened\">\n                    <div></div>\n                </div>\n            ";
      cells[y].push(null);
      console.log("new cell");
    }
  }

  var elements = document.querySelectorAll(".cell");

  for (var _y2 = 0; _y2 < width; _y2++) {
    for (var _x2 = 0; _x2 < height; _x2++) {
      cells[_y2][_x2] = elements[_x2 + width * _y2];
    }
  }

  field.style.gridTemplateColumns = "repeat(".concat(width, ", 1fr)");
  field.style.gridTemplateRows = "repeat(".concat(height, ", 1fr)");
  field.style.width = "".concat(width * (cellSize + 5), "px");
  field.style.height = "".concat(height * (cellSize + 5), "px");

  for (var _y3 = 0; _y3 < width; _y3++) {
    grid.push([]);

    for (var _x3 = 0; _x3 < height; _x3++) {
      grid[_y3].push(0);
    }
  }

  console.log("here");
  cells.forEach(function (row) {
    return row.forEach(function (cell) {
      return cell.addEventListener("click", generateMines);
    });
  });
}; // generateGrid()


window.addEventListener('load', function () {
  return console.log("hi");
});
generateButton.addEventListener("click", generateGrid);
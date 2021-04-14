let board
let cellWidth
let canvasWidth = 500
let dimensions = 4
let newCells = []

const MOVE_LEFT = -1
const MOVE_RIGHT = 1
const MOVE_UP = 2
const MOVE_DOWN = -2

function setup() {
  createCanvas(canvasWidth, canvasWidth);
  cellWidth = width / dimensions

  board = new Board(dimensions, dimensions)

  newCells = []
  board.addNumber(2)
}

function draw() {
  background(220);

  board.show()

  for(let cell of newCells) {
    cell.show(true)
  }
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) board.move(MOVE_LEFT)
  else if(keyCode === RIGHT_ARROW) board.move(MOVE_RIGHT)
  else if(keyCode === UP_ARROW) board.move(MOVE_UP)
  else if(keyCode === DOWN_ARROW) board.move(MOVE_DOWN)

}
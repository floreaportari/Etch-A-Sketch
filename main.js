const board = document.querySelector(".board");
const smallSketchBtn = document.querySelector("#small-sketch-btn");
const largeSketchBtn = document.querySelector("#large-sketch-btn");
const colorPicker = document.querySelector("#color-picker");

function calcSize(target) {
  let size = target.value;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  board.style.gridGap = "1px";

  let cells = board.querySelectorAll("div");
  cells.forEach((cell) => cell.remove());

  let cellsNum = size * size;

  for (let i = 0; i < `${cellsNum}`; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.style.border = "1px solid red";
    board.appendChild(cellDiv);

    cellDiv.addEventListener("mouseover", (e) => {
      e.stopPropagation();
      cellDiv.style.backgroundColor = colorPicker.value;
    });
  }
}

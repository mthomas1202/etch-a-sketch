function createDiv(size){
	let div = document.createElement('div');
	let grid = document.querySelector("#grid");
	let width = grid.getBoundingClientRect().width;
	let height = grid.getBoundingClientRect().height;

	div.style.height = height / size;
	div.style.width = width / size;

	div.setAttribute('class', 'cell');
	return div;
}


function createGrid(size){
	let grid = document.querySelector("#grid");
	for(let i = 0; i < size; i++){
		for(let j = 0; j < size; j++){
			grid.appendChild(createDiv(size));
		}
	}

	let cells = Array.from(document.querySelectorAll(".cell"));

	cells.forEach(cell => cell.onmouseover = function() {
		cell.style.background = getColor(paletteHasChanged);
	});
}


function createNewGrid() {
  let grid = document.querySelector('#grid');
  let rSize = prompt("Submit a number between 1 and 64");
  if (isNaN(rSize) || rSize < 1 || rSize > 64) {
    alert(`${rSize} is not valid for new grid`);
    return;
  }

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  createGrid(rSize);
}


function generateColors() {
  return '#' + Math.random().toString(16).slice(2, 8);
}
function getColor(paletteChanged){
	let color = '';
	if(paletteChanged == true){
		color = colorPicker.value;
	}
	else{
		color = generateColors();
	}

	return color;
}

let rowSize = 16;

document.onload = createGrid(rowSize);

let colorPicker = document.querySelector('#color_picker');

let randomColor = document.querySelector('#random_color');

let newGrid = document.querySelector('#new_grid');


let paletteHasChanged = false;


colorPicker.onchange = function() {
  paletteHasChanged = true;
  colorPicker.classList.add('active');
}

randomColor.onclick = function() {
  paletteHasChanged = false;
  randomColor.classList.add('active');
}

newGrid.onclick = function() {
  createNewGrid();
}
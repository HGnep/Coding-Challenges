var fieldSize;
var blockSize;
var blocksPerRow;
var numberOfMines;
var blocks = [];
var mines = [];

function setup() {
//game settings
	numberOfMines = 10;
	blocksPerRow = 10;

//setting up the field
	fieldSize = 600;
	blockSize = floor(fieldSize/blocksPerRow);
	for (var i = 0; i < blocksPerRow; i++){
		for (var j=0; j < blocksPerRow; j++) {
			blocks.push(new Block(i, j));
		}
	}
	createCanvas(fieldSize + 210, fieldSize + 10);

	//create the mines
	for (var i = 0; i < numberOfMines; i++) {
		var newMine = blocks[floor(random(blocks.length))];
		while (newMine.mine) {
			// if newMine already is a mine, pick another block
			newMine = blocks[floor(random(blocks.length))];
		}
		newMine.mine = true;

		//Update value neighbours of mine
		var neighbours = getNeighbours(newMine);
		for (var j = 0; j < neighbours.length; j++) {
			neighbours[j].value++;
		}

		mines.push(newMine);
	}
}


function draw() {
	background(210);

	strokeWeight(5);
	rect(5, 5, fieldSize, fieldSize);

	for (var i = 0; i < blocks.length; i++) {
				blocks[i].show();
	}
}


function mousePressed() {
	mouseX, mouseY
	var blockX = floor(mouseX / blockSize);
	var blockY = floor(mouseY / blockSize);

	if (blockX < blocksPerRow && blockY < blocksPerRow) {
		var index = blockX*blocksPerRow + blockY;
		var block = blocks[index];
		open(block);
	}
}


function open(block) {
	block.open = true;

	if (block.mine) {
	}
	else if (block.value === 0) {
		var neighbours = getNeighbours(block);
		for (var i = 0; i < neighbours.length; i++) {
			if (!neighbours[i].open) {
				open(neighbours[i])
			}
		}
	}
}


function getNeighbours(block) {
	var neighbours = [];
	for (var i = -1; i <= 1; i++) {
		for (var j = -1; j <= 1; j++) {
			if (i === 0 && j === 0) {
				continue
			}
			var neighbourX = block.x + i;
			var neighbourY = block.y + j;

			if (
				neighbourX >= 0 && neighbourX < blocksPerRow &&
				neighbourY >= 0 && neighbourY < blocksPerRow
			) {
				var index = neighbourX*blocksPerRow + neighbourY;
				neighbours.push(blocks[index]);
			}
		}
	}
	return neighbours;
}

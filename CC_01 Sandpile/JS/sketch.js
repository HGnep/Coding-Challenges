var pile;
var sizeSlider;
var grainsSlider;
var size
var numberOfGrains


function setup() {
	createCanvas(600, 600);
	textAlign(CENTER, CENTER);
	textSize(30);

	sizeSlider = createSlider(3, 100, 75, 2);
	grainSlider = createSlider (1, 10000, 1, 1);
}

function draw() {
	size = sizeSlider.value();
	numberOfGrains = grainSlider.value();

	console.log("size = ", size, "number of grains = ", numberOfGrains);

	createPile();

	numberOfGrains += 1;

	background(51);
	pile.show();

}

function createPile() {
	pile = new Sandpile([[numberOfGrains]]);
	for (i = 0; i < size; i++) {
		pile.grow();
	}
	pile.topple();
}

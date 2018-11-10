//module aliases
var Engine = Matter.Engine,
	Render = Matter.Render,
	World = Matter.World,
	Bodies = Matter.Bodies,
	Body = Matter.Body;


var engine;
var world;

var prevField;
var newField;

var marble;
var marbleHeight;

function setup() {
	createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;
	// Engine.run(engine);

	prevField = emptyScreen();
	newField = screen1();
	prevField.move(-height / 2);
	newField.move(height / 2);
}


function mousePressed() {
	if (marble) {
		marble.removeFromWorld();
	}
	marble = new Marble(mouseX, mouseY, 10);
	marbleHeight = marble.body.position.y;
}

var count = 0;

function draw() {
	background('rgb(150,240,120)');
	Engine.update(engine);

	//show both worlds
	prevField.show();
	newField.show();

	//if there exists a marble, we need to move and draw this
	if (marble) {
		var newHeight = marble.body.position.y;
		var dy = newHeight - marbleHeight;
		prevField.move(-dy);
		newField.move(-dy);
		marble.move(-dy);
		marble.show();
	}

	//if the previous screen is out of bounds, create a new one
	if (prevField.offScreen()) {
		count ++
		prevField.remove();
		prevField = newField;

		switch (count % 2) {
			case 0:
				console.log("even");
				newField = screen1();
				break;
			case 1:
				console.log("Odd");
				newField = screen2();
				break;
		}
		// noLoop();
		newField.move(height);
	}
}

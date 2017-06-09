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
	var options = {
		showAxes: true
	}
	marble = new Marble(mouseX, mouseY, 10, options);
	marbleHeight = marble.body.position.y;
}


function draw() {
	if (prevField.offScreen()) {
		console.log("prev OFF!");
		// noLoop();
		prevField.remove();
		prevField = newField;
		newField = screen1();
		newField.move(height);
	}
	background('rgb(150,240,120)');
	Engine.update(engine);
	prevField.show();
	newField.show();
	if (marble) {
		var newHeight = marble.body.position.y;
		var dy = newHeight - marbleHeight;
		prevField.move(-dy);
		newField.move(-dy);
		marble.move(-dy);
		marble.show();
	}
}

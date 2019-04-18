function Box(x, y, width, height, options) {
	this.width = width;
	this.height = height;
	// this.x en this.y is niet nodig, omdat die al worden opgeslagen in body.position

	this.body = Bodies.rectangle(x, y, this.width, this.height, options);
	World.add(world, this.body);
	console.log(options);
	console.log(this.body.friction);
	//OOOOH hier is de world.add!!

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		if (this.body.isStatic) {
			var color = 'rgb(10, 20, 30)'
		}
		else {
			var color = 'rgb(0, 0, 0)'
		}
		fill(color);
		stroke(color);

		rect(0, 0, this.width, this.height);
		pop();
	}

	this.move = function(dy) {
		var pos = this.body.position;
		Body.setPosition(this.body, { x: pos.x, y: pos.y + dy });
	}

	this.offScreen = function() {
		var pos = this.body.position;
		return (pos.y + this.height < 0)
	}

	this.remove = function() {
		World.remove(world, this.body)
	}
}


function Funnel(x, y, width, height, radius, options) {
	this.width = width;
	this.height = height;
	// this.x en this.y is niet nodig, omdat die al worden opgeslagen in body.position

	var leftside = Vertices.fromPath('40 0 40 20 100 20 100 80 40 80 40 100 0 50');
	var rightside = Vertices.fromPath('40 0 40 20 100 20 100 80 40 80 40 100 0 50');

	this.body = Bodies.fromVertices(x, y, leftside, options);
	World.add(world, this.body);
	//OOOOH hier is de world.add!!

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;

		var radius = 100
		push();
		translate(200, 200);
//		rotate(angle);
//		rectMode(CENTER);

		beginShape();
		vertex(0-radius, 0);
		vertex(10, 10);
		vertex(45, 80);
		vertex(0-radius-20, 0);
		endShape(CLOSE);
		pop();
	}

	this.move = function(dy) {
		var pos = this.body.position;
		Body.setPosition(this.body, { x: pos.x, y: pos.y + dy });
	}

	this.offScreen = function() {
		var pos = this.body.position;
		return (pos.y + this.height < 0)
	}

	this.remove = function() {
		World.remove(world, this.body)
	}
}

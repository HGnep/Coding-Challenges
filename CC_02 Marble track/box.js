function Box(x, y, width, height, options) {
	this.width = width;
	this.height = height;
	// this.x en this.y is niet nodig, omdat die al worden opgeslagen in body.position

	this.body = Bodies.rectangle(x, y, this.width, this.height, options);
	World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		if (this.body.isStatic) {
			fill(0);
			stroke(120);
		}
		else {
			fill(255);
			stroke(0);
		}
		rect(0, 0, this.width, this.height);
		pop();
	}

	this.move = function(dy) {
		var pos = this.body.position;
		Body.setPosition(this.body, { x: pos.x, y: pos.y + dy });
	}

	this.offScreen = function() {
		//console.log("test");
		var pos = this.body.position;
		return (pos.y + this.height < 0)
	}

	this.remove = function() {
		World.remove(world, this.body)
	}
}

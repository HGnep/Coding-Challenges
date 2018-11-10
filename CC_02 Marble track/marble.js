function Marble(x, y, radius) {
	this.radius = radius;
	// this.x en this.y is niet nodig, omdat die al worden opgeslagen in body.position

	var options = {
		friction: 0
	}

	this.body = Bodies.circle(x, y, this.radius, options);
	World.add(world, this.body);

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;

		push();
		translate(pos.x, pos.y);
		rotate(angle);

		fill(255);
		rectMode(CENTER);
		ellipse(0, 0, this.radius * 2, this.radius * 2);

		pop();
	}

	this.removeFromWorld = function() {
		World.remove(world, this.body);
	}

	this.move = function(dy) {
		var pos = this.body.position;
		Body.setPosition(this.body, { x: pos.x, y: pos.y + dy });
	}
}

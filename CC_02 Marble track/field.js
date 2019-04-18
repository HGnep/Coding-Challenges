function Field() {
	this.objects = [];
	this.lowestObject;

	this.addBorders = function(options) {
		var options = {
			friction: 0,
			isStatic: true,
			restitution: 1
		}
		west = new Box(0, height / 2, 20, height + 50, options);
		east = new Box(width, height / 2, 20, height + 50, options);
		south = new Box(width * 3/5  , height, width * 4/5 , 20, options);
		this.objects.push(east, west, south);
		this.lowestObject = south;
	}

	this.show = function() {
		for (var i = 0; i < this.objects.length; i++) {
			this.objects[i].show();
		}
	}

	this.move = function(dy) {
		for (var i = 0; i < this.objects.length; i++) {
			this.objects[i].move(dy);
		}
	}

	this.offScreen = function() {
		return this.lowestObject.offScreen();
	}

	this.remove = function() {
		for (var i = 0; i < this.objects.length; i++) {
	 		this.objects[i].remove();
		}
	}
}

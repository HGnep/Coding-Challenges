function Field() {
	this.objects = [];
	this.lowestObject;

	this.addBorders = function() {
		var options = {
			friction: 0,
			isStatic: true,
		}
		west = new Box(0, height / 2, 20, height + 50, options);
		east = new Box(width, height / 2, 20, height + 50, options);
		south1 = new Box(width * 3/5  , height, width * 4/5 , 20, options);
		south2 = new Box(width * 1/20 , height, width * 1/10, 20, options);
		//north1 = new Box(width * 3/5  , 0     , width * 4/5 , 20, options);
		//north2 = new Box(width * 1/20 , 0     , width * 1/10, 20, options);
		this.objects.push(east, west, south1);//, south2);//, north1, north2);

		this.lowestObject = south1;
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

function emptyScreen() {
	var newScreen = new Field();
	newScreen.addBorders();

	return newScreen;
}


function screen1() {

	var newScreen = new Field();
	newScreen.addBorders();

	//first skewed box
	var options = {
		friction: 0,
		isStatic: true,
		angle: PI / 12
	}
	box = new Box(width / 2 - 50, height / 3, (4/5) * width , 20, options);
	newScreen.objects.push(box);

	//second skewed box
	var options = {
	 	friction: 0,
	 	isStatic: true,
	 	angle: -PI/12
	}
	box = new Box(width / 2 + 50, 2 * height /3, (4/5) * width, 20, options);
	newScreen.objects.push(box);

	return newScreen;

}


function screen2() {
	var newScreen = new Field();
	newScreen.addBorders();

	//vertical box to keep marble in its place
	var options = {
		friction: 0,
		isStatic: true,
		angle: PI/2
	}
	box = new Box((1/5) * width - 10, 0 + (height/2) , height, 20, options);
	newScreen.objects.push(box);
	return newScreen;
}

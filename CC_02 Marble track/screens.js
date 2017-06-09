function emptyScreen() {
	var newScreen = new Field();
	newScreen.addBorders();

	return newScreen;
}


function screen1() {

	var newScreen = new Field();
	newScreen.addBorders();

	var options = {
		friction: 0,
		isStatic: true,
		angle: PI / 12
	}
	box = new Box(width / 2, height / 3, (4/5) * width , 20, options);
	newScreen.objects.push(box);

	return newScreen;
}

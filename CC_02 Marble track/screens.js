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
		friction: 0.1,
		isStatic: true,
		angle: PI / 12
	}
	var box1 = new Box(width / 2 - 50, height / 3, (4/5) * width , 20, options);
	newScreen.objects.push(box1);
	console.log(box1);
	console.log(options);

	//second skewed box
	var options = {
	 	friction: 0.1,
	 	isStatic: true,
	 	angle: -PI/12
	}
	var box2 = new Box(width / 2 + 50, (2/3) * height, (4/5) * width, 20, options);
	newScreen.objects.push(box2);

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


function screen3() {
	var newScreen = new Field();
	newScreen.addBorders();

	//first skewed box
	var options = {
		friction: 0,
		isStatic: true,
		angle: PI/12
	}
	box = new Box((1/5) * width - 10, 50 , height, 5, options);
	newScreen.objects.push(box);

	//second skewed box
	var options = {
		friction: 0,
		isStatic: true,
		angle: -PI/12
	}
	box = new Box(width - 10, 100 , height, 5, options);
	newScreen.objects.push(box);

	//third skewed box
	var options = {
		friction: 0,
		isStatic: true,
		angle: PI/6
	}
	box = new Box((2/5) * width - 10, 155 , (1/2) * height, 5, options);
	newScreen.objects.push(box);

	//horizontal part and skewed box leading to 'stairs'
	var options = {
		friction: 0,
		isStatic: true,
		angle: PI
	}
	box = new Box(width-50, 250, (1/2) * width, 5, options);
	newScreen.objects.push(box);

	var options = {
		friction: 0,
		isStatic: true,
		angle: -PI/3
	}
	box = new Box(280, 285, (1/5) * height, 5, options);
	newScreen.objects.push(box);

	//stairs
	var options = {
		friction: 0,
		isStatic: true,
		angle: PI
	}
	box = new Box(280, 250, (1/2) * width, 5, options);
//	newScreen.objects.push(box);

	var options = {
		friction: 0,
		isStatic: true,
		angle: -PI/3,
		restitution:0
	}
	box = new Box(280, 350, (1/5) * height, 5, options);
	console.log(box.restitution);
//	newScreen.objects.push(box);

	return newScreen;
}


function screen4() {
	var newScreen = new Field();
	newScreen.addBorders();

	//vertical box to keep marble in its place
	var options = {
		friction: 0,
		isStatic: true,
		angle: PI/2
	}
	box = new Box((1/5) * width - 10, 0 + (height/2) , height, 20, options);
	box = new Funnel(0, 0, 10, 20, 20, options);
	newScreen.objects.push(box);
	return newScreen;
}

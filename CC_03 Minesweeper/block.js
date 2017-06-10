function Block(x, y) {
	// x and y are block position (not coordinates)
	this.x = x;
	this.y = y;
	this.open = false;
	this.mine = false;
	this.value = 0;

	this.draw = function(displayValue) {
		strokeWeight(1);
		var posX = this.x * blockSize;
		var posY = this.y * blockSize;
		rect(posX+5, posY+5, blockSize, blockSize);
		fill(0);
		if (displayValue) {
			text(displayValue, posX + 0.5*blockSize, posY + 0.5*blockSize);
		}
	}

	this.show = function() {
		if (this.open) {
			if (this.mine) {
				fill(255, 0, 0);
				this.draw();
			}
			else {
				fill (0, 255, 0)
				this.draw(this.value);
			}
		}
		else {
			fill(140);
			this.draw();
		}
	}
}

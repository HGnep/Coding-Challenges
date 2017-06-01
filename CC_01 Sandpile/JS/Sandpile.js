function Sandpile(values) {

	this.matrix = values;
	this.size = this.matrix.length;
	this.maxValue = 3;
	this.squareSize = 500/this.size;
	this.colors = ['rgb(255, 0, 0)', 'rgb(0,255,0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)'];

	this.show = function() {
		var margin = 50;
		console.log(margin);
		var rectSize = (width-2*margin) / this.size;

		for (i = 0; i < this.size; i++) {
			for (j = 0; j < this.size; j++) {
				fill(this.colors[this.matrix[i][j]]);
				rect(j*rectSize+margin, i*rectSize+margin, rectSize, rectSize);
				fill(0);
				text(this.matrix[i][j], j*rectSize+margin, i*rectSize+margin, rectSize, rectSize);
			}
		}
	}


	this.stable = function() {
		for (i = 0; i < this.size; i++) {
			for (j = 0; j < this.size; j++) {
				if (this.matrix[i][j] > this.maxValue) {
					return false;
				}
			}
		}
		return true;
	}


	this.topple = function(values) {
		while (!this.stable()) {
			for (i = 0; i < this.size; i++) {
				for (j = 0; j < this.size; j++) {
					if (this.matrix[i][j] > this.maxValue) {
						this.matrix[i][j] -= 4;
						if (i + 1 <= this.size - 1) {
							this.matrix[i+1][j] += 1;
						}
						if (i - 1 >= 0) {
							this.matrix[i-1][j] += 1;
						}
						if (j + 1 <= this.size - 1) {
							this.matrix[i][j+1] += 1;
						}
						if (j - 1 >= 0) {
							this.matrix[i][j-1] += 1;
						}
					}
				}
			}
		}
	}

	this.grow = function() {
		newMatrix = []
		for (i = 0; i < this.size + 2; i++) {
			row = []
			for (j = 0; j < this.size + 2; j++) {
				row.push(0);
			}
			newMatrix.push(row);
		}
		for (i = 0; i < this.size; i++) {
			for (j = 0; j < this.size; j++) {
				newMatrix[i+1][j+1] = this.matrix[i][j];
			}
		}
		this.matrix = newMatrix;
		this.size += 2;
		this.squareSize = 300/this.size;
	}

}

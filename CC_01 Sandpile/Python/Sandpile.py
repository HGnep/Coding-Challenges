import Helper

class Sandpile:

	def __init__(self, matrix, size=3, maxValue=3):
		self.matrix = matrix
		self.size = size
		self.maxValue = maxValue

		self.show()
		while not self.stable():
			self.topple()
		print "Sandpile created!"


	def topple(self):
		for i in range(self.size):
			for j in range(self.size):
				if self.matrix[i][j] > self.maxValue:
					self.matrix[i][j] -= 4
					if i+1 <= self.size - 1:
						self.matrix[i+1][j] += 1
					if i-1 >= 0:
						self.matrix[i-1][j] += 1
					if j+1 <= self.size - 1:
						self.matrix[i][j+1] += 1
					if j-1 >= 0:
						self.matrix[i][j-1] += 1
					self.show()


	def show(self):
		for i in range(self.size):
			for j in range(self.size):
				print self.matrix[i][j],
			print
		print


	def stable(self):
		for i in range(self.size):
			for j in range(self.size):
				if self.matrix[i][j] > self.maxValue:
					return False
		return True


	def add(self, other):
		newMatrix = Helper.zeromatrix(self.size)
		for i in range(self.size):
			for j in range(self.size):
				newMatrix[i][j] =  self.matrix[i][j] + other.matrix[i][j]
		return Sandpile(newMatrix, self.size, self.maxValue)


	def visualise(self)
		


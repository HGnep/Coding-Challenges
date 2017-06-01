#Some generic methods

def zeromatrix(rows, columns = 0):
	if columns == 0:
		columns = rows
	matrix = []
	for i in range(rows):
		matrix.append([])
		for j in range(columns):
			matrix[i].append(0)
	return matrix

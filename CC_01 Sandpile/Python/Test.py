from Sandpile import Sandpile
import Helper

rowOne   = [ 1,  2,  3]
rowTwo   = [ 1,  4,  3]
rowThree = [ 1,  2,  3]

matrix = [rowOne, rowTwo, rowThree]

pile = Sandpile(matrix)

otherRowOne   = [ 2,  2,  3]
otherRowTwo   = [ 1,  4,  3]
otherRowThree = [ 4,  2,  3]

otherMatrix = [otherRowOne, otherRowTwo, otherRowThree]

otherPile = Sandpile(otherMatrix)

pile.add(otherPile)

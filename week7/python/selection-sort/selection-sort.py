# selection-sort.py
#  - test example for 'selection sort'
#  FN: lowestValue
#    - find the lowest value
#    - return index of lowest value
#  FN: selectionSort
#    - sort passed data
#    - loop data set & check lowest value
#    - remove lowest value per iteration
#    - return array of sorted data values

def lowestValue(data):
	low_val = data[0]
	low_index = 0
	for i in range(1, len(data)):
		if data[i] < low_val:
			low_val = data[i]
			low_index = i
	return low_index
	
def selectionSort(data):
	sortedData = []
	for i in range(len(data)):
		low_val = lowestValue(data)
		sortedData.append(data.pop(low_val))
	return sortedData
		
print(selectionSort([5, 4, 9, 2, 11, 15, 3, 8, 1, 22, 43, 37, 45, 24, 29, 32, 21]))
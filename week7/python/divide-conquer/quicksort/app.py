# app.py
# - divide and conquer
# - quick sort with recursion

# FN: Quicksort 
#- recursive call
def quicksort(data):
    if len(data) < 2:
        # base case - 0 or 1 elements already sorted...
        return data
    else:
        # recursive case
        pivot = data[0]
        # sub-array of elements less than pivot
        less_than = [i for i in data[1:] if i <= pivot]
        # sub-array of elements greater than pivot
        greater_than = [i for i in data[1:] if i > pivot]
        # return sorted data
        return quicksort(less_than) + [pivot] + quicksort(greater_than)

print(quicksort([6, 10, 4, 2, 8]))

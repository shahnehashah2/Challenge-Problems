def bubbleSort(lst):
    is_sorted = False
    while not is_sorted:
        nswaps = 0
        for ix in range(len(lst) - 1):
            a, b = lst[ix], lst[ix + 1]
            if a > b:
                lst[ix], lst[ix + 1] = b, a
                nswaps += 1
        if not nswaps:
            is_sorted = True
    return lst

print ('Bubble sorted list -', bubbleSort([5,65,23,78,1,24]))

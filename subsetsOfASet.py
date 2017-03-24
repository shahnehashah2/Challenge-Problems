import itertools

def subsetSum(S):
    x = set(itertools.combinations(S, 2))
    y = [sum(a) for a in x]
    return (12 in y)

print (subsetSum([8,10,9,2,3,4]))

# x = {(8, 3), (8, 2), (10, 4), (9, 2), (10, 2), (9, 3), (8, 10), (8, 9), (2, 3), (9, 4), (3, 4), (10, 3), (2, 4), (10, 9), (8, 4)}
# y = [11, 10, 14, 11, 12, 12, 18, 17, 5, 13, 7, 13, 6, 19, 12]
# True

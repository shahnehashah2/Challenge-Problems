"""Return the depth of the most deeply nested list"""

# def list_depth(nested_list):
#     if not isinstance(nested_list, type([])):
#         return 0
#     depth = max(list_depth(item) for item in nested_list)
#     return depth + 1


def list_depth(sequence):
    if not isinstance(sequence, list):
        return 0
    depths = []
    level = 1
    for item in sequence:
        if isinstance(item, list):
            depths.append(list_depth(item))
    if len(depths) > 0:
        return level + max(depths)
    return level


print(list_depth([1,[2,3, [4]]]))
print(list_depth([[5], '', [8, [12, 18, [2, []]], 9], 12, [3]]))
print(list_depth([]))
print(list_depth(''))
print(list_depth([5, 8, 3]))

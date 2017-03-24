""" Produce a flat list out of nested list"""
# import ipdb; ipdb.set_trace()

def flatten(nested_list, new_list):
    for item in nested_list:
        if isinstance(item, list):
            flatten(item, new_list)
        else:
            new_list.append(item)
    return new_list

print(flatten([4,[[3,2],8], [4,2], 1], []))

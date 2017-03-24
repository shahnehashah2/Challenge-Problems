"""
insert into a sorted list
"""
def insert(sorted_list, new_num):
    # find the spot in sorted_list where new_num belongs
    ins_pt = insertion_point(sorted_list, new_num)
    # create a new list with any elements left of that spot
    new_sorted_list = sorted_list[:ins_pt]
    # add new_num to our new list
    new_sorted_list.append(new_num)
    # add any elements right of that spot
    new_sorted_list += sorted_list[ins_pt:]
    return new_sorted_list

def insertion_point(sorted_list, new_num):
    """
    find the spot in sorted_list where new_num belongs
    """
    idx = 0
    while idx < len(sorted_list) and new_num > sorted_list[idx]:
        idx += 1
    # At this point, idx is the insertion_point
    return idx

def test_cases():
    assert insert([1,2,3,3,5], 4) == [1,2,3,3,4,5]
    assert insert([1,2], 3) == [1,2,3]
    assert insert([2,3], 1) == [1,2,3]
    assert insert([], 1) == [1]
    assert insert(['apple', 'banana', 'pear'], 'grapefruit') == ['apple', 'banana', 'grapefruit', 'pear']
    assert insert([-3, 0, 5], 1) == [-3, 0, 1, 5]
    assert insert([1,2,3], -3) == [-3, 1,2,3]
    print('everything\'s good!')

if __name__ == '__main__':
    test_cases()

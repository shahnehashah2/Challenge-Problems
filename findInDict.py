'''
Write a find-where function that takes a list of dicts and a 'match' dict. It
should return any items in the list that matchself.
find_where([{'name':'Brian', 'eyes': 'blue'},
            {'name':'Morgan', 'eyes': 'blue'},
            {'name':'Heidi', 'eyes': 'brown'}],
            {'eyes':'blue'})
Returns 'name':'Brian', 'eyes': 'blue' and 'name':'Morgan', 'eyes': 'blue'
'''


def matches(entry, match_dict):
    for key in match_dict:
        if entry[key] != match_dict[key]:
            return False
    return True

def find_where(all_dicts, match_dict):
    result = []
    for entry in all_dicts:
        if matches(entry, match_dict):
            result.append(entry)
    return result

print (find_where([{'item': 'Screwdriver', 'price': 5, 'color':'yellow'},
            {'item': 'Hammer', 'price': 5, 'color':'green'},
            {'item': 'Screwdriver', 'price': 6, 'color':'yellow'},
            ], {'price': 5})) #1st and 2nd

print (find_where([{'item': 'Screwdriver', 'price': 5, 'color':'yellow'},
            {'item': 'Hammer', 'price': 5, 'color':'green'},
            {'item': 'Screwdriver', 'price': 6, 'color':'yellow'},
            ], {'price': 5, 'color':'yellow'})) #Only 1st

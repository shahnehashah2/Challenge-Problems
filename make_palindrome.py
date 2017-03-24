"""Write a function that determines which character can be removed from a string to make a palindrome.
If no single character removal makes the string palindrome, or the string is already palindrome, return None
abab - 0 or 3
racecar - None
www - None
seattle - None
racecars - 7
"""

def palindrome_check(str):
    if str == str[::-1]:
        return True
    else:
        return False

def find_character(str):
    if palindrome_check(str):
        return None
    for i in range(len(str)):
        if i == 0:
            if palindrome_check(str[i+1:]):
                return i
        elif i == len(str)-1:
            if palindrome_check(str[:i]):
                return i
        else:
            if palindrome_check(str[:i]+str[i+1:]):
                return i
    return None

print(find_character('babc'))

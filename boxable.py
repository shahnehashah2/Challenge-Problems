"""It is a gift-giving joke to wrap a present up in a several nested boxes. Some people take it overboard, though, and even Santa can’t keep up. He makes a diagram like this:

((()())())
to mean:

    (           ) a box
      (    )()  containing two boxes, of which the second is empty and the first contains
       ()()     two empty boxes.
This notation works okay, but it can also produce nonsense like ()). What is that?? half a box? Or this ((()()(())()). That’s a little harder to tell, but it’s also unbalanced:
    (               ) a box
      (         )() containing two boxes, the right one of which is empty, the other one contains
        ()()( )     three boxes, the right one of which contains
             (      a single open paren! that’s not a box!
Write a program to tell if a string of parens represents a possible nesting of boxes. Here are some examples for testing:

()
Boxable
)
Unboxable
(())
Boxable

Boxable
((((()())(()()()()))()(((()))))
Unboxable
((((()())(()()()())(()()())))(((()()()))))
"""

def boxable(pattern):
    boxCount = 0
    for char in pattern:
        if char == '(':
            boxCount += 1
        elif char == ')':
            if boxCount > 0 :
                boxCount -= 1
            else:
                return 'Unboxable'
    if not boxCount:
        return 'Boxable'
    else:
        return 'Unboxable'

print (boxable('()'))
print (boxable('((((()())(()()()())(()()())))(((()()()))))'))
print (boxable('(('))
print (boxable(')('))

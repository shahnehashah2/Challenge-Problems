"""*Challenge Problem – The Switch Bridge*
Hello everyone!
Happy Monday, and an early Happy Thanksgiving!  I hope you’re all keeping up with coursework.  Remember that we’re coming up on the end, and its time to pull out the serious brain teasers.  If you haven’t yet, check out a site like HackerRank or CodeFight to get into some challenging problems to test your skills and get more practice.   Coding is not a spectator sport!
We’re going to delve into binary logic and how to figure out complicated logic problems in Python.  Binary logic is the idea of using bits to figure out how to handle a problem, and combine these decisions into logical statements.  Commonly, you’ll use this sort of logic to validate data.  For example, you may have a product in an inventory, and you need to follow rules to figure out if you’ve given it a proper shipping code before shipping it out.
*The Scenario:*
    You and your party of fellow coders have found yourself in a dungeon, facing a bottomless pit.  Interestingly, the pit is X meters across, and has several supports that are either 3 or 5 meters apart from one another.  Don’t worry about exactly what the layout is, assume that you can make any combination to get across.  After assessing the situation, you’ve found stone slabs that are three or five meters long.  You have also discovered that if you place down a slab and it goes too far past the opposite edge, the supports will disappear and cause all the slabs to fall into the abyss!
Given a set number of 3 and 5 meter bricks, write a function that will tell you if a given combination of bricks will make a valid, non-collapsing bridge.
`Def make_bridge(small, big, goal):
    ##your code here!`
Here’s some example combinations:
    `Make_bricks(3, 1, 8) -> True`
    `Make_bricks(3, 1, 7) -> False`
    `Make_bricks(3, 2, 10) -> True.`
Best of luck!  Remember if you get stuck, google and talk your way through the problem.
*Heroic:* Feeling extra-heroic today?  The above problem can be solved WITHOUT the use of loops.  Can you find a solution?
"""
import itertools

def Make_bricks(small, big, goal):
    if small*3 + big*5 < goal:
        return False
    new_list = small*[3]+big*[5]
    for n in range(0, len(new_list) + 1):
        for subset in itertools.combinations(new_list, n):
            if (sum(subset) == goal):
                return True
    return False

print (Make_bricks(6, 1, 18))   #True
print (Make_bricks(3, 1, 7))    #False
print (Make_bricks(0, 2, 10))   #True
print (Make_bricks(1, 4, 19))   #False
print (Make_bricks(1, 3, 18))   #True
print (Make_bricks(1, 3, 7))    #False
print (Make_bricks(6, 0, 18))   #True
print (Make_bricks(3, 2, 11))   #True
print (Make_bricks(1, 1, 1))    #False

import random

# The rollDice function simulates the rolling of the dice. It
# creates a 2 dimensional list: each column is a die and each
# row is a throw. The function generates random numbers 1-6
# and puts them in the list.
def rollDice(num_dice, num_rolls):

    # create a two-dimensional (num_dice by num_rolls) of zeros
    double_list = [[0 for i in range(num_dice)] for j in range(num_rolls)]

    # loop through each row and column, filling it with a random roll
    for roll in range(0, len(double_list)):
         for die in range(0, len(double_list[roll])):
             double_list[roll][die] = (int)(random.random()*6 + 1)

    return double_list


# This function takes a 2D list (which can be generated by rollDice)
# and sums the value of all the dice in each row. It returns a 1
# dimensional list with the sum of each throw.
# Example:
# double_list: [[1, 5, 6],[2, 3, 1],[1, 3, 3]]
# sumOfRoll should return: [12, 6, 7]
def sumOfRoll(double_list):
    new_list = []
    for i in double_list:
        total = 0
        for j in i:
            total += j
        new_list.append(total)
    return new_list



# Bonus function! Takes a 2D list and returns
# the number of times a person rolls Yahtzee (all dice have
# the same value). Hint: you may want to create a helper
# function that takes individual rows of the list.
def yahtzee(double_list):
    yahtzee = 0
    for i in double_list:
        for j in range(len(i)-1):
            if i[j] != i[j+1]:
                break
        if j == len(i)-2:
            print("Yahtzee!")
            yahtzee += 1
    return yahtzee

print(yahtzee([[6,5,4],[1,1,1],[2,2,2],[3,3,3],[4,4,4],[1,3,5]]))


# To play, yo'd do something like this
# dice = input("How many dice?")
# rolls = input("What is the number of rolls?")
# list = rollDice(dice, rolls)
# print("Sum of roll:", sumOfRoll(list))
print(sumOfRoll([[1, 5, 6],[2, 3, 1],[1, 3, 3]]))

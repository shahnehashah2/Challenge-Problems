import random

"""
Create a program that will play the “cows and bulls” game with the user. The game works like this:
Randomly generate a 4-digit number. Ask the user to guess a 4-digit number. For every digit that the user guessed correctly in the correct place, they have a “cow”. For every digit the user guessed correctly in the wrong place is a “bull.” Every time the user makes a guess, tell them how many “cows” and “bulls” they have. Once the user guesses the correct number, the game is over. Keep track of the number of guesses the user makes throughout the game and tell the user at the end.
Say the number generated by the computer is 1038. An example interaction could look like this:
Welcome to the Cows and Bulls Game!
Enter a number:
>>> 1234
2 cows, 0 bulls
>>> 1256
1 cow, 0 bulls
...
Until the user guesses the number.
Some additional challenges:
Print out an error if the user enters something other than a 4-digit number. Don't count this invalid guess against their total.
Correctly pluralize your output (0 cows, 1 cow, 2 cows, etc)
"""
def get_our_number():
    num = ''
    while len(num) != 4:
        j = random.randint(0,9)
        if str(j) not in num:
            num += str(j)
    print (num)
    return num

plural_cow = {0:'cows', 1:'cow', 2:'cows', 3:'cows', 4:'cows'}
plural_bull = {0:'bulls', 1:'bull', 2:'bulls', 3:'bulls', 4:'bulls'}

our_number = get_our_number()
guess_number = 0
guess_count = 0
#print (our_number)
digits = "0123456789"
count = 0
print ('Welcome to the Cows and Bulls Game!\nBulls = correct digit, correct position. Cows = correct digit, wrong position')

while str(guess_number) != our_number:
    flag = 0
    guess_number = input("Please enter a number: ")
    if not guess_number.isdigit() or len(str(guess_number)) != 4:
        print ('Wrong input')
        continue
    for digit in digits:
        count = guess_number.count(digit)
        if count > 1:
            flag = 1
    if flag == 1:
        print ('Wrong input')
        continue

    guess_number = int(guess_number)
    guess_count += 1
    if str(guess_number) == our_number:
        print ("You got it!")
        break
    num = guess_number
    cows = bulls = 0
    for i in range(4):
        num = guess_number % 10
        if our_number[3-i] == str(num):
            bulls += 1
        elif str(num) in our_number:
            cows += 1
        guess_number = guess_number // 10
    print ('{} {}, {} {}'.format(bulls, plural_bull[bulls], cows, plural_cow[cows]))
print ('Total guesses - ', guess_count)
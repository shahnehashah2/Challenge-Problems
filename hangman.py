import random

'''
def intersperse(new_word):
    print_word = ''
    for i in range(len(new_word)):
        print_word += new_word[i] + ' '
    print (print_word)
'''

with open('dictionary.txt') as f:
    word_list = [line.strip().upper() for line in f] #Remove leading and trailing whitespaces and convert to upper case.

our_word = random.choice(word_list)
guesses_left = 6

print ('Welcome to Hangman!')
print ('You have {} wrong guesses left'.format(guesses_left))
new_word = '_' * len(our_word)
print (' '.join(new_word))
#intersperse(new_word)

while new_word != our_word:
    guess = input('> ').upper()
    if not guess.isalpha() or len(guess) != 1:
        print ("That's not a good guess")
        continue

    if guess in our_word:
        for ix in range(len(our_word)):
            if guess == our_word[ix]:
                new_word = new_word[: ix] + guess + new_word[ix + 1:]
                print (' '.join(new_word))
                #intersperse(new_word)
    else:
        guesses_left -= 1
        if guesses_left > 0:
            print('You have {} wrong guesses left'.format(guesses_left))
            print (' '.join(new_word))
            #intersperse (new_word)
        else:
            print('You lose the game. The word we are looking for is {}'.format(our_word))
            break

if guesses_left:
    print('You win')

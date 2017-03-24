def intersperse(word, char):
    new_word = ''
    for i in range(len(word)):
        new_word += word[i] + char
    print (new_word)

intersperse("abc", '.')

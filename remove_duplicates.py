def compress(word):
    new_word = ''
    for i in range(len(word) - 1):
        if word[i] == word[i+1]:
            continue
        else:
            new_word += word[i]
    new_word += word[i+1]
    return new_word

print(compress("Leeeeroooy Jenkinnn"))

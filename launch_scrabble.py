def launch_scrabble(words):
    """
    All words receive 1 point. Words beginning with Qu receives 10 points. If there is a word beginning with Q but not Qu, return 0
    for complete list
    """

    points = 0
    for word in words:
        word = word.upper()
        if len(word) > 1 and word[0] == 'Q':
            if word[1] == 'U':
                points += 10
            else:
                return 0
        else:
            points += 1
    return points

print (launch_scrabble(['DOG', 'qUENCH', 'rt', 'CAT']))

class Post:
    def __init__(self, title, author, body):
        self.title = title
        self.author = author
        self.body = body
        self.likes = 0
    def like(self):
        self.likes += 1
    def __str__(self):
        return '\nTitle-'+self.title+'\nAuthor-'+self.author+'\nBody-'+str(self.body)+'\nLikes-'+str(self.likes)

class VideoPost(Post):
    def __init__(self, title, author, url):
        body = '<video url="{}"/>'.format(url)
        super().__init__(title, author, body)       # Notice that self is not passed via super
        self.url = url
        self.plays = 0
    def play(self):
        self.plays += 1
    def __str__(self):
        return super().__str__()+'\nURL-'+self.url + '\nPlayed ' + str(self.plays) + " times"

class LinkPost(Post):
    def __init__(self, title, author, url):
        body = '<Link url="{}"/>'.format(url)
        super().__init__(title, author, body)
        self.url = url
        self.clicks = 0
    def click(self):
        self.clicks += 1
    def __str__(self):
        return super().__str__()+'\nURL-'+self.url + '\nClicked ' + str(self.clicks) + " times"

class ImagePost(Post):
    def __init__(self, title, author, file_name):
        super().__init__(title, author, None)
        self.file_name = file_name
    def __str__(self):
        return super().__str__()+'\nFilename-'+self.file_name

if __name__ == "__main__":
    plain_post = Post("10 Best Albums of 2016", "Chris Bay", "Body of the album")
    vid_post = VideoPost("Little Scream - Love As a Weapon", "Chris Bay", "https://youtu.be/Tq4Vw4MB6eA")
    pic_post = ImagePost("Cats in space", "Crystal Martin", "spacecats.gif")
    url_post = LinkPost("LaunchCode's LC101", "LaunchCode Staff", "https://www.launchcode.org/lc101")

    vid_post.play()
    vid_post.play()
    plain_post.like()
    vid_post.like()
    vid_post.like()
    url_post.click()

    print(vid_post)
    print(plain_post)
    print(url_post)
    print(pic_post)

from pytube import YouTube

link = input("Enter the link: ")
yt = YouTube(link)
yt.streams.first().download()
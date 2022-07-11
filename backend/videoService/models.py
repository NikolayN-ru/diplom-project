from datetime import datetime
from django.db import models

#
# class UserTesting(models.Model):
#     isActive = models.BooleanField(default=False)
#     likeVideo = models.ForeignKey('VideoModel')
#     avatar = models.ImageField('static')
#     description = models.TextField(blank=True)
#     birth_day = models.DateField(datetime=now)
#
#
# class Video(models.Model):
#     title = models.CharField(max_length=255)
#     description = models.TextField(blank=True)
#     file = models.FileField(upload_to='video/%Y/%m/%d/')
#     comments = models.ForeignKey('Comment')
#     like = models.ManyToManyField(UserTesting)
#
#
# class Comment(models.Model):
#     user = models.ForeignKey(UserTesting)
#     text = models.TextField()
#     created = models.DateTimeField(auto_now_add=True)

from datetime import datetime

from django.core.files.storage import FileSystemStorage
from django.db import models

from mainApp import settings


# USER-MODELS SUBSCRIBE - расширение модели пользователя - PROCESSING...

# class UserTesting(models.USERModel):
#     isActive = models.BooleanField(default=False, verbose_name='активный пользователь?')
#     likeVideo = models.ForeignKey('Video', on_delete=models.PROTECT, verbose_name='понравившееся видео')
#     avatar = models.ImageField(upload_to='avatar/%Y/%m/%d/', verbose_name='аватарка')
#     description = models.TextField(blank=True, verbose_name='описание пользователя')
#     phone = models.CharField(max_length=50, verbose_name='телефон')


class Video(models.Model):
    title = models.CharField(max_length=255, verbose_name='заголовок')
    description = models.TextField(blank=True, verbose_name='описание')
    file = models.FileField(
        storage=FileSystemStorage(location=settings.MEDIA_ROOT),
        upload_to='video/%Y/%m/%d/', verbose_name='видео')
    comments = models.ForeignKey('Comment', on_delete=models.SET_NULL, null=True, blank=True, verbose_name='коментарии')
    upload_to = models.DateTimeField(auto_now_add=True)
    isPublished = models.BooleanField(default=False, verbose_name='опубликовано')
    category = models.ForeignKey('CategoryVideo', on_delete=models.PROTECT, null=True, blank=True,
                                 verbose_name='категория', related_name='get_items')
    # like = models.ManyToManyField(UserTesting, on_delete=models.SET_NULL, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Видео'
        verbose_name_plural = 'Видео'
        ordering = ['-upload_to', 'title']


class Comment(models.Model):
    text = models.TextField(verbose_name='коментарий')
    created = models.DateTimeField(auto_now_add=True, verbose_name='опубликовано')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Коментарий'
        verbose_name_plural = 'Коментарии'
        ordering = ['text', ]


class CategoryVideo(models.Model):
    name = models.TextField(verbose_name='категория')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Категория-видео'
        verbose_name_plural = 'Категории-видео'

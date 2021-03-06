from django.core.files.storage import default_storage, FileSystemStorage
from django.db import models
from django.urls import reverse

from mainApp import settings


class News(models.Model):
    title = models.CharField(max_length=150, verbose_name='наименование')
    content = models.TextField(blank=True, verbose_name='контент')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='опубликовано')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='обновлено')
    image = models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='фото')
    is_published = models.BooleanField(default=True, verbose_name='публиковать_?')
    caterogy = models.ForeignKey('Category', on_delete=models.PROTECT, null=True, related_name='get_news')
    views = models.IntegerField(default=0)
    photo = models.FileField(
        # storage=FileSystemStorage(location=settings.MEDIA_ROOT),
        upload_to='', blank=True, null=True
    )

    def my_func(self):
        return 'Hello_my-func'

    def get_absolute_url(self):
        return reverse('newsItem', kwargs={"pk": self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['-created_at', '-title']


class Category(models.Model):
    title = models.CharField(max_length=150, db_index=True, verbose_name='наименование категории')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['title']

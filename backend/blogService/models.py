from django.db import models


class News(models.Model):
    title = models.CharField(max_length=150, verbose_name='наименование')
    content = models.TextField(blank=True, verbose_name='контент')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='опубликовано')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='обновлено')
    image = models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name='фото')
    is_published = models.BooleanField(default=True, verbose_name='публиковать_?')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['-created_at', '-title']

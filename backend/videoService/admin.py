from django.contrib import admin

from .models import Video, Comment, CategoryVideo


class VideoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category', 'upload_to', 'file', 'isPublished')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    list_editable = ('isPublished',)
    list_filter = ('isPublished',)


class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'created')
    list_display_links = ('id', 'created')
    search_fields = ('text',)


admin.site.register(Video, VideoAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(CategoryVideo)

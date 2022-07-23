from rest_framework import serializers, generics

from videoService.models import *


class VideoSerializer(serializers.ModelSerializer):
    """ список видео """

    category = serializers.SlugRelatedField(slug_field="name", read_only=True)

    class Meta:
        model = Video
        fields = ('title', 'description', 'file', 'comments', 'upload_to', 'category')


class VideoNewSerializer(generics.ListAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    # permission_classes = [permissions.IsAuthenticated]


class CategorySerializer(serializers.ModelSerializer):
    """ category - видео """

    class Meta:
        model = CategoryVideo
        fields = ("pk", "name")


class CommentSerializer(serializers.ModelSerializer):
    '''COMMENTS'''

    class Meta:
        model = Comment
        fields = ("pk", "text", "created")
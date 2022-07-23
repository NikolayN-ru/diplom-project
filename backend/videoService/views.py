from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions

from videoService.serializers import *
from videoService.models import *


class VideoList(generics.ListAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    # permission_classes = [permissions.IsAuthenticated]


class VideoItem(APIView):
    """ new-item"""

    def get(self, request, pk):
        news = Video.objects.get(id=pk)
        serializer = VideoSerializer(news)
        return Response(serializer.data)


class VideoCreate(APIView):
    '''added-news-item'''
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        review = VideoSerializer(data=request.data)
        if review.is_valid():
            review.save()
        return Response(status=201)


class CategroyList(generics.ListAPIView):
    queryset = CategoryVideo.objects.all()
    serializer_class = CategorySerializer


class CategoryItemList(APIView):

    def get(self, request, pk):
        category = CategoryVideo.objects.get(id=pk)
        # videosCategory = category.get_items.all()
        serializer = CategorySerializer(category)
        return Response(serializer.data)


class CommentList(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

from django.urls import path

from .views import *

urlpatterns = [
    path('video/<int:pk>', VideoItem.as_view(), name='VideoItem'),
    path('video/', VideoList.as_view(), name='VideoList'),
    path('video/add/', VideoCreate.as_view(), name='VideoCreate'),
    path('category/', CategroyList.as_view(), name='CategroyList'),
    path('category/<int:pk>/', CategoryItemList.as_view(), name='CategoryItemList'),
    path('comments/', CommentList.as_view(), name='CommentList'),
]

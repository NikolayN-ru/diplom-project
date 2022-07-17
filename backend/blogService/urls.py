from django.urls import path

from .views import index, get_category, addNews, newsItem, HomeNews, NewsByCategory, ItemViews, CreateNews

urlpatterns = [
    # path('category/<int:categroy_id>', get_category, name='get_category'),
    path('category/<int:category_id>', NewsByCategory.as_view(), name='get_category'),
    # path('add-news/', addNews, name='addNews'),
    path('add-news/', CreateNews.as_view(), name='addNews'),
    # path('<int:pk>', newsItem, name='newsItem'),
    path('<int:pk>', ItemViews.as_view(), name='newsItem'),
    path('', HomeNews.as_view(), name='home'),
    # path('', index, name='home'),
]

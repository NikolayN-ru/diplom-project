# from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from .models import *


# class NewsSerializer(ModelSerializer):
#     class Meta:
#         model = News
#         fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    """список новостей"""

    class Meta:
        model = News
        fields = ('id', 'title', 'caterogy')


class NewSerializer(serializers.ModelSerializer):
    """full-new-item"""

    caterogy = serializers.SlugRelatedField(slug_field="title", read_only=True)

    class Meta:
        model = News
        fields = ("content", "caterogy", "created_at", "title")


class AddNewsSerializer(serializers.ModelSerializer):
    '''added-news'''

    class Meta:
        model = News
        fields: "__all__"


class AddCategorySerializer(serializers.ModelSerializer):
    '''added-category'''

    class Meta:
        model = Category
        # fields: ("title", )
        fields = "__all__"

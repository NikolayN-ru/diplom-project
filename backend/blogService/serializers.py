from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from .models import *


# class NewsSerializer(ModelSerializer):
#     class Meta:
#         model = News
#         fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('id', 'title',)

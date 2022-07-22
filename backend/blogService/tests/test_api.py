from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse

from blogService.models import News
from blogService.serializers import NewsSerializer


class BlogApiTestCase(APITestCase):
    def test_get(self):
        # url = reverse('blog')
        # print(url)
        news = News.objects.create(title='New5', content='desc5')
        response = self.client.get('/blog/')
        serializer_data = NewsSerializer([news], many=True).data
        # self.assertEqual(serializer_data, response.data)
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        # print(response.data, 'DATA_RESPONSE')

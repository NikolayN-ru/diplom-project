from urllib import response
from django.http import HttpResponse

from django.shortcuts import render

from blogService.models import News


def index(request):
    # print(request)
    # return HttpResponse('hw')
    news = News.objects.all()
    context = {
        'news': news,
        'title': 'title'
    }
    return render(request, 'blogService/index.html', context=context)

from django.shortcuts import render, redirect
from rest_framework.viewsets import ModelViewSet

from blogService.models import News, Category
from .forms import NewsForm, UserRegisterForm, UserLoginForm

from django.views.generic import ListView, DetailView, CreateView
from django.urls import reverse_lazy
from django.db.models import *
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import login, logout

from .serializers import NewsSerializer, NewSerializer, AddNewsSerializer, AddCategorySerializer
from rest_framework import generics, permissions

from rest_framework.response import Response
from rest_framework.views import APIView


def index(request):
    news = News.objects.all()
    category = Category.objects.all()

    context = {
        'news': news,
        'title': 'title',
        'category': category
    }
    return render(request, 'blogService/index.html', context=context)


class HomeNews(ListView):
    model = News
    # extra_context = {'category': Category.objects.all()}
    context_object_name = 'news'
    template_name = 'blogService/index.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        # context['category'] = Category.objects.all()
        context['category'] = Category.objects.annotate(cnt=Count('get_news')).filter(cnt__gt=0)
        return context

    def get_queryset(self):
        return News.objects.filter(is_published=True)


def get_category(request, categroy_id):
    news = News.objects.filter(caterogy_id=categroy_id)
    oneCategory = Category.objects.get(pk=categroy_id)
    category = Category.objects.all()
    return render(request, 'blogService/index.html',
                  {'news': news, 'category': category, 'oneCategory': oneCategory})


class NewsByCategory(ListView):
    model = News
    template_name = 'blogService/index.html'
    context_object_name = 'news'
    # extra_context = {'category': Category.objects.all()}
    allow_empty = False

    def get_queryset(self):
        return News.objects.filter(caterogy_id=self.kwargs['category_id'], is_published=True)

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = Category.objects.get(pk=self.kwargs['category_id'])
        context['category'] = Category.objects.all()
        return context


def addNews(request):
    if request.method == 'POST':
        form = NewsForm(request.POST)
        if form.is_valid():
            # news = News.objects.create(**form.cleaned_data)
            news = form.save()
            return redirect(news)
    else:
        form = NewsForm()
    return render(request, 'blogService/addNews.html', {'form': form})


class CreateNews(CreateView):
    form_class = NewsForm
    template_name = 'blogService/addNews.html'
    success_url = reverse_lazy('home')


def newsItem(request, pk):
    news = News.objects.get(pk=pk)
    return render(request, 'blogService/newsItem.html', {'news': news})


class ItemViews(DetailView):
    model = News
    template_name = 'blogService/newsItem.html'


def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'You uspechno zaregilis')
            return redirect('login')
        else:
            messages.error(request, 'You dopustili Ochobku')
    else:
        form = UserRegisterForm()
    return render(request, 'blogService/register.html', {'form': form})


def user_login(request):
    if request.method == 'POST':
        form = UserLoginForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')
    else:
        form = UserLoginForm()
    return render(request, 'blogService/login.html', {'form': form})


def user_logout(request):
    logout(request)
    return redirect('login')


# class NewsViewSet(ModelViewSet):
#     queryset = News.objects.all()
#     serializer_class = NewsSerializer

class NewsViewSet(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = [permissions.IsAuthenticated]


class NewsList(APIView):
    """vivod-lis-news"""

    def get(self, request):
        # news = News.objects.filter(is_published=True)
        news = News.objects.all()
        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)


class NewList(APIView):
    """ new-item"""

    def get(self, request, pk):
        news = News.objects.get(id=pk)
        serializer = NewSerializer(news)
        return Response(serializer.data)


class AddNewsCreateView(APIView):
    '''added-news-item'''

    def post(self, request):
        review = AddNewsSerializer(data=request.data)
        if review.is_valid():
            review.save()
        return Response(status=201)


class AddCategoryView(APIView):
    '''added-categroy-item'''

    def post(self, request):
        category = AddCategorySerializer(data=request.data)
        if category.is_valid():
            category.save()
        return Response(status=201)

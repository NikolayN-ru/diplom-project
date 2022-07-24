import json

from django.shortcuts import render
from django.utils.safestring import mark_safe


def index(request):
    """Главная страница"""
    return render(request, 'apiService/index.html', {})


def room(request, room_name):
    """"""
    return render(request, 'apiService/room.html', {
        'room_name_json': mark_safe(json.dumps(room_name)),
        'user_name': 'Jak'
    })
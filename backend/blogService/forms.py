import re

from django import forms
from django.contrib.auth.forms import UserCreationForm

from .models import Category, News

from django.core.exceptions import ValidationError
from django.contrib.auth.models import User

from django.contrib.auth.forms import AuthenticationForm


class UserLoginForm(AuthenticationForm):
    username = forms.CharField(label='login')
    password = forms.CharField(label='pass')


class UserRegisterForm(UserCreationForm):
    username = forms.CharField(label='imy polzovatela', widget=forms.TextInput(attrs={'class': 'form-control'}))
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')


class NewsForm(forms.ModelForm):
    # title = forms.CharField(max_length=150, label='nazvanie', widget=forms.TextInput)
    # content = forms.CharField(label='content', required=False, widget=forms.Textarea)
    # is_published = forms.BooleanField(initial=True)
    # caterogy = forms.ModelChoiceField(queryset=Category.objects.all())
    class Meta:
        model = News
        fields = ('title', 'content', 'is_published', 'caterogy')

    def clean_title(self):
        title = self.cleaned_data['title']
        if re.match(r'\d', title):
            raise ValidationError('Название не должно называться и цифры')
        return title

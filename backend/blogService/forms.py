import re

from django import forms
from .models import Category, News

from django.core.exceptions import ValidationError


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

from django import forms
from .models import Post

class PostForm(forms.ModelForm):

        class Meta:
            model = Post
            fields = (
                        'title',
                        'description',
                        'location',
                        'owned_by_company',
                        'duration',
                        'hours',
                        'experience',
                        'salary',
                        'application_link')

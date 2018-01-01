from django import forms
from .models import Post

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = (
                    'title',
                    'location',
                    'owned_by_company',
                    'duration',
                    'hours',
                    'experience',
                    'salary',
                    'application_link',
                    'area',
                    'base',
                    'description',
                    'skills',
                    'benefits',
                    )

    def __init__(self, *args, **kwargs):
        user = kwargs.pop('user')
        super(PostForm, self).__init__(*args, **kwargs)

        if user:
            self.fields['owned_by_company'].queryset = user.company_set.all()

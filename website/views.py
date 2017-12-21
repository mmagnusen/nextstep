# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect
from django import forms
from .forms import UserRegistrationForm

from django.utils import timezone
from django.shortcuts import render, get_object_or_404
from django.contrib.auth import views as auth_views
from company.models import Company
from resume.models import Resume



# Create your views here.
def dashboard(request):
    companys = Company.objects.all()
    resumes = Resume.objects.filter(owner = request.user)
    return render(request, 'website/dashboard.html', {'resumes': resumes})

def index(request):
    if not request.user.is_authenticated:
        return render(request, 'website/index.html')
    else:
        return render(request, 'website/dashboard.html')

def about_us(request):
    return render(request, 'website/about_us.html')

def contact_us(request):
    return render(request, 'website/contact_us.html')

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            userObj = form.cleaned_data
            username = userObj['username']
            email = userObj['email']
            password = userObj['password']
            if not (User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists()):
                User.objects.create_user(username, email, password)
                user = authenticate(username = username, password = password)
                login(request, user)
                return HttpResponseRedirect('/user/dashboard')
        else:
            raise forms.ValidationError('Looks like a username with that email or password already exists')
    else:
        form = UserRegistrationForm()

        return render(request, 'website/register.html', {'form' : form})

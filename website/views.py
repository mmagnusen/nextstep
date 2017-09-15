# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from django.utils import timezone
from django.shortcuts import render, get_object_or_404
from django.contrib.auth import views as auth_views

# Create your views here.
def dashboard(request):
    return render(request, 'website/dashboard.html')

def index(request):
    return render(request, 'website/index.html')

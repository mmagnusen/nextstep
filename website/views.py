# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from django.utils import timezone
from django.shortcuts import render, get_object_or_404

# Create your views here.
def index(request):
    return render(request, 'index.html')

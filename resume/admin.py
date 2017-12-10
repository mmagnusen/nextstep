# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.

from .models import Resume
from .models import SingleImage

admin.site.register(Resume)
admin.site.register(SingleImage)

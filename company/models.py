# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf import settings
from django.db import models
from django.utils import timezone

# Create your models here.
logo_small_default = 'website_defaults/logo_small_default.png'
logo_large_default = 'website_defaults/logo_large_default.png'

class Company(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL)
    name = models.CharField(max_length=200, default='Default company name')
    created_date = models.DateTimeField(default=timezone.now)
    description = models.TextField(default='Default company description')
    small_logo = models.ImageField(upload_to='user_single_images/', default=logo_small_default, blank=True)
    large_logo = models.ImageField(upload_to='user_single_images/', default=logo_large_default, blank=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name

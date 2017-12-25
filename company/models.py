# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf import settings
from django.db import models
from django.utils import timezone

# Create your models here.
class Company(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL)
    name = models.CharField(max_length=200)
    created_date = models.DateTimeField(default=timezone.now)
    description = models.TextField()

    def __str__(self):
        return self.name

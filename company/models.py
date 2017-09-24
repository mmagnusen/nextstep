# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils import timezone

# Create your models here.
class Company(models.Model):
    owner = models.ForeignKey('auth.User')
    name = models.CharField(max_length=200)
    created_date = models.DateTimeField(default=timezone.now)
    description = models.TextField()

    def __str__(self):
        return self.name

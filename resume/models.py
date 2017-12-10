# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class Resume(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    created_date = models.DateTimeField(default=timezone.now)
    content = models.TextField(default='Default resume content')

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name

class SingleImage(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    

    image_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default='sample name')
    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name

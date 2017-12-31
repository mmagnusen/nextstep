# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.crypto import get_random_string
import uuid

# Create your models here.

class Resume(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    created_date = models.DateTimeField(default=timezone.now)
    content = models.TextField(default='Start typing to create your resume...')
    share_url = models.UUIDField(default=uuid.uuid4, editable=True, unique=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name


class SlideShow(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)
    parentCV = models.ForeignKey(Resume, on_delete=models.CASCADE, default=1)


class SingleImage(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)
    parentCV = models.ForeignKey(Resume, on_delete=models.CASCADE, default=1)
    parentSlideShow = models.ForeignKey(SlideShow, on_delete=models.CASCADE, default=1)
    image = models.FileField(upload_to='user_single_images/', default=1)
    image_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default='sample name')


    def publish(self):
        self.published_date = timezone.now()
        self.save()

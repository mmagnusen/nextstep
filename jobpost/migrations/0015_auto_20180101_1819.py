# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-01-01 18:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobpost', '0014_post_area'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='benefits',
            field=models.TextField(default=b'Benefits'),
        ),
        migrations.AddField(
            model_name='post',
            name='skills',
            field=models.TextField(default=b'Skills'),
        ),
    ]
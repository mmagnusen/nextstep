# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-29 21:05
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('jobpost', '0011_post_application_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]

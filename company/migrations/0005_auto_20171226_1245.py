# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-26 12:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0004_auto_20171226_1216'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='large_logo',
            field=models.ImageField(blank=True, default=1, upload_to='user_single_images/'),
        ),
        migrations.AlterField(
            model_name='company',
            name='small_logo',
            field=models.ImageField(blank=True, default=1, upload_to='user_single_images/'),
        ),
    ]

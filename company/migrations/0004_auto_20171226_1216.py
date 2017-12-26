# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-26 12:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0003_auto_20171225_1813'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='description',
            field=models.TextField(default='Default company description'),
        ),
        migrations.AlterField(
            model_name='company',
            name='large_logo',
            field=models.ImageField(blank=True, default=1, null=True, upload_to='user_single_images/'),
        ),
        migrations.AlterField(
            model_name='company',
            name='name',
            field=models.CharField(default='Default company name', max_length=200),
        ),
        migrations.AlterField(
            model_name='company',
            name='small_logo',
            field=models.ImageField(blank=True, default=1, null=True, upload_to='user_single_images/'),
        ),
    ]

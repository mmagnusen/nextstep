# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-10 22:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0014_singleimage_parentcv'),
    ]

    operations = [
        migrations.AddField(
            model_name='singleimage',
            name='image',
            field=models.ImageField(default=1, upload_to='user_single_images/'),
        ),
    ]

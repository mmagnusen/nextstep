# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-25 18:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0002_company_logo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='company',
            old_name='logo',
            new_name='large_logo',
        ),
        migrations.AddField(
            model_name='company',
            name='small_logo',
            field=models.ImageField(default=1, upload_to='user_single_images/'),
        ),
    ]

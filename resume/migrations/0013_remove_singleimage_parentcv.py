# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-10 22:46
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0012_auto_20171210_2241'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='singleimage',
            name='parentCV',
        ),
    ]

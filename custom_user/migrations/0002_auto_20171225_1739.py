# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-25 17:39
from __future__ import unicode_literals

import custom_user.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('custom_user', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='customuser',
            managers=[
                ('objects', custom_user.models.CustomBaseUserManager()),
            ],
        ),
    ]
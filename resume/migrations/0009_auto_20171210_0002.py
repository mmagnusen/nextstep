# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-10 00:02
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0008_auto_20171209_2358'),
    ]

    operations = [
        migrations.RenameField(
            model_name='singleimage',
            old_name='owner',
            new_name='ownerOwner',
        ),
    ]

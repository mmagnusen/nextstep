# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-01-01 21:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobpost', '0015_auto_20180101_1819'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='base',
            field=models.CharField(choices=[(b'Remote possible', b'Remote possible'), (b'Onsite', b'Onsite')], default=b'Onsite', max_length=20),
        ),
    ]

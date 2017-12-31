# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-26 17:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobpost', '0003_auto_20171226_1701'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='duration',
            field=models.CharField(choices=[(b'FT', b'Fulltime'), (b'PT', b'Partime')], default=b'PMT', max_length=2),
        ),
        migrations.AlterField(
            model_name='post',
            name='hours',
            field=models.CharField(choices=[(b'PMT', b'Permanent'), (b'CNT', b'Contract')], default=b'FT', max_length=2),
        ),
    ]
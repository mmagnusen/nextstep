# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-25 13:15
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('content', models.TextField(default='Default resume content')),
                ('share_url', models.UUIDField(default=uuid.uuid4, unique=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SingleImage',
            fields=[
                ('image', models.FileField(default=1, upload_to='user_single_images/')),
                ('image_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='sample name', max_length=200)),
                ('owner', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('parentCV', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='resume.Resume')),
            ],
        ),
        migrations.CreateModel(
            name='SlideShow',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('owner', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('parentCV', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='resume.Resume')),
            ],
        ),
        migrations.AddField(
            model_name='singleimage',
            name='parentSlideShow',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='resume.SlideShow'),
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.10.dev20151005212135 on 2015-10-06 00:03
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('DJ_Profile', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='DJ_Account',
            new_name='DJ_Profile',
        ),
    ]

# Generated by Django 2.1.2 on 2018-11-10 12:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0004_auto_20181109_2104'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='postcategory',
            options={'ordering': ('-title',), 'verbose_name': 'postcategory', 'verbose_name_plural': 'postcategories'},
        ),
        migrations.AlterModelOptions(
            name='posts',
            options={'ordering': ('-name',), 'verbose_name': 'post', 'verbose_name_plural': 'posts'},
        ),
    ]
# Generated by Django 2.1.2 on 2018-12-12 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0009_posts_users_like'),
    ]

    operations = [
        migrations.AddField(
            model_name='posts',
            name='image',
            field=models.ImageField(blank=True, upload_to='posts'),
        ),
    ]
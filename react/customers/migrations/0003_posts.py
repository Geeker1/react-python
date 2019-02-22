# Generated by Django 2.1.2 on 2018-11-04 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0002_customers'),
    ]

    operations = [
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('heading', models.CharField(max_length=10)),
                ('description', models.TextField()),
            ],
        ),
    ]
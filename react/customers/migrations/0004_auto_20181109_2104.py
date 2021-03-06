# Generated by Django 2.1.2 on 2018-11-09 21:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0003_posts'),
    ]

    operations = [
        migrations.CreateModel(
            name='PostCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20)),
                ('slug', models.SlugField(max_length=100)),
                ('urlimage', models.URLField(blank=True, max_length=300, null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ('-title',),
            },
        ),
        migrations.AlterModelOptions(
            name='posts',
            options={'ordering': ('-name',)},
        ),
        migrations.AddField(
            model_name='posts',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='customers.PostCategory'),
        ),
    ]

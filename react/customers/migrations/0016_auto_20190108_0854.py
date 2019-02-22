# Generated by Django 2.1.2 on 2019-01-08 08:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0015_auto_20190107_1759'),
    ]

    operations = [
        migrations.AddField(
            model_name='taggeditem',
            name='link',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='coder', to='customers.Code'),
        ),
        migrations.AlterField(
            model_name='taggeditem',
            name='content_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.ContentType'),
        ),
    ]
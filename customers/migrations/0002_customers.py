# Generated by Django 2.1.2 on 2018-10-24 18:50

from django.db import migrations


def create_data(apps, schema_editor):
    Customer = apps.get_model('customers', 'Customer')
    Customer(first_name="Customer 001", 
    	last_name="Customer 001", 
    	email="customer001@email.com", 
    	phone="00000000", 
    	address="Customer 000 Address", 
    	description= "Customer 001 description").save()

class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0001_initial'),
    ]

    operations = [
    	migrations.RunPython(create_data),
    ]

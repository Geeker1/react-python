from django.db import models
from django.contrib.auth.models import User
# Create your models here.
from django.contrib.contenttypes.fields import GenericRelation,GenericForeignKey
from django.conf import settings
from django.contrib.contenttypes.models import ContentType
from django.conf import settings
from .fields import OrderField
from django.shortcuts import reverse
from django.template.loader import render_to_string



class Person(models.Model):
	first_name = models.CharField(max_length=200,blank=True,null=True)
	last_name = models.CharField(max_length=200,blank=True,null=True)
	email = models.EmailField(blank=True,null=True)
	phone = models.CharField(max_length=20,blank=True,null=True)
	address = models.TextField(blank=True,null=True)
	description = models.TextField(blank=True,null=True)
	createdAt = models.DateTimeField(auto_now_add=True)
	user = models.ForeignKey(User,related_name='profile_user',on_delete=models.CASCADE,
		blank=True,null=True)

	def __str__(self):
		return self.first_name

class PostCategory(models.Model):
	title = models.CharField(max_length=20)
	slug = models.SlugField(max_length=100, db_index=True)
	urlimage = models.URLField(max_length=300, blank=True, null=True)
	created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	class Meta:
		ordering = ('-title',)
		verbose_name = 'postcategory'
		verbose_name_plural = 'postcategories'

class Posts(models.Model):
	name = models.CharField(max_length=20)
	owner = models.ForeignKey(User, related_name='post_user',
		on_delete=models.CASCADE, null=True)
	heading = models.CharField(max_length=10)
	description = models.TextField()
	category = models.ForeignKey(PostCategory, 
		blank=True, 
		null=True,
		on_delete=models.CASCADE
		)
	users_like = models.ManyToManyField(settings.AUTH_USER_MODEL,
		related_name='images_liked',
		blank=True)
	image = models.ImageField(upload_to='posts',blank=True)

	def __str__(self):
		return self.name

	class Meta:
		ordering = ('-name',)
		verbose_name = 'post'
		verbose_name_plural = 'posts'

class Status(models.Model):
	pass

class StatusCategory(models.Model):
	pass



from django.shortcuts import render,get_object_or_404, redirect

# Create your views here.
from .serializers import PostSerializer,UserSerializer,\
UserSerializerWithToken
from django.apps import apps

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, detail_route
from django.http import HttpResponseRedirect
from django.views.generic.base import TemplateResponseMixin,View

from .models import Posts

from rest_framework import generics,permissions,status
from rest_framework import viewsets
from knox.models import AuthToken
from django.forms.models import modelform_factory
from django.contrib.contenttypes.forms import generic_inlineformset_factory





class PostViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Posts.objects.all()
	serializer_class = PostSerializer

	@detail_route(methods=['put'],)
	def like(self, request, *args, **kwargs):
		post = self.get_object()
		print(request.user)
		if(request.user not in post.users_like.all()):
			post.users_like.add(request.user)
			post_serializer = PostSerializer(post).data
			print(post_serializer)
			return Response({'like':'liked'})
		else:
			post.users_like.remove(request.user)
			post_serializer = PostSerializer(post).data
			print(post_serializer)
			return Response({'like': 'unliked'})

class PostList(generics.ListCreateAPIView):
	permission_classes = (permissions.AllowAny,)
	serializer_class = PostSerializer
	queryset = Posts.objects.all()

	

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
	permission_classes = (permissions.AllowAny,)
	serializer_class = PostSerializer
	queryset = Posts.objects.all()

@api_view(['GET'])
def empty(request):
	return Response({})

@api_view(['GET'])
def current_user(request):
	"""
	Determine the current user by their token and return their data
	"""

	serializer = UserSerializer(request.user)
	return Response(serializer.data)

class UserCreate(APIView):
	""" Create a new user """
	permission_classes = (permissions.AllowAny,)

	def post(self, request, format=None):
		serializer = UserSerializerWithToken(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


"""class RegistrationAPI(generics.GenericAPIView):
	serializer_class = CreateUserSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		return Response({
			'user': UserSerializer(user, 
				context=self.get_serializer_context()).data,
			'token': AuthToken.objects.create(user)
			})

class LoginAPI(generics.GenericAPIView):
	serializer_class = LoginSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.validated_data

		return Response({
			"user": UserSerializer(
				user, context=self.get_serializer_context()).data,
			"token": AuthToken.objects.create(user)
			})

class UserAPI(generics.RetrieveAPIView):
	permission_classes = [IsAuthenticated]
	serializer_class = UserSerializer

	def get_object(self):
		return self.request.user
"""
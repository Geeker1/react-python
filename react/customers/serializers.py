from rest_framework import serializers
from .models import Posts
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class PostSerializer(serializers.ModelSerializer):

	class Meta:
		model = Posts
		fields = ('pk',
			'name',
			'heading',
			'description','category','users_like','image')
		depth = 1
		extra_kwargs = {'image': {'required':True}}

"""class CreateUserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id','username','password')
		extra_kwargs = {'password': {'write_only': True}}

	def create(self, validated_data):
		user = User.objects.create_user(validated_data['username'],
			None,validated_data['password'])

		return user"""

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('username',)

class UserSerializerWithToken(serializers.ModelSerializer):
	token = serializers.SerializerMethodField()
	password = serializers.CharField(write_only=True)


	def get_token(self, obj):
		jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
		jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

		payload = jwt_payload_handler(obj)
		token = jwt_encode_handler(payload)

		return token


	def create(self, validated_data):
		password = validated_data.pop('password', None)
		instance = self.Meta.model(**validated_data)
		if password is not None:
			instance.set_password(password)
		instance.save()
		return instance

	class Meta:
		model = User
		fields = ('token', 'username', 'password')
		

"""class LoginSerializer(serializers.Serializer):
	username = serializers.CharField()
	password = serializers.CharField()

	def validate(self, data):
		user = authenticate(**data)
		if user and user.is_active:
			return user

		raise serializers.ValidationError(
			"Unable to Login with provided credentials"
		)
"""
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Tweet, Like,Person


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ('id', 'author', 'tweet')
        

class TweetSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Tweet
        fields = ('id', 'text', 'owner', 'type', 'likes_count', 'comments_count', 'comments', 'created_at', 'modified_at', 'image')
        read_only_fields = ('created_at', 'modified_at')


class UserSerializer(serializers.ModelSerializer):
    tweets = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Tweet.objects.all()
    )

    class Meta:
        model = User
        fields = ('id', 'username', 'tweets')


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('id', 'username', 'password', 'email', 'bio', 'profile_pic', 'followers', 'following', 'tweets', 'likes')
from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User


class Person(User):
    bio = models.CharField(max_length=500, blank=True)
    username = models.CharField(max_length=50, unique=True, primary_key=True)
    password = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    last_login = models.DateTimeField(auto_now=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    followers = models.ManyToManyField(
        'self', related_name='followers', symmetrical=False)
    following = models.ManyToManyField(
        'self', related_name='following', symmetrical=False)
    tweets = models.ForeignKey(
        'Tweet', on_delete=models.CASCADE, null=True, blank=True)
    likes = models.ForeignKey(
        'Like', on_delete=models.CASCADE, null=True, blank=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'password']
    profile_pic = models.ImageField(upload_to='profile_pics', blank=True)

    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True


class Like(models.Model):
    tweet = models.ForeignKey('Tweet',
                              related_name='like',
                              on_delete=models.CASCADE)
    author = models.ForeignKey('Users',
                               related_name='author',
                               on_delete=models.CASCADE)


class Tweet(models.Model):
    id = models.IntegerField(primary_key=True, unique=True, auto_created=True)
    text = models.CharField(max_length=140)
    owner = models.ForeignKey('Users',
                              related_name='owner',
                              on_delete=models.CASCADE)
    type = models.CharField(max_length=50)
    likes_count = models.IntegerField(default=0)
    comments_count = models.IntegerField(default=0)
    comments = models.ForeignKey('Comment',
                                 related_name='comments',
                                 on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='images', blank=True)

    def __str__(self):
        return self.text


@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

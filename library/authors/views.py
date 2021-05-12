from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User
from .models import Author
from .serializers import AuthorModelSerializer,UserMainModelSerializer


class AuthorModelViewSet(ModelViewSet):
   queryset = Author.objects.all()
   serializer_class = AuthorModelSerializer


class UserMainModelViewSet(ModelViewSet):
   queryset = User.objects.all()
   serializer_class = UserMainModelSerializer
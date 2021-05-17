from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from .models import User
from .serializers import UserMainModelSerializer


# class AuthorModelViewSet(ModelViewSet):
#    queryset = Author.objects.all()
#    serializer_class = AuthorModelSerializer


class UserMainModelViewSet(ModelViewSet):
   queryset = User.objects.all()
   serializer_class = UserMainModelSerializer
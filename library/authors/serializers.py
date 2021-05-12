from rest_framework.serializers import HyperlinkedModelSerializer,ModelSerializer,ReadOnlyField

from .models import Author
from django.contrib.auth.models import User



class AuthorModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class UserMainModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email')
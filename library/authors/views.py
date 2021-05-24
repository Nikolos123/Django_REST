from rest_framework.viewsets import *

from .models import User
from .serializers import UserMainModelSerializer
from rest_framework.generics import *
from rest_framework.mixins import *


class UserMainModelViewSet(ListModelMixin,RetrieveModelMixin,GenericViewSet):
   queryset = User.objects.all()
   serializer_class = UserMainModelSerializer
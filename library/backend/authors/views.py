from rest_framework.viewsets import *

from .models import User
from .serializers import UserMainModelSerializer,UserMainModelSerializerV1,UserMainModelSerializerV2
from rest_framework.generics import *
from rest_framework.mixins import *


class UserMainModelViewSet(ListModelMixin,RetrieveModelMixin,CreateAPIView,GenericViewSet):
   queryset = User.objects.all()
   def get_serializer_class(self):
      if self.request.version == '2.0':
         return UserMainModelSerializerV2
      return  UserMainModelSerializerV1
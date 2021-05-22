from rest_framework.viewsets import ModelViewSet

from .models import User
from .serializers import UserMainModelSerializer


class UserMainModelViewSet(ModelViewSet):
   queryset = User.objects.all()
   serializer_class = UserMainModelSerializer
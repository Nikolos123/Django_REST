from rest_framework.viewsets import ModelViewSet

from .models import Project,Todo
from .serializers import TodoMainModelSerializer,ProjectMainModelSerializer


class TodoMainModelViewSet(ModelViewSet):
   queryset = Todo.objects.all()
   serializer_class = TodoMainModelSerializer

class ProjectMainModelViewSet(ModelViewSet):
   queryset = Project.objects.all()
   serializer_class = ProjectMainModelSerializer



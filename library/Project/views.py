from rest_framework.viewsets import ModelViewSet

from .models import Project, Todo
from .serializers import TodoMainModelSerializer, ProjectMainModelSerializer
from rest_framework.pagination import *
from rest_framework.generics import *


# class ProjectLimitOffsetPagination(LimitOffsetPagination):
#     default_limit = 10

#
# class TodoLimitOffsetPagination(LimitOffsetPagination):
#     default_limit = 20


class TodoMainModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoMainModelSerializer
    # pagination_class = TodoLimitOffsetPagination
    filterset_fields = ['project']
    search_fields = ['username', 'email']

    def destroy(self, request, *args, **kwargs):
        todo = Todo.objects.get(id=int(kwargs.get('pk')))
        todo.active = False
        todo.save()
        serializer= TodoMainModelSerializer(todo)
        return Response(serializer.data)


class ProjectMainModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectMainModelSerializer
    # pagination_class = ProjectLimitOffsetPagination
    filterset_fields = ['name']

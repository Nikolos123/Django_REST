from rest_framework.serializers import ModelSerializer

from .models import Todo,Project



class ProjectMainModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ('name','users','url')


class TodoMainModelSerializer(ModelSerializer):
    class Meta:
        model = Todo
        fields = ('project','comment','create','update','user','active')

# import graphene
#
# class Query(graphene.ObjectType):
#     hello = graphene.String(default_value="Hi!")
#
# schema = graphene.Schema(query=Query)


import graphene
from graphene_django import DjangoObjectType
from backend.authors import  User
from backend.Project.models import  Project,Todo

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'


class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)

    def resolve_all_users(root, info):
        return User.objects.all()

    all_todos = graphene.List(TodoType)

    def resolve_all_todos(root, info):
        return Todo.objects.all()

    all_projects = graphene.List(ProjectType)

    def resolve_all_projects(root, info):
        return Project.objects.all()







schema = graphene.Schema(query=Query)


# script for homework
# {
#     allTodos
# {
#     id
#     project
#         {id
#         name
#         users
#             {
#             id
#             email
#             username
#             }}
#
# }
# }
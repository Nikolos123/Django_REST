from django.contrib import admin
from .models import Project,Todo
# Register your models here.

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name','url')

@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ('project','comment','create','update','user','active')
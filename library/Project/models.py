from django.db import models
from authors.models import User


# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=128, verbose_name='Project name', unique=True)
    users = models.ManyToManyField(User)
    url = models.URLField(verbose_name='Link', blank=True)

    def __str__(self):
        return f'{self.name}'


class Todo(models.Model):
    project = models.ForeignKey(Project, related_name='project', on_delete=models.CASCADE)
    comment = models.TextField(verbose_name='текст', max_length=256, blank=True)
    create = models.DateTimeField(verbose_name='создан', auto_now_add=True)
    update = models.DateTimeField(verbose_name='обновил', auto_now=True)
    user = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    active = models.BooleanField(verbose_name='активный', default=True)


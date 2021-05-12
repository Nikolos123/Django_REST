from django.db import models
from django.contrib.auth.models import User
# from django.contrib.auth.models import AbstractUser


# Create your models here.

User._meta.get_field('email')._unique = True
class Author(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    brithday_year = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


# class User(AbstractUser):
#     activation_key = models.CharField(max_length=128, blank=True)



from django.db import models

from django.contrib.auth.models import AbstractUser



class Author(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    brithday_year = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class User(AbstractUser):
     email = models.CharField(max_length=64,verbose_name='email',unique=True)



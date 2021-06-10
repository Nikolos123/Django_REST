from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
     email = models.EmailField(max_length=64,verbose_name='email',unique=True)


     # class Meta:
     #      swappable = 'AUTH_USER_MODEL'
     #
     # def __str__(self):
     #
     #      return f'{self.username}'

from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
     email = models.CharField(max_length=64,verbose_name='email',unique=True)



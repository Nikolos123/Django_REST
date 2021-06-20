from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
# Register your models here.

admin.site.register(User, UserAdmin)

# @admin.register(User)
# class PostAdmin(admin.ModelAdmin):
#     list_display = ('username','first_name', 'last_name', 'email')


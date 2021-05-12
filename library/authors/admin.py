from django.contrib import admin
from .models import Author
# Register your models here.

@admin.register(Author)
class PostAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'brithday_year')

# @admin.register(User)
# class PostAdmin(admin.ModelAdmin):
#     list_display = ('username','first_name', 'last_name', 'email')

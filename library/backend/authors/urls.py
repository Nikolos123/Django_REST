from django.urls import path
from .views import UserMainModelViewSet

app_name = 'authors'
urlpatterns = [
    path('', UserMainModelViewSet.as_view({'get': 'list'}))
]
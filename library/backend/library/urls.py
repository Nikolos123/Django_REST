"""library URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from rest_framework.permissions import AllowAny
from rest_framework.routers import DefaultRouter
from authors.views import UserMainModelViewSet
from Project.views import TodoMainModelViewSet,ProjectMainModelViewSet
from rest_framework.authtoken import views
from graphene_django.views import GraphQLView
from django.views.generic import TemplateView

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="Users",
      default_version='1.0',
      description="some project",
      contact=openapi.Contact(email="admin@admin.local"),
      license=openapi.License(name="MIT License"),
   ),
   public=True,
   permission_classes=(AllowAny,)
)


router = DefaultRouter()
router.register('user', UserMainModelViewSet)
router.register('project', ProjectMainModelViewSet)
router.register('todo', TodoMainModelViewSet)

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token),
    path('api/users/1.0/', include('authors.urls', namespace='1.0')),
    path('api/users/2.0/', include('authors.urls', namespace='2.0')),
    path("graphql/", GraphQLView.as_view(graphiql=True)),

    # re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    path('', TemplateView.as_view(template_name='index.html')),

]
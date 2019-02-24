"""react URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
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
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token
from customers import views
from django.conf import settings

app_name = 'customers'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/current_user', views.current_user),
    path('empty/', views.empty),
    path('api/sign-user', views.UserCreate.as_view()),
    path('api/posts', views.PostList.as_view()),
    path('api/posts/<int:pk>', views.PostDetail.as_view()),
    path('token-auth/', obtain_jwt_token),
    path('api-token-verify',verify_jwt_token),
    path('router/', include('customers.urls')),
]
"""
    path('api/auth/register', views.RegistrationAPI.as_view()),
    path('api/auth/login', views.LoginAPI.as_view()),
    path('api/auth/user', views.UserAPI.as_view()),
    path('api/auth', include('knox.urls')),"""
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
    document_root=settings.STATICFILES_DIRS)
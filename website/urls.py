from django.conf.urls import url
from . import views
from .views import register

urlpatterns = [
        url(r'^user/register/', views.register, name='register'),
        url(r'^user/dashboard/', views.dashboard, name='dashboard'),
        url(r'^$', views.index, name='index'),


    ]

from django.conf.urls import url
from . import views

urlpatterns = [
        url(r'^user/dashboard/', views.dashboard, name='dashboard'),
        url(r'^$', views.index, name='index'),


    ]

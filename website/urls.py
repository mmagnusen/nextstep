from django.conf.urls import url
from . import views

urlpatterns = [
        url(r'^site/about_us/', views.about_us, name='about_us'),
        url(r'^site/contact_us/', views.contact_us, name='contact_us'),
        url(r'^user/register/', views.register, name='register'),
        url(r'^user/dashboard/', views.dashboard, name='dashboard'),
        url(r'^$', views.index, name='index'),

    ]
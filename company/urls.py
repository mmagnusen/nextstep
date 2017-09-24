from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^(?P<pk>\d+)/edit/$', views.company_edit, name='company_edit'),
    url(r'^new/$', views.company_new, name='company_new'),
    url(r'^(?P<pk>\d+)/$', views.company_detail, name='company_detail'),
]

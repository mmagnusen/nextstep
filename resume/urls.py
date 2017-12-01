from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^resume/(?P<pk>\d+)/edit/$', views.resume_edit, name='resume_edit'),
    url(r'^resume/new/$', views.resume_new, name='resume_new'),
    url(r'^resume/(?P<pk>\d+)/$', views.resume_detail, name='resume_detail'),
    url(r'^$', views.resume_list, name='resume_list'),

]
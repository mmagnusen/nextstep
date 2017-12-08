from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^resume/(?P<pk>\d+)/save/$', views.resume_save, name='resume_save'),
    url(r'^resume/(?P<pk>\d+)/delete/$', views.resume_delete, name='resume_delete'),
    url(r'^resume/(?P<pk>\d+)/update/$', views.resume_update, name='resume_update'),
    url(r'^resume/(?P<pk>\d+)/$', views.resume_detail, name='resume_detail'),
    url(r'^resume/new/$', views.resume_new, name='resume_new'),
    url(r'^$', views.resume_list, name='resume_list'),

]

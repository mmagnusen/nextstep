from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^resume/(?P<pk>\d+)/image_save/$', views.single_image_save, name='single_image_save'),
    url(r'^resume/(?P<pk>\d+)/no_permission/$', views.resume_save, name='resume_no_permission'),
    url(r'^resume/(?P<pk>\d+)/unpack_images/$', views.unpack_images, name='unpack_images'),
    url(r'^resume/(?P<pk>\d+)/create_slide_show/$', views.create_slide_show, name='create_slide_show'),
    url(r'^resume/(?P<pk>\d+)/save/$', views.resume_save, name='resume_save'),
    url(r'^resume/(?P<pk>\d+)/delete/$', views.resume_delete, name='resume_delete'),
    url(r'^resume/(?P<pk>\d+)/update/$', views.resume_update, name='resume_update'),
    url(r'^resume/(?P<pk>\d+)/$', views.resume_detail, name='resume_detail'),
    url(r'^resume/(?P<share_url>[-\w]+)/share/populate/$', views.resume_populate, name='resume_populate'),
    url(r'^resume/(?P<share_url>[-\w]+)/share/$', views.resume_share, name='resume_share'),
    url(r'^resume/new/$', views.resume_new, name='resume_new'),
    url(r'^$', views.resume_list, name='resume_list'),

]

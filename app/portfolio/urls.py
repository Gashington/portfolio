from django.conf.urls import patterns, url

from app.portfolio import views

urlpatterns = patterns('app.service.views',
    url(r'^portfolio/$', views.projects_list, name='projects_list'),
)

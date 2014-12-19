from django.conf.urls import patterns, include, url
from app.loginsys import views

urlpatterns = patterns('app.loginsys.views',
                       (r'^login/$', views.login),

)

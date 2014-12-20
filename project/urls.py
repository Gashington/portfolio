from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView
from django.contrib import admin
from django.conf import settings
urlpatterns = patterns('',
                       (r'^auth/', include('app.loginsys.urls')),
                       (r'', include('app.portfolio.urls', namespace='portfolio')),
                       (r'^$', TemplateView.as_view(template_name='index.html')),
                       # Examples:
                       # url(r'^$', 'project.views.home', name='home'),
                       # url(r'^blog/', include('blog.urls')),

                       url(r'^admin/', include(admin.site.urls)),
)

if settings.DEBUG:
    # static files (images, css, javascript, etc.)
    urlpatterns += patterns('',  (r'^media/(?P<path>.*)$',
                                  'django.views.static.serve',
                                  {'document_root': settings.MEDIA_ROOT}))

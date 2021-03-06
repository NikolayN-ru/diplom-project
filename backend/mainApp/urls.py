from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="MY_API_VIDEO_HOSTING",
        default_version='v0.00000001',
        description="NO description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="NO"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),  # http://localhost:8000/api-auth/login/
    path('api1/', include('videoService.urls')),
    path('blog/', include('blogService.urls')),
    path('__debug__/', include('debug_toolbar.urls')),
    path('', include('apiService.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

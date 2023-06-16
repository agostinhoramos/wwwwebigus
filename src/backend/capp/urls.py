import sys
from django.urls import path

from django.conf import settings
from rest_framework import routers
from django.urls.conf import include
from django.conf.urls.static import static

from capp.views import *

urlpatterns = [
    path('v1/auth/register', RegisterView, name="Auth Register"),
    path('v1/show/user', UserView, name="View User"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
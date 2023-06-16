from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import *

class LogLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = LOG_LOCATION
        fields = [
            'country', 'address', 'state', 'city', 'zip',
            'coord_lat', 'coord_lon', 'changed_at',
            'verified'
        ]

class EntityUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ENTITY_USER
        fields = [
            'last_name', 'first_name', 'photo', 'gender', 'phone', 
            'email', 'birthday', 'username', 'auth_provider', 'password',
            'default_lang', 'created_at', 'changed_at', 'accept_tos', 'fk_location'
        ]
        extra_kwargs = {
            'password' : {'write_only':True}
        }
#!/usr/bin/python3

from rest_framework import viewsets, response, status
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
import io, jwt, sys, datetime, json, math

from dotenv import dotenv_values
_env = dotenv_values(".env.local")

from capp.lib.basic import *
from capp.lib.auth import *
from capp.serializers import *
from capp.models import *

@api_view(['POST'])
def RegisterView(request):
    response = {}
    serializer = EntityUserSerializer(data=request.data)
    user = ENTITY_USER.objects.filter(email=serializer.initial_data['email'])
    if user.exists():
        response['success'] = False
        response['error'] = ['user_already_exist']
        return Response(response) # , status=status.HTTP_401_UNAUTHORIZED

    if serializer.is_valid():
        serializer.save()
        response = Response()

        email = request.data['email']
        user = ENTITY_USER.objects.filter(email=email).first()
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60*24*25),
            'iat': datetime.datetime.utcnow()
        }
        token = jwt.encode(payload, _env['AUTH_SECRET'],
                            algorithm='HS256')
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {'success': True, 'data': serializer.data}

        return response

@api_view(['GET'])
def UserView(request):

    uid = user_authentication(request=request)
    user = ENTITY_USER.objects.filter(id=uid)

    if user and (not user.exists()):
        return Response({}, status=status.HTTP_401_UNAUTHORIZED)

    serializer = EntityUserSerializer(user.first())

    return Response(serializer.data)
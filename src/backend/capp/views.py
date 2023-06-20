#!/usr/bin/python3

from rest_framework import viewsets, response, status
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
import io, jwt, sys, datetime, json, math

from django.db.models import Q

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
    
    print(request.data, request.data.get("email"))
    
    user = ENTITY_USER.objects
    if request.data.get("email"):
        user = user.filter(email=serializer.initial_data['email'])
    if request.data.get("phone"):
        user = user.filter(phone=serializer.initial_data['phone'])
    
    if user.exists():
        response['success'] = False
        response['error'] = ['user_already_exist']
        return Response(response) # , status=status.HTTP_401_UNAUTHORIZED

    if serializer.is_valid():
        serializer.save()
        response = Response()

        if request.data.get("phone"):
            phone = request.data['phone']
            user = ENTITY_USER.objects.filter(phone=phone).first()
            
        if request.data.get("email"):
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
    
@api_view(['POST'])
def LoginView(request):
    response = {}
    response['success'] = True
    response['error'] = []
    
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    
    if not (username or email) or not password:
        response['success'] = False
        response['error'].append('invalid_credentials')
        return Response(response)
    
    data = {"email":email}
    serializer = EntityUserSerializer(data=data)
    user = ENTITY_USER.objects.filter(email=serializer.initial_data['email']).first()
    
    if user is None:
        data = {"username":username}
        serializer = EntityUserSerializer(data=data)
        user = ENTITY_USER.objects.filter(username=serializer.initial_data['username']).first()
        if user is None:
            response['success'] = False
            response['error'].append('user_pass_wrong')
            return Response(response)
    
    response['success'] = True

    if user is None:
        response['success'] = False
        response['error'].append('user_pass_wrong')
        return Response(response)

    if decrypt(user.password) != password:
        response['success'] = False
        response['error'].append('user_pass_wrong')
        return Response(response)

    if request.COOKIES.get('jwt'):
        response['success'] = False
        response['error'].append('already_authenticated')
        return Response(response)

    response = Response()

    payload = {
        'id': user.id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60*24*25),
        'iat': datetime.datetime.utcnow()
    }

    token = jwt.encode(payload, _env['AUTH_SECRET'],
                        algorithm='HS256')

    response.set_cookie(key='jwt', value=token, max_age=3600, secure=True, httponly=True)
    response.data = {'success': True}
    return response

@api_view(['POST'])
def AuthTokenView(request):
    response = {}
    response['success'] = True
    response['error'] = []
    
    username = request.data.get('username')
    email = request.data.get('email')
    token = request.data.get('token')
    
    if not (username or email):
        response['success'] = False
        response['error'].append('invalid_credentials')
        return Response(response)
    
    data = {"email":email}
    serializer = EntityUserSerializer(data=data)
    user = ENTITY_USER.objects.filter(email=serializer.initial_data['email']).first()
    
    if user is None:
        data = {"username":username}
        serializer = EntityUserSerializer(data=data)
        user = ENTITY_USER.objects.filter(username=serializer.initial_data['username']).first()
        if user is None:
            response['success'] = False
            response['error'].append('user_pass_wrong')
            return Response(response)
    
    response['success'] = True

    if user is None:
        response['success'] = False
        response['error'].append('user_pass_wrong')
        return Response(response)

    if request.COOKIES.get('jwt'):
        response['success'] = False
        response['error'].append('already_authenticated')
        return Response(response)

    response = Response()

    payload = {
        'id': user.id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60*24*25),
        'iat': datetime.datetime.utcnow()
    }

    token = jwt.encode(payload, _env['AUTH_SECRET'],
                        algorithm='HS256')

    response.set_cookie(key='jwt', value=token, max_age=3600, secure=True, httponly=True)
    response.data = {'success': True}
    return response

@api_view(['GET'])
def CheckIfUserExist(request, user_context):
    response = {}
    data = {"email": user_context, "username": user_context}  # Include username in the data
    serializer = EntityUserSerializer(data=data)
    user = ENTITY_USER.objects.filter(
        Q(email=serializer.initial_data['email']) | Q(username=serializer.initial_data['username'])  # Check for email or username
    )
    if user.exists():
        serializer = EntityUserSerializer(user.first())
        response['success'] = True
        f = serializer.data["first_name"][0]
        l = serializer.data["last_name"][0]
        response['data'] = {"shortname": "{}{}".format(f, l)}
    else:
        response['success'] = False
        response['error'] = ['user_not_exist']
 
    return Response(response)


@api_view(['GET'])
def UserView(request):

    uid = user_authentication(request=request)
    user = ENTITY_USER.objects.filter(id=uid)

    if user and (not user.exists()):
        return Response({}, status=status.HTTP_401_UNAUTHORIZED)

    serializer = EntityUserSerializer(user.first())

    return Response(serializer.data)

@api_view(['POST'])
def LogoutView(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data = {}

    if not request.COOKIES.get('jwt'):
        response = {}
        response['success'] = False
        response['error'] = ['fail_logout']
        return Response(response, status=status.HTTP_401_UNAUTHORIZED)

    response.data['success'] = True
    return response

@api_view(['POST'])
def UpdateUserView(request):
    response = {}
    response["success"] = True

    uid = user_authentication(request=request)
    user = ENTITY_USER.objects.filter(id=uid)

    if not user:
        raise AuthenticationFailed('Unauthenticated!')

    if not user.exists():
        response['success'] = False
        response['error'] = ['user_does_not_exist']
        
        if not request.data:
            response['error'].append('empty_data')

        return Response(response, status=status.HTTP_401_UNAUTHORIZED)

    serializer = EntityUserSerializer(user.first())

    json = JSONRenderer().render(serializer.data)
    data = JSONParser().parse( io.BytesIO(json) )
    data.update(request.data)
    data.update({"password" : decrypt(user.first().password)})

    serializer = EntityUserSerializer(
        instance = ENTITY_USER.objects.get(id=uid),
        data = data
    )
    
    if not serializer.is_valid():
        response["success"] = False
        return Response(response)
    
    serializer.save()
    
    return Response(response)

@api_view(['DELETE'])
def DeleteUserView(request):
    response = Response()
    response.data = {}

    uid = user_authentication(request=request)
    user = ENTITY_USER.objects.filter(id=uid)

    if user and (not user.exists()):
        response = {}
        response['success'] = False
        response['error'] = ['user_does_not_exist']
        return Response(response, status=status.HTTP_401_UNAUTHORIZED)

    user.delete()
    response.data['success'] = True
    response.data['id'] = uid
    response.delete_cookie('jwt')
    return response
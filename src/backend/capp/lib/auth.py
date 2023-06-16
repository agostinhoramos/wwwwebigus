import sys, jwt
from rest_framework.exceptions import AuthenticationFailed

from dotenv import dotenv_values
_env = dotenv_values(".env.local")
sys.path.append( _env["ROOT_PATH"] )

def user_authentication(request):
    token = request.COOKIES.get('jwt')
    if not token:
        raise AuthenticationFailed('Unauthenticated!')
    try:
        payload = jwt.decode(token, _env['AUTH_SECRET'], algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed('Unauthenticated!')
    return payload["id"]
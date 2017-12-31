from settings import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'nextstep',
        'USER': 'nextstepuser',
        'PASSWORD': 'Zimbardo3',
        'HOST': 'marilynmags-625.postgres.pythonanywhere-services.com',
        'PORT': '10625',
    }
}

ALLOWED_HOSTS = ['marilynmags.pythonanywhere.com', 'thenextstep.io']

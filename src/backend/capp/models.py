from django.db import models
from django.utils.timezone import now
from django.utils.translation import gettext_lazy as _

from capp.lib.basic import *

# Create your models here.

# Create your models here.
class LOG_LOCATION(models.Model):
    country = models.CharField(max_length=130)
    address = models.CharField(max_length=120)
    state = models.CharField(max_length=75)
    city = models.CharField(max_length=50)
    zip = models.CharField(max_length=15)
    coord_lat = models.FloatField()
    coord_lon = models.FloatField()
    created_at = models.DateTimeField(blank=True, null=True)
    changed_at = models.DateTimeField(blank=True, null=True)
    verified = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if not self.created_at:
            self.created_at = now()
        super().save(*args, **kwargs)

    def __str__(self):
        return "{} --> {} : {}".format(self.country, self.coord_lat, self.coord_lon)

class ENTITY_USER(models.Model):
    GENDER_CHOICE = (
        ("M", _('MALE')),
        ("F", _('FEMALE')),
    )

    last_name = models.CharField(max_length=105) #
    first_name = models.CharField(max_length=105, null=True) #
    photo = models.CharField(max_length=255, blank=True, null=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICE, blank=True, null=True)
    phone = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=150, unique=True)
    birthday = models.DateField(blank=True, null=True)
    username = models.CharField(max_length=150, unique=True) #
    password = models.CharField(max_length=255, null=True)
    auth_provider = models.CharField(max_length=120, default=None, null=True)
    default_lang = models.CharField(max_length=60, default="EN-GB", blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    changed_at = models.DateTimeField(blank=True, null=True)
    accept_tos = models.BooleanField(default=False, null=True)
    fk_location = models.ForeignKey(LOG_LOCATION, on_delete=models.CASCADE, null=True)

    def save(self, *args, **kwargs):
        if not self.created_at:
            self.created_at = now()
        if self.password:
            self.password = encrypt(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

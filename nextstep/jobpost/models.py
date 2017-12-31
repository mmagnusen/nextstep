from django.conf import settings
from django.db import models
from django.utils import timezone
from company.models import Company
from django import forms

class Post(models.Model):

    PERMANENT = 'Permanent'
    CONTRACT = 'Contract'
    DURATION_CHOICES = (
        (PERMANENT, 'Permanent'),
        (CONTRACT, 'Contract'),
    )


    FULLTIME = 'Full-time'
    PARTTIME = 'Part-time'
    HOURS_CHOICES = (
        (FULLTIME, 'Full-time'),
        (PARTTIME, 'Part-time'),
    )

    INTERN = 'Intern'
    JUNIOR = 'Junior'
    MID = 'Mid-Level'
    SENIOR = 'Senior'
    EXPERIENCE_CHOICES = (
        (INTERN, 'Intern'),
        (JUNIOR, 'Junior'),
        (MID, 'Mid'),
        (SENIOR, 'Senior'),
    )



    author = models.ForeignKey(settings.AUTH_USER_MODEL)
    location = models.CharField(max_length=50)
    title = models.CharField(max_length=40)
    description = models.TextField()
    created_date = models.DateField(
            default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    duration = models.CharField(max_length=20, choices=DURATION_CHOICES, default=PERMANENT)
    hours = models.CharField(max_length=20, choices=HOURS_CHOICES, default=FULLTIME)
    experience = models.CharField(max_length=20, choices=EXPERIENCE_CHOICES, default=INTERN)
    salary = models.CharField(max_length=20, default="Competitive")
    owned_by_company = models.ForeignKey('company.Company', default=1, on_delete=models.CASCADE, related_name="comp", related_query_name="comps")
    application_link = models.CharField(max_length=500, default='/')

    def publish(self):
        self.published_date = timezone.now()
        self.save()


    def __str__(self):
        return self.title

from django.db import models
from django.utils import timezone
from company.models import Company

class Post(models.Model):
    author = models.ForeignKey('auth.User')
    location = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    owned_by_company = models.ForeignKey('company.Company', default=1, on_delete=models.CASCADE, related_name="comp", related_query_name="comps")


    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

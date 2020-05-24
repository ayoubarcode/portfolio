from django.db import models


class AboutManager(models.Manager):
    def draft(self):
        return self.filter(draft=True)


class About(models.Model):
    paragraphe = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    draft = models.BooleanField(default=True)

    objects = AboutManager()

    def __str__(self):
        return str(self.id)

    class Meta:
        ordering = ['id']


class TagsTechnology(models.Model):
    tag_title = models.CharField(max_length=40)
    draft = models.BooleanField(default=True)
    order = models.IntegerField(default=60)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    objects = AboutManager()

    def __str__(self):
        return self.tag_title

    class Meta:
        ordering = ['-updated']

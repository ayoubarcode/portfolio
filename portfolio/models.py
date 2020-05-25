import random
import os
from django.db import models
from about.models import TagsTechnology


def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext


def upload_to(instance, filename):
    new_file_name = random.randint(1, 3910209312)
    name, ext = get_filename_ext(filename)
    final_filename = f'{new_file_name}{ext}'
    return "uploads/{new_file_name}/{final_filename}".format(
        new_file_name=new_file_name,
        final_filename=final_filename
    )


class Portfolio(models.Model):
    project_title = models.CharField(max_length=50)
    project_image = models.ImageField(
        upload_to=upload_to, height_field=None, width_field=None, max_length=None)
    project_description = models.TextField()
    technologies = models.ManyToManyField(TagsTechnology)
    link_visite = models.URLField()
    link_source = models.URLField()
    order = models.IntegerField(default=60)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.project_title

    class Meta:
        ordering = ['order']
        db_table = 'portfolio'

from django.contrib import admin
from .models import About, TagsTechnology


class AboutAdmin(admin.ModelAdmin):
    list_display = ['id', 'paragraphe', 'draft']
    list_editable = ['paragraphe']


class TagsTechnoAdmin(admin.ModelAdmin):
    list_display = ['id', 'tag_title',  'draft', 'order', 'created', 'updated']
    list_editable = ['draft', 'tag_title', 'order']
    list_display_links = ['id']


admin.site.register(About, AboutAdmin)
admin.site.register(TagsTechnology, TagsTechnoAdmin)

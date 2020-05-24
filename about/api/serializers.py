from rest_framework import serializers
from about.models import About, TagsTechnology


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ['id', 'paragraphe', 'draft']


class TagsTechnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TagsTechnology
        fields = ['id', 'tag_title']

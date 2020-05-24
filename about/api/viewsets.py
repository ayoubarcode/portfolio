from rest_framework import generics
from .serializers import AboutSerializer, TagsTechnoSerializer
from about.models import About, TagsTechnology


class AboutViewSet(generics.ListAPIView):
    permission_class = []
    serializer_class = AboutSerializer

    def get_queryset(self):
        qs = About.objects.draft()
        return qs


class TagsTechnoViewSets(generics.ListAPIView):
    permission_class = []
    serializer_class = TagsTechnoSerializer

    def get_queryset(self):
        qs = TagsTechnology.objects.draft().order_by('order')
        return qs

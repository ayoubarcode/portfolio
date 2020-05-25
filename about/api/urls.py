from django.urls import path
from .viewsets import AboutViewSet, TagsTechnoViewSets

'''
/api/about GET all paragraphe

'''
urlpatterns = [
    path('about/', AboutViewSet.as_view()),
    path('tags/', TagsTechnoViewSets.as_view()),
]

from django.urls import path
from .viewsts import ListPortFolioAPI

urlpatterns = [
    path('portfolio/', ListPortFolioAPI.as_view()),
]

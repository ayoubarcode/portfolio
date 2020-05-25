from rest_framework import generics
from .serializers import PortfolioSerializer

from portfolio.models import Portfolio


class ListPortFolioAPI(generics.ListAPIView):
    permissions_class = []
    serializer_class = PortfolioSerializer

    def get_queryset(self):
        qs = Portfolio.objects.all().order_by('order')
        return qs

from rest_framework import serializers
from portfolio.models import Portfolio
from about.api.serializers import TagsTechnoSerializer


class PortfolioSerializer(serializers.ModelSerializer):
    technologies = TagsTechnoSerializer(read_only=True, many=True)

    class Meta:
        model = Portfolio
        fields = ['id', 'project_title', 'project_image', 'project_description',
                  'technologies', 'link_visite', 'link_source']

        read_only_fields = ['technologies']

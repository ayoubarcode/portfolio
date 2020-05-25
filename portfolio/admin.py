from django.contrib import admin
from .models import Portfolio


class PortfolioAdmin(admin.ModelAdmin):
    list_display = ['project_title', 'id', 'project_description', 'order']
    list_editable = ['project_description', 'order']


admin.site.register(Portfolio, PortfolioAdmin)

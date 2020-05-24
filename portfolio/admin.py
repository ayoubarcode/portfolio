from django.contrib import admin
from .models import Portfolio


class PortfolioAdmin(admin.ModelAdmin):
    list_display = ['project_title', 'project_description']
    list_editable = ['project_description']


admin.site.register(Portfolio, PortfolioAdmin)

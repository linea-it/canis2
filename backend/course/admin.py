from django.contrib import admin
from .models import Subscription


@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'institute', 'occupation',
                    'position', 'module_interest',
                    'certificate', 'creation_date',)

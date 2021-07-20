from rest_framework import serializers

from course.models import Subscription


class SubscriptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscription
        fields = (
            'id',
            'name',
            'email',
            'institute',
            'position',
            'occupation',
            'module_interest',
            'certificate',
            'creation_date',
        )

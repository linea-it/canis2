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

    # Return, by default, the display name
    # of the choice field (module_interest):
    module_interest = serializers.SerializerMethodField()

    def get_module_interest(self, obj):
        return obj.get_module_interest_display()

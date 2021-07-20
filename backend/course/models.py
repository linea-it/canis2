from django.db import models


class Subscription(models.Model):
    # Name
    name = models.CharField(
        verbose_name="Name",
        max_length=100,
    )

    # E-mail
    email = models.EmailField(
        verbose_name="E-mail",
        unique=True,
    )

    # Institute
    institute = models.CharField(
        verbose_name="Institute",
        max_length=150,
    )

    # Position
    position = models.CharField(
        verbose_name="Position",
        max_length=150,
    )

    # Institute
    occupation = models.CharField(
        verbose_name="Occupation Area",
        max_length=150,
    )

    # Module Interest?
    module_interest = models.CharField(
        verbose_name="Module Interest",
        choices=(
            ('1', "LIneA Science Server"),
            ('2', "Jupyter Notebook"),
            ('1,2', "LIneA Science Server & Jupyter Notebook"),
        ),
        max_length=150,
    )

    # Needs A Certificate?
    certificate = models.BooleanField(
        verbose_name="Certificate",
        default=False,
    )

    # Creation Date
    creation_date = models.DateTimeField(
        verbose_name="Creation Date",
        auto_now_add=True,
    )

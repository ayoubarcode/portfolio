# Generated by Django 2.2.12 on 2020-05-25 12:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='order',
            field=models.IntegerField(default=60),
        ),
    ]

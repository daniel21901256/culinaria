# Generated by Django 3.2.4 on 2021-06-08 07:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0002_post'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='avaliacao',
            field=models.CharField(max_length=10),
        ),
    ]

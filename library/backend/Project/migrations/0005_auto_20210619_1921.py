# Generated by Django 3.2 on 2021-06-19 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Project', '0004_auto_20210619_1612'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='todo',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
from django.db import models

class Project(models.Model):
    name = models.CharField("Название проекта", max_length=200)
    teaser = models.TextField('Краткое описание')
    siteUrl = models.URLField('Сайт проекта', blank=True)
    logo = models.ImageField("картинка проекта", blank=True)



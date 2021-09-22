from django.db import models

class Meal(models.Model):
    title = models.CharField(max_length=255, default='')

    def __str__(self):
        return self.title

class Food(models.Model):
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255, blank=True)
    serving_size = models.CharField(max_length=255)
    protein = models.PositiveIntegerField(default=0)
    carbohydrates = models.PositiveIntegerField(default=0)
    fats = models.PositiveIntegerField(default=0)
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE, related_name='foods',default='')
    
    def __str__(self):
        return self.name

from rest_framework import serializers
from .models import Meal, Food

class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ['title']

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['meal', 'name', 'brand', 'serving_size', 'protein' , 'carbohydrates' , 'fats']
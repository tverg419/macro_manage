from django.shortcuts import render
from .models import Meal, Food
from .serializers import MealSerializer, FoodSerializer
from rest_framework import generics

def index(request):
    return('hi')

class MealList(generics.ListCreateAPIView):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer

class FoodList(generics.ListCreateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer


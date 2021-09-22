from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('', views.index, name='index'),

    path('meals/', views.MealList.as_view(), name='meal_list'),

    path('food/', views.FoodList.as_view(), name='food_list')
]
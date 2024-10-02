from django.urls import path
from .views import queens_attack, string_value

urlpatterns = [
    path('problem-1/', queens_attack, name='problem_1'),
    path('problem-2/', string_value, name='problem_2'),
]

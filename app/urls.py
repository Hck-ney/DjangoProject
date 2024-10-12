from .views import TemplateView, HomePageView, AboutPageView
from django.urls import path

urlpatterns = [
    path('', HomePageView.as_view(), name = 'index'),
    path('about/', AboutPageView.as_view(), name = 'about'),
]
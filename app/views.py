from django.shortcuts import render
from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = 'app/index.html'

class AboutPageView(TemplateView):
    template_name = 'app/about.html'

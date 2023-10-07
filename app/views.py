from django.shortcuts import render

# Create your views here.

from django.template import loader
from django.http import HttpResponse

def home(request):
    template = loader.get_template("home.html")
    return HttpResponse(template.render())


def login(request):
    template = loader.get_template("login.html")
    return HttpResponse(template.render())

def signup(request):
    template = loader.get_template("signup.html")
    return HttpResponse(template.render())
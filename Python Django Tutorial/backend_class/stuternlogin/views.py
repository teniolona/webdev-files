from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "stuternlogin/login.html")

def createaccount(request):
    return render(request, "stuternlogin/signup.html")
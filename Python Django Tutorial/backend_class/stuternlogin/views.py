from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.http import HttpResponseRedirect as htrd
from django.urls import reverse

# Create your views here.

def index(request):
    if not request.user.is_authenticated:
        return htrd(reverse("stuternlogin:login"))
    return render(request, "stuternlogin/welcome.html", {
        "username" : request.user.username.capitalize()
    })

def createaccount(request):
    return render(request, "stuternlogin/signup.html")

def login_user(request) :
    if request.method == "POST":
        username = request.POST["username"];
        password = request.POST["password"]
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return htrd(reverse("stuternlogin:index"))
        else:
            return render(request, 'stuternlogin/login.html', {
                "message" : "Invalid or Incorrect"
            })
    return render(request, "stuternlogin/login.html")

def logout_user(request):
    logout(request)
    return render(request, "stuternlogin/login.html", {
        "message" : "Logged Out. Byee"
    })
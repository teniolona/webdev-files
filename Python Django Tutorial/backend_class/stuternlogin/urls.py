from . import views
from django.urls import path
#Create URLS here

#So as to avoid the urls colliding when a link directs to the index file or a file with the same url name
app_name = 'stuternlogin'

#Add urlpatterns variable, which would contain the other pages, being led from the functions in the views file.
urlpatterns = [
    path('', views.index, name="index"),
    path("create", views.createaccount, name="create"),
    path("login", views.login_user, name="login"),
    path('logout', views.logout_user, name="logout")
]
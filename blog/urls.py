from django.urls import path
from . import views
urlpatterns = [
    path('',views.index),
    path('index',views.index),
    path('signup',views.signup),
    path('home',views.home),
    path('index.html',views.cixis),
    path('xeberler',views.xeberler)
]
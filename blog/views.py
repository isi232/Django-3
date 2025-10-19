from django.shortcuts import render
from django.http.response import HttpResponse
def index(request):
    return render(request,'blog/index.html')

def signup(request):
    return render(request,'blog/signup.html')

def home(request):
    return render(request,'blog/home.html')

def cixis(request):
    return render(request,'blog/index.html')

def xeberler(request):
    return render(request,'blog/xeberler.html')
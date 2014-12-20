import json
from django.http import JsonResponse
from django.http import HttpResponse
from django.shortcuts import render_to_response, redirect
from django.contrib import auth
from django.core.context_processors import csrf
from django.template import RequestContext


def login(request):
    args = {}
    args.update(csrf(request))
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            args['error'] = 'error'
            return render_to_response('loginsys/login.html', args, context_instance=RequestContext(request))
    else:
        return render_to_response('loginsys/login.html', args, context_instance=RequestContext(request))






from django.shortcuts import render_to_response, redirect
from django.contrib import auth
from django.core.context_processors import csrf
from django.template import RequestContext

def login(request):
    args = RequestContext(request, {

    })
    args.update(csrf(request))
    if request.POST:
        username = request.POST.get('usermane', '')
        password = request.POST.get('password', '')
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            args['auth_error'] = 'Пользователь не найден'
            return render_to_response('loginsys/login.html', args, context_instance=RequestContext(request))
    else:
        return render_to_response('loginsys/login.html', args, context_instance=RequestContext(request))






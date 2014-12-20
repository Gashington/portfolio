from django.shortcuts import get_object_or_404,get_list_or_404, render
from app.portfolio.models import Project

def projects_list(request):
    projects = get_list_or_404(Project)
    return render(request, 'portfolio/portfolio.html', {'projects': projects})

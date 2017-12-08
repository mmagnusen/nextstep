# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.shortcuts import redirect
from django.utils import timezone
from .models import Resume
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from .forms import ResumeForm
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.http import JsonResponse

#@csrf_exempt
#def resume_update(request, pk):
#    resume = get_object_or_404(Resume, pk=pk)
#    content_from_db = resume.content
#    return HttpResponse.content(content_from_db, mimetype='text/html')

#from resume new //     return redirect('resume_edit', pk=newResume.pk)
#
# Create your views here.
def resume_new(request):
    newResume = Resume(name='testy', title = 'test', created_date = timezone.now(), owner = request.user )
    newResume.save()
    return redirect('resume_detail', pk=newResume.pk)

def resume_detail(request, pk):
    resume = get_object_or_404(Resume, pk=pk)
    return render(request, 'resume/resume_detail.html', {'resume': resume})

@csrf_exempt
def resume_update(request, pk):
    resume = get_object_or_404(Resume, pk=pk)
    info_from_db = resume.content
    json_object = {'content': info_from_db}
    text = 'html text here'
    return JsonResponse(json_object)


@csrf_exempt
def resume_save(request, pk):
    if request.method == 'POST':
        resume = get_object_or_404(Resume, pk=pk)
        resume.content = request.body
        resume.publish()
        return render(request, 'resume/resume_detail.html', {'resume': resume})
    else:
        resume = get_object_or_404(Resume, pk=pk)
        resume.content = 'get'
        resume.publish()
        return render(request, 'resume/resume_detail.html', {'resume': resume})


def resume_list(request):
    resumes = Resume.objects.all()
    return render(request, 'resume/resume_list.html', {'resumes': resumes})

def resume_delete(request, pk):
    resume = get_object_or_404(Resume, pk=pk)
    resume.delete()
    return redirect('/user/dashboard', pk=resume.pk)

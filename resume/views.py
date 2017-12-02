# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.shortcuts import redirect
from django.utils import timezone
from .models import Resume
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User


# Create your views here.
def resume_list(request):
    resumes = Resume.objects.all()
    return render(request, 'resume/resume_list.html', {'resumes': resumes})

def resume_detail(request, pk):
    resume = get_object_or_404(Resume, pk=pk)
    return render(request, 'resume/resume_detail.html', {'resume': resume})

def resume_new(request):
        newResume = Resume(name='testy', title = 'test', created_date = timezone.now(), owner = request.user )
        newResume.save()
        return redirect('resume_edit', pk=newResume.pk)

def resume_edit(request, pk):
    resume = get_object_or_404(Resume, pk=pk)
    return redirect('resume_detail', pk=resume.pk)

def resume_delete(request, pk):
    resume = get_object_or_404(Resume, pk=pk)
    resume.delete()
    return redirect('/user/dashboard', pk=resume.pk)

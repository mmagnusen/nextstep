# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.shortcuts import redirect
from django.utils import timezone
from .models import Resume
from django.shortcuts import render, get_object_or_404
from .forms import ResumeForm

# Create your views here.

def resume_list(request):
    resumes = Resume.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'resume/resume_list.html', {'resumes': resumes})

def resume_detail(request, pk):
    resume = get_object_or_404(Resume, pk=pk)
    return render(request, 'resume/resume_detail.html', {'resume': resume})

def resume_new(request):
        newResume = Resume()
        newResume.owner = request.user
        newResume.published_date = timezone.now()
        newResume.save()
        key = newResume.pk

        return redirect('resume_edit', pk=newResume.pk)

def resume_edit(request, pk):
    resume = get_object_or_404(Resume, pk=pk)
    if request.method == 'POST':
        form = PostForm(request.POST, instance=resume)
        if form.is_valid():
            resume = form.save(commit=False)
            resume.author = request.user
            resume.published_date = timezone.now()
            resume.save()
            return redirect('resume_detail', pk=resume.pk)

    else:
        form = ResumeForm(instance=resume)
    return render(request, 'resume/resume_edit.html', {'form': form})

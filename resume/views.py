# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.shortcuts import redirect
from django.utils import timezone
from .models import Resume
from .models import SlideShow
from .models import SingleImage
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from .forms import ResumeForm
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.http import JsonResponse


# Create your views here.
def resume_new(request):
    newResume = Resume(name='Please enter CV name', created_date = timezone.now(), owner = request.user)
    newResume.save()
    return redirect('resume_detail', pk=newResume.pk)

def resume_detail(request, pk):
    viewer = request.user
    resume = get_object_or_404(Resume, pk=pk)
    if viewer == resume.owner:
        return render(request, 'resume/resume_detail.html', {'resume': resume})
    else:
        return render(request, 'resume/resume_no_permission.html', {'resume': resume})

@csrf_exempt
def resume_share(request, share_url):
    resume = Resume.objects.get(share_url=share_url)
    return render(request, 'resume/resume_share.html', {'resume': resume})

@csrf_exempt
def resume_update(request, pk):
    resume = get_object_or_404(Resume, pk=pk)
    cv_content_from_db = resume.content
    name = resume.name
    url = resume.share_url
    json_object = {'content': cv_content_from_db, 'name': name, 'url': url}
    return JsonResponse(json_object)

@csrf_exempt
def resume_populate(request, share_url):
    resume = Resume.objects.get(share_url=share_url)
    content = resume.content
    json_object = {'content': content}
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

@csrf_exempt
def resume_save_name(request, pk):
    if request.method == 'POST':
        resume  = get_object_or_404(Resume, pk=pk)
        resume.name = request.body
        resume.save()
        json_object = {'status': 'lovely lovely, resume name updated'}
        return JsonResponse(json_object)


def resume_list(request):
    resumes = Resume.objects.all()
    return render(request, 'resume/resume_list.html', {'resumes': resumes})

def resume_delete(request, pk):
    resume = get_object_or_404(Resume, pk=pk)
    resume.delete()
    return redirect('/user/dashboard', pk=resume.pk)

@csrf_exempt
def single_image_save(request, pk):
    if request.method == 'POST':
        resume = get_object_or_404(Resume, pk=pk)
        userImage = request.FILES['file']
        newImage = SingleImage(owner= request.user, name = 'image name', parentCV = resume, image = userImage)
        newImage.save()
        json_object = {'content': 'hello', 'name': 'some name', 'url': newImage.image.url}
        return JsonResponse(json_object)

@csrf_exempt
def create_slide_show(request, pk):
    if request.method == 'POST':
        resume = get_object_or_404(Resume, pk=pk)
        newSlideshow = SlideShow(owner=request.user, parentCV=resume)
        newSlideshow.save()
        json_object = {'slideshowPK': newSlideshow.pk}
        return JsonResponse(json_object)

@csrf_exempt
def unpack_images(request, pk):
    if request.method == 'POST':
        json_object = {'slideshowPK': 'newSlideshow.pk'}
        return JsonResponse(json_object)

# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.shortcuts import redirect
from django.utils import timezone
from .models import Company
from django.shortcuts import render, get_object_or_404
from .forms import CompanyForm

# Create your views here.
def company_detail(request, pk):
    company = get_object_or_404(Company, pk=pk)
    return render(request, 'company/company_detail.html', {'company': company})


def company_new(request):
    if request.method == 'POST':
        form = CompanyForm(request.POST, request.FILES)
        if form.is_valid():
            data = form.cleaned_data
            small_logo_placement ='website_defaults/logo_small_default.png'
            large_logo_placement ='website_defaults/logo_large_default.png'
            name = data['name']
            description = data['description']
            newCompany = Company(owner=request.user, small_logo=small_logo_placement, large_logo=large_logo_placement, name=name, description=description)
            if request.FILES['small_logo']:
                newCompany.small_logo = request.FILES['small_logo']
            if request.FILES['large_logo']:
                newCompany.small_logo = request.FILES['large_logo']
            newCompany.save()
            return redirect('/user/dashboard', pk=newCompany.pk)

    else:
        form = CompanyForm()
    return render(request, 'company/company_edit.html', {'form': form})

def company_edit(request, pk):
    company = get_object_or_404(Company, pk=pk)
    if request.method == 'POST':
        form = CompanyForm(request.POST, instance=company)
        if form.is_valid():
            company = form.save(commit=False)
            company.owner = request.user
            company.created_date = timezone.now()
            company.save()
            return redirect('company_detail', pk=company.pk)

    else:
        form = CompanyForm(instance=company)
    return render(request, 'company/company_edit.html', {'form': form})

def company_delete(request, pk):
    company = get_object_or_404(Company, pk=pk)
    company.delete()
    return redirect('/user/dashboard', pk=company.pk)

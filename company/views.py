# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.shortcuts import redirect
from django.utils import timezone
from .models import Company
from django.shortcuts import render, get_object_or_404
from .forms import CompanyForm


# Create your views here.
def company_list(request):
    companies = Company.objects.all()
    return render(request, 'company/company_list', {'companies': companies})

def company_detail(request, pk):
    company = get_object_or_404(Company, pk=pk)
    return render(request, 'company/company_detail.html', {'company': company})

def company_new(request):
    if request.method == 'POST':
        form = CompanyForm(request.POST, request.FILES)
        if form.is_valid():
            company = form.save(commit=False)
            company.owner = request.user
            company.created_date = timezone.now()
            company.save()
            return redirect('/user/dashboard', pk=company.pk)

    else:
        form = CompanyForm()
    return render(request, 'company/company_edit.html', {'form': form})

def company_edit(request, pk):
    company = get_object_or_404(Company, pk=pk)
    if request.method == 'POST':
        form = CompanyForm(request.POST, request.FILES, instance=company)
        if form.is_valid():
            company = form.save(commit=False)
            company.owner = request.user
            company.created_date = timezone.now()
            company.save()
            return redirect('/user/dashboard', pk=company.pk)

    else:
        form = CompanyForm(instance=company)
    return render(request, 'company/company_edit.html', {'form': form})

def company_delete(request, pk):
    company = get_object_or_404(Company, pk=pk)
    company.delete()
    return redirect('/user/dashboard', pk=company.pk)

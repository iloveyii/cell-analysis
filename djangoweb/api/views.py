from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
import ast
import json
import re
from api.models import Model

from django.core.files.storage import FileSystemStorage

FILE_FIELD_NAME = 'fcs_file'


# Create your views here.
@csrf_exempt
def upload(request):
    if request.method == 'POST' and request.FILES[FILE_FIELD_NAME]:
        upload_file = request.FILES[FILE_FIELD_NAME]
        print('FILE is POSTED', upload_file)
        print(upload_file.name)
        print(upload_file.size)
        fs = FileSystemStorage()
        filename_formatted = re.sub('[^0-9a-zA-Z.]+', '_', 'fcs_file.fcs')
        filename = fs.save(filename_formatted, upload_file)
        uploaded_file_url = fs.url(filename)
        # analyze = Analysis(upload_file.name)
        data = {
            'name': upload_file.name,
            'size': upload_file.size,
            'file_url': uploaded_file_url,
            # 'analysis': analyze.do()
        }
        json_str = json.dumps(data)
        return HttpResponse(json_str)

    else:
        text = """<h1>welcome to my app - hello !</h1>"""
        context = {
            'name': 'CELL ANALYSIS'
        }
        return render(request, 'upload.html', context=context)
        # return HttpResponse(text)


def about(request):
    return render(request, 'about.html')


def binary_to_dict(the_binary):
    jsn = ''.join(chr(int(x, 2)) for x in the_binary.split())
    d = json.loads(jsn)
    return d


def react(request):
    print("Inside react")
    return render(request, 'index.html')


def welcome(request):
    return render(request, 'welcome.html')


# DB DATA
def analysis(request):
    data = {
        'user': {
            'name': 'Alex',
            'age': 19
        }
    }
    a = Model.objects.all()
    # print(serializers.serialize('json', a))
    # json_str = json.dumps(data)
    # print(json_str)
    json_str = serializers.serialize('json', a)
    return HttpResponse(json_str)


@csrf_exempt
def get_plot(request):
    tr = Transformed()
    x = 'FSC-A'
    y = 'SSC-A'
    df = tr.get_plot_data(x,y, 'hlog', 'fname.tst')
    labels = df[x].to_list()
    series = df[y].to_list()
    data = [
        labels, series
    ]
    json_str = json.dumps(data)
    return HttpResponse(json_str)


# ANALYSIS METHODS
def basic(request):
    # TEST RUN
    basic = Basic()
    # basic.plot_columns('V2-A')
    channels = basic.get_channel_names()
    meta = basic.get_meta()
    data = {
        'channel_names': channels,
        # 'meta': meta.keys()  #(meta['__header__']).decode("UTF-8")
        # 'head': basic.head().to_json()
    }
    # print('Meta :')
    # print(meta['__header__'])
    json_str = json.dumps(data)
    # print(json_str)
    # json_str = serializers.serialize('json', a)
    return HttpResponse(json_str)


def transformed(request):
    tr = Transformed()
    df = tr.transform_data()
    return HttpResponse(df.to_json())


def heatmap(request):
    hmap = Hmap()
    df = hmap.generate_hmap()
    return HttpResponse(df.to_json())


def gated(request):
    gated = Gated()
    df = gated.generate_gated()
    return HttpResponse(df.to_json())
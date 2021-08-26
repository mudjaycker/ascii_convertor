from django.http import JsonResponse
from django.shortcuts import render


def home(request):
    return render(request, "index.html")


def compute(request):
    req = request.POST.get("numvalue")
    binaire = ""
    hexadec = ""
    binaire_tab = []
    hexadec_tab = []

    if req == "":
        binaire = ""
        hexadec = ""
        
    else:
        for i in req:
            n = ord(i)
            binaire_tab.append(bin(int(n))[2:])
            hexadec_tab.append(format(int(n),'X'))
            
        binaire = ' '.join([str(item) for item in binaire_tab])
        hexadec = ' '.join([str(item) for item in hexadec_tab])
        # print(binaire)
        # print(hexadec)
    contex = {
        "result_of_binairy":binaire,
        "result_of_hexadec":hexadec,
    }
    return JsonResponse(contex)
import json
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here
from . import db

mydb=db.myclient["park-it"]
mycol=mydb["users"]

@csrf_exempt
@csrf_exempt
def adduser(request):
    try:
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        # Insert user data into MongoDB
        user = mycol.insert_one(body)
        
        print(f"User inserted with id: {user.inserted_id}")

        return HttpResponse('User added successfully')
    except Exception as e:
        print(f"Error: {e}")
        return HttpResponse(f"Failed to add user: {e}", status=500)

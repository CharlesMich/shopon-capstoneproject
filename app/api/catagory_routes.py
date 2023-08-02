from flask import Blueprint, request
from app.models import db, Catagory
from flask_login import login_required, current_user
from app.api.awsS3 import (get_unique_filename, allowed_file, upload_file_to_s3)

catagory_route = Blueprint('catagory', __name__)

# get all catagories
@catagory_route.route('/', methods = ["GET"])
def getProducts():
    catagories = Catagory.query.all()
    return [catagory.to_dict() for catagory in catagories]

# get single catagory
@catagory_route.route('/<int:id>', methods = ["GET"])
def singleCatagory(id):
    catagory = Catagory.query.filter(Catagory.id == id).first()
    return catagory.to_dict()

# add a catagory
@catagory_route.route('/new', methods = ["GET", "POST"])
def AddCatagory():
    if "img" not in request.files:
        return {"errors": "img required"}, 400
    
    img = request.files["img"]

    if not allowed_file(img.filename):
        return {"errors": "file type not permitted"}, 400
   
    img.filename = get_unique_filename(img.filename)

    form = request.form
    
    upload = upload_file_to_s3(img)
   
    url = upload["url"]
   
    if "url" not in upload:
        return upload, 400
   
    newCatagory = Catagory(
        catagory = form["catagory"],
        seller = form["seller"],
        img = url,
    )

    db.session.add(newCatagory)
    db.session.commit()
    return newCatagory.to_dict()

# delete catagory
@catagory_route.route('/delete/<int:id>', methods = ["GET", "POST"])
def deleteCatagory(id):
    catagory = Catagory.query.filter(Catagory.id == id).first()
    db.session.delete(catagory)
    db.session.commit()
    return {"message": "Successfully Deleted"}

#update a catagory
@catagory_route.route('/update/<int:id>', methods = ["GET", "POST"])
def updateCatagory(id):
    catagory = Catagory.query.filter(Catagory.id == id).first()
    if request.method == "POST":
        form = request.form
        print(form)
        print(request.files)
        if "img" in request.files:
            img = request.files["img"]
            img.filename = get_unique_filename(img.filename)
            upload = upload_file_to_s3(img)
            url = upload["url"]
            update_catagory_img = url
            catagory.img = update_catagory_img
        else:
            update_catagory_img = form['img']
            catagory.img = update_catagory_img
        
        update_catagory_catagory = form['catagory']
        catagory.catagory = update_catagory_catagory
       
        db.session.commit()
        return catagory.to_dict()
    return {"error": "Review Rejected"}


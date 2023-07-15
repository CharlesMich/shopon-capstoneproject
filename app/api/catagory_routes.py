from flask import Blueprint, request
from app.models import db, Catagory
from flask_login import login_required, current_user

catagory_route = Blueprint('catagory', __name__)

# get all products
@catagory_route.route('/', methods = ["GET"])
def getProducts():
    catagories = Catagory.query.all()
    return [catagory.to_dict() for catagory in catagories]

# get single product
@catagory_route.route('/<int:id>', methods = ["GET"])
def singleCatagory(id):
    catagory = Catagory.query.filter(Catagory.id == id).first()
    return catagory.to_dict()



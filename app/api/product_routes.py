from flask import Blueprint, request
from app.models import db, Product
from flask_login import login_required, current_user

product_route = Blueprint('product', __name__)

# get all products
@product_route.route('/', methods = ["GET"])
def getProducts():
    products = Product.query.all()
    return [product.to_dict() for product in products]

# get single product
@product_route.route('/<int:id>', methods = ["GET"])
def singleProduct(id):
    product = Product.query.filter(Product.id == id).first()
    return product.to_dict()

# get search product
@product_route.route('/<text>', methods = ["GET"])
def searchProduct(text):
    formatted_text = f'%{text}%'
    product = Product.query.filter(Product.name.ilike(formatted_text)).all()
    print(product)
    return [prod.to_dict() for prod in product]



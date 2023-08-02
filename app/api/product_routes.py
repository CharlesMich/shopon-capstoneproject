from flask import Blueprint, request
from app.models import db, Product
from app.forms import ProductForm
from flask_login import login_required, current_user
from app.api.awsS3 import (get_unique_filename, allowed_file, upload_file_to_s3)

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
    return [prod.to_dict() for prod in product]

# add a product
@product_route.route('/new', methods = ["GET", "POST"])
def AddProduct():
    if "img1" not in request.files:
        return {"errors": "img1 required"}, 400
    if "img2" not in request.files:
        return {"errors": "img2 required"}, 400
    if "img3" not in request.files:
        return {"errors": "img3 required"}, 400
    if "img4" not in request.files:
        return {"errors": "img4 required"}, 400
    if "img5" not in request.files:
        return {"errors": "img5 required"}, 400
    
    img1 = request.files["img1"]
    img2 = request.files["img2"]
    img3 = request.files["img3"]
    img4 = request.files["img4"]
    img5 = request.files["img5"]

    if not allowed_file(img1.filename):
        return {"errors": "file type not permitted"}, 400
    if not allowed_file(img2.filename):
        return {"errors": "file type not permitted"}, 400
    if not allowed_file(img3.filename):
        return {"errors": "file type not permitted"}, 400
    if not allowed_file(img4.filename):
        return {"errors": "file type not permitted"}, 400
    if not allowed_file(img5.filename):
        return {"errors": "file type not permitted"}, 400

    img1.filename = get_unique_filename(img1.filename)
    img2.filename = get_unique_filename(img2.filename)
    img3.filename = get_unique_filename(img3.filename)
    img4.filename = get_unique_filename(img4.filename)
    img5.filename = get_unique_filename(img5.filename)

    form = request.form
    
    upload1 = upload_file_to_s3(img1)
    upload2 = upload_file_to_s3(img2)
    upload3 = upload_file_to_s3(img3)
    upload4 = upload_file_to_s3(img4)
    upload5 = upload_file_to_s3(img5)

    url1 = upload1["url"]
    url2 = upload2["url"]
    url3 = upload3["url"]
    url4 = upload4["url"]
    url5 = upload5["url"]

    if "url" not in upload1:
        return upload1, 400
    if "url" not in upload2:
        return upload2, 400
    if "url" not in upload3:
        return upload3, 400
    if "url" not in upload4:
        return upload4, 400
    if "url" not in upload5:
        return upload5, 400

    newProduct = Product(
        name = form["name"],
        seller = form["seller"],
        product_shortdescription = form["product_shortdescription"],
        product_longdescription = form["product_longdescription"],
        price = form["price"],
        catagory_id = form['catagory_id'],
        img1 = url1,
        img2 = url2,
        img3 = url3,
        img4 = url4,
        img5 = url5,
    )

    db.session.add(newProduct)
    db.session.commit()
    return newProduct.to_dict()

# delete product
@product_route.route('/delete/<int:id>', methods = ["GET", "POST"])
def deleteProduct(id):
    product = Product.query.filter(Product.id == id).first()
    db.session.delete(product)
    db.session.commit()
    return {"message": "Successfully Deleted"}

#update a product
@product_route.route('/update/<int:id>', methods = ["GET", "POST"])
def updateProduct(id):
    print('id', id)
    print('request.form', request.form)
    product = Product.query.filter(Product.id == id).first()
    if request.method == "POST":

        form = request.form

        if "img1" in request.files:
            img1 = request.files["img1"]
            img1.filename = get_unique_filename(img1.filename)
            upload1 = upload_file_to_s3(img1)
            url1 = upload1["url"]
            update_product_img1 = url1
            product.img1 = update_product_img1
        else:
            update_product_img1 = form['img1']
            product.img1 = update_product_img1

        if "img2" in request.files:
            img2 = request.files["img2"]
            img2.filename = get_unique_filename(img2.filename)
            upload2 = upload_file_to_s3(img2)
            url2 = upload2["url"]
            update_product_img2 = url2
            product.img2 = update_product_img2
        else:
            update_product_img2 = form['img2']
            product.img2 = update_product_img2    

        if "img3" in request.files:
            img3 = request.files["img3"]
            img3.filename = get_unique_filename(img3.filename)
            upload3 = upload_file_to_s3(img3)
            url3 = upload3["url"]
            update_product_img3 = url3
            product.img3 = update_product_img3
        else:
            update_product_img3 = form['img3']
            product.img3 = update_product_img3    

        if "img4" in request.files:
            img4 = request.files["img4"]
            img4.filename = get_unique_filename(img4.filename)
            upload4 = upload_file_to_s3(img4)
            url4 = upload4["url"]
            update_product_img4 = url4
            product.img4 = update_product_img4
        else:
            update_product_img4 = form['img4']
            product.img4 = update_product_img4    

        if "img5" in request.files:
            img5 = request.files["img5"]
            img5.filename = get_unique_filename(img5.filename)
            upload5 = upload_file_to_s3(img5)
            url5 = upload5["url"]
            update_product_img5 = url5
            product.img5 = update_product_img5
        else:
            update_product_img5 = form['img5']
            product.img5 = update_product_img5                
        
        update_product_name = form['name']
        product.name = update_product_name
        update_product_shortdescription = form['product_shortdescription']
        product.product_shortdescription = update_product_shortdescription
        update_product_longdescription = form['product_longdescription']
        product.product_longdescription = update_product_longdescription
        update_product_catagoryId = form['catagory_id']
        product.catagory_id = update_product_catagoryId
        update_product_price = form['price']
        product.price = update_product_price
        
        db.session.commit()
        return product.to_dict()
    return {"error": "Product Rejected"}



    



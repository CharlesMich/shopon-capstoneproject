from flask import Blueprint, request
from app.models import db, Cart_Product
from app.forms import CartProductForm
from flask_login import login_required, current_user

cartproduct_route = Blueprint('cartproduct', __name__)


# Get all items in cart
@cartproduct_route.route('/', methods = ["GET"])
def getCartProduct():
    cartProducts = Cart_Product.query.all()
    print([cartProduct.to_dict() for cartProduct in cartProducts])
    return [cartProduct.to_dict() for cartProduct in cartProducts]


# Post item to cart
@cartproduct_route.route('/new', methods = ["POST"])
def postCartProduct():
    form = CartProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    print('data', data)
    if form.validate_on_submit():
        newCartItem = Cart_Product(
            cart_id =data['cart_id'],
            product_id = data['product_id'],
            quantity = data['quantity'],
            price = data['price']
        ) 

        db.session.add(newCartItem)
        db.session.commit()
        return newCartItem.to_dict()
    
    # update image in cart
@cartproduct_route.route('/update-cart/<int:id>', methods =["GET", "POST"])
def cartProductUpdate(id):
    cartProduct = Cart_Product.query.filter(Cart_Product.id == id).first()
    if request.method == "POST":
        print(cartProduct)
        data =request.get_json()
        cart_product_update = data.get('quantity')
        cartProduct.quantity = cart_product_update
        db.session.commit()
        return cartProduct.to_dict()
    return {"error": "update rejected"}


@cartproduct_route.route('/delete-cart/<int:id>', methods = ["GET", "POST"])
def cartProductDelete(id):
    cartProduct = Cart_Product.query.filter(Cart_Product.id == id).first()
    db.session.delete(cartProduct)
    db.session.commit()
    return {"product": "product deleted"}